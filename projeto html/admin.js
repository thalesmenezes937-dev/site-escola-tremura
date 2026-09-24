/* =====================================================
   ELEMENTOS DA PÁGINA
===================================================== */

const loginArea = document.getElementById("loginArea");
const adminArea = document.getElementById("adminArea");

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

const logoutButton = document.getElementById("logoutButton");

const eventForm = document.getElementById("eventForm");
const eventDate = document.getElementById("eventDate");
const eventTitle = document.getElementById("eventTitle");
const eventDescription = document.getElementById("eventDescription");

const deleteButton = document.getElementById("deleteButton");
const eventsList = document.getElementById("eventsList");


/* =====================================================
   VERIFICAR SE ESTÁ LOGADO
===================================================== */

async function checkAdmin() {

    const {
        data: { session },
        error
    } = await supabaseClient.auth.getSession();

    if (error) {

        console.error(
            "Erro ao verificar sessão:",
            error
        );

        showLogin();

        return;
    }

    if (session) {

        showAdmin();

    } else {

        showLogin();

    }

}


/* =====================================================
   MOSTRAR ÁREA DE LOGIN
===================================================== */

function showLogin() {

    loginArea.hidden = false;
    adminArea.hidden = true;

}


/* =====================================================
   MOSTRAR PAINEL ADMINISTRATIVO
===================================================== */

function showAdmin() {

    loginArea.hidden = true;
    adminArea.hidden = false;

    loadEvents();

}


/* =====================================================
   LOGIN
===================================================== */

loginForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        loginMessage.textContent =
            "Entrando...";

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const password =
            document
                .getElementById("password")
                .value;


        const {
            data,
            error
        } =
            await supabaseClient.auth.signInWithPassword({

                email: email,

                password: password

            });


        if (error) {

            console.error(
                "Erro no login:",
                error
            );

            loginMessage.textContent =
                "E-mail ou senha incorretos.";

            return;
        }


        loginMessage.textContent = "";

        showAdmin();

    }
);


/* =====================================================
   SAIR DA ÁREA ADMINISTRATIVA
===================================================== */

logoutButton.addEventListener(
    "click",
    async function () {

        const {
            error
        } =
            await supabaseClient.auth.signOut();


        if (error) {

            console.error(
                "Erro ao sair:",
                error
            );

            return;
        }


        clearForm();

        showLogin();

    }
);


/* =====================================================
   CARREGAR EVENTOS
===================================================== */

async function loadEvents() {

    eventsList.innerHTML =
        "<p>Carregando eventos...</p>";


    const {
        data,
        error
    } =
        await supabaseClient
            .from("calendar_events")
            .select("*")
            .order(
                "event_date",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(
            "Erro ao carregar eventos:",
            error
        );

        eventsList.innerHTML =
            "<p>Erro ao carregar os eventos.</p>";

        return;
    }


    eventsList.innerHTML = "";


    if (!data || data.length === 0) {

        eventsList.innerHTML = `
            <p>
                Nenhum evento cadastrado.
            </p>
        `;

        return;
    }


    data.forEach(
        function (event) {

            const item =
                document.createElement("div");


            item.className =
                "admin-event";


            item.innerHTML = `

                <div>

                    <strong>
                        ${formatDate(event.event_date)}
                    </strong>

                    <h3>
                        ${escapeHTML(event.title)}
                    </h3>

                    ${event.description
                    ? `
                                <p>
                                    ${escapeHTML(
                        event.description
                    )}
                                </p>
                              `
                    : ""
                }

                </div>

                <button
                    type="button"
                    class="edit-event-button">

                    Editar

                </button>

            `;


            const editButton =
                item.querySelector(
                    ".edit-event-button"
                );


            editButton.addEventListener(
                "click",
                function () {

                    eventDate.value =
                        event.event_date;

                    eventTitle.value =
                        event.title;

                    eventDescription.value =
                        event.description || "";


                    eventForm.dataset.id =
                        event.id;


                    eventDate.focus();


                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }
            );


            eventsList.appendChild(item);

        }
    );

}


/* =====================================================
   SALVAR OU EDITAR EVENTO
===================================================== */

eventForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const date =
            eventDate.value;


        const title =
            eventTitle.value.trim();


        const description =
            eventDescription.value.trim();


        if (!date) {

            alert(
                "Selecione uma data."
            );

            return;
        }


        if (!title) {

            alert(
                "Digite o nome do evento."
            );

            return;
        }


        const id =
            eventForm.dataset.id;


        let result;


        /* =============================================
           EDITAR EVENTO EXISTENTE
        ============================================= */

        if (id) {

            result =
                await supabaseClient
                    .from("calendar_events")
                    .update({

                        event_date:
                            date,

                        title:
                            title,

                        description:
                            description,

                        updated_at:
                            new Date()
                                .toISOString()

                    })
                    .eq(
                        "id",
                        id
                    );


        }

        /* =============================================
           CRIAR NOVO EVENTO
        ============================================= */

        else {

            result =
                await supabaseClient
                    .from("calendar_events")
                    .insert({

                        event_date:
                            date,

                        title:
                            title,

                        description:
                            description

                    });

        }


        if (result.error) {

            console.error(
                "Erro ao salvar:",
                result.error
            );


            if (
                result.error.code === "23505"
            ) {

                alert(
                    "Já existe um evento cadastrado para essa data."
                );

            } else {

                alert(
                    "Não foi possível salvar o evento."
                );

            }

            return;
        }


        alert(
            id
                ? "Evento atualizado com sucesso!"
                : "Evento criado com sucesso!"
        );


        clearForm();


        await loadEvents();

    }
);


/* =====================================================
   APAGAR EVENTO
===================================================== */

deleteButton.addEventListener(
    "click",
    async function () {

        const id =
            eventForm.dataset.id;


        if (!id) {

            alert(
                "Primeiro selecione um evento para apagar."
            );

            return;
        }


        const confirmDelete =
            window.confirm(
                "Tem certeza que deseja apagar este evento?"
            );


        if (!confirmDelete) {

            return;
        }


        const {
            error
        } =
            await supabaseClient
                .from("calendar_events")
                .delete()
                .eq(
                    "id",
                    id
                );


        if (error) {

            console.error(
                "Erro ao apagar:",
                error
            );

            alert(
                "Não foi possível apagar o evento."
            );

            return;
        }


        alert(
            "Evento apagado com sucesso!"
        );


        clearForm();


        await loadEvents();

    }
);


/* =====================================================
   LIMPAR FORMULÁRIO
===================================================== */

function clearForm() {

    eventDate.value = "";

    eventTitle.value = "";

    eventDescription.value = "";

    delete eventForm.dataset.id;

}


/* =====================================================
   FORMATAR DATA
===================================================== */

function formatDate(date) {

    if (!date) {

        return "";

    }


    const parts =
        date.split("-");


    if (parts.length !== 3) {

        return date;

    }


    return (
        `${parts[2]}/${parts[1]}/${parts[0]}`
    );

}


/* =====================================================
   PROTEGER TEXTOS
===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


/* =====================================================
   INICIAR SISTEMA
===================================================== */

checkAdmin();