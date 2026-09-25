const projetos = {

    robotica: {
        icon: "🤖",
        title: "Robótica",
        description: "Projeto voltado ao desenvolvimento da criatividade, lógica, trabalho em equipe, montagem e programação.",
        activities: [
            {
                date: "2026",
                title: "Oficina de montagem",
                description: "Coloque aqui a descrição da atividade realizada pelos estudantes.",
                image: "fotos/robotica-1.jpg"
            },
            {
                date: "2026",
                title: "Desafio de programação",
                description: "Descreva o desafio realizado, as turmas participantes e os resultados.",
                image: "fotos/robotica-2.jpg"
            },
            {
                date: "2026",
                title: "Apresentação dos projetos",
                description: "Descreva a apresentação dos projetos desenvolvidos.",
                image: "fotos/robotica-3.jpg"
            }
        ]
    },

    tecnologia: {
        icon: "💻",
        title: "Tecnologia",
        description: "Atividades relacionadas à informática, ferramentas digitais, programação, inovação e soluções tecnológicas.",
        activities: [
            {
                date: "2026",
                title: "Oficina de tecnologia",
                description: "Descreva a oficina realizada.",
                image: "fotos/tecnologia-1.jpg"
            },
            {
                date: "2026",
                title: "Projeto digital",
                description: "Descreva o projeto desenvolvido pelos estudantes.",
                image: "fotos/tecnologia-2.jpg"
            }
        ]
    },

    viagens: {
        icon: "🏭",
        title: "Visitas e Experiências",
        description: "Viagens, visitas técnicas e novas experiências.",
        activities: [
            {
                date: "2026",
                title: "Visita técnica à BP Bionergy",
                description: "Visita técnica realizada pelos estudantes.",
                poster: "assents/capa.v.jpeg",
                video: "assents/visita.mp4",
                images: [
                    "assents/visitas-1.jpg",
                    "assents/visitas-2.jpg",
                    "assents/visitas-3.jpg",
                    "assents/visitas-4.jpg"
                ]
            }
        ]
    },

    ambiente: {
        icon: "🌱",
        title: "Meio Ambiente",
        description: "Projetos de sustentabilidade, preservação e conscientização ambiental.",
        activities: [
            {
                date: "2026",
                title: "Ação ambiental",
                description: "Descreva a ação ambiental realizada.",
                image: "fotos/ambiente-1.jpg"
            },
            {
                date: "2026",
                title: "Projeto de sustentabilidade",
                description: "Descreva a atividade realizada.",
                image: "fotos/ambiente-2.jpg"
            }
        ]
    },

    esportes: {
        icon: "🏆",
        title: "Esportes",
        description: "Atividades esportivas que promovem saúde, integração, respeito e cooperação.",
        activities: [
            {
                date: "2026",
                title: "Jogos escolares",
                description: "Descreva os jogos e modalidades.",
                image: "fotos/esportes-1.jpg"
            },
            {
                date: "2026",
                title: "Atividade esportiva",
                description: "Descreva a atividade.",
                image: "fotos/esportes-2.jpg"
            }
        ]
    },

    cultura: {
        icon: "🎭",
        title: "Cultura",
        description: "Atividades artísticas, culturais, musicais, teatrais e de expressão.",
        activities: [
            {
                date: "2026",
                title: "Semana da Cultura",
                description: "Descreva as atividades culturais realizadas.",
                image: "fotos/cultura-1.jpg"
            },
            {
                date: "2026",
                title: "Apresentação artística",
                description: "Descreva a apresentação.",
                image: "fotos/cultura-2.jpg"
            }
        ]
    },

    familia: {
        icon: "🤝",
        title: "Família na Escola",
        description: "Ações que aproximam famílias, estudantes e comunidade escolar.",
        activities: [
            {
                date: "2026",
                title: "Encontro com as famílias",
                description: "Descreva o encontro realizado.",
                image: "fotos/familia-1.jpg"
            }
        ]
    },

    outros: {
        icon: "⭐",
        title: "Outros Projetos",
        description: "Outros projetos, campanhas, oficinas e ações desenvolvidas pela escola.",
        activities: [
            {
                date: "2026",
                title: "Atividade escolar",
                description: "Adicione aqui os detalhes da atividade.",
                image: "fotos/outros-1.jpg"
            }
        ]
    }
};

projetos.leitura = projetos.viagens;


/* =========================
   MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function abrirMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.add("active");
    menuToggle.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");
}

function fecharMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

function alternarMenu() {
    if (!mainNav) return;

    if (mainNav.classList.contains("active")) {
        fecharMenu();
    } else {
        abrirMenu();
    }
}

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", alternarMenu);

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("click", event => {
        if (
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            fecharMenu();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            fecharMenu();
        }
    });
}


/* =========================
   PROJETOS
========================= */

const projectList =
    document.getElementById("projectList");

const projectDetails =
    document.getElementById("projectDetails");

const detailIcon =
    document.getElementById("detailIcon");

const detailTitle =
    document.getElementById("detailTitle");

const detailDescription =
    document.getElementById("detailDescription");

const activityList =
    document.getElementById("activityList");

const backProjects =
    document.getElementById("backProjects");


function abrirProjeto(nome) {

    const projeto = projetos[nome];

    if (!projeto || !projectList || !projectDetails) {
        return;
    }

    if (detailIcon) {
        detailIcon.textContent = projeto.icon;
    }

    if (detailTitle) {
        detailTitle.textContent = projeto.title;
    }

    if (detailDescription) {
        detailDescription.textContent = projeto.description;
    }

    if (activityList) {

        activityList.innerHTML = "";

        projeto.activities.forEach(function (atividade) {

            const card =
                document.createElement("article");

            card.className =
                "activity-card";


            /* INFORMAÇÕES */

            const info =
                document.createElement("div");

            info.className =
                "activity-info";


            const meta =
                document.createElement("span");

            meta.className =
                "activity-meta";

            meta.textContent =
                "📅 " + atividade.date;


            const title =
                document.createElement("h4");

            title.textContent =
                atividade.title;


            const description =
                document.createElement("p");

            description.textContent =
                atividade.description;


            info.appendChild(meta);
            info.appendChild(title);
            info.appendChild(description);

            card.appendChild(info);


            /* VÍDEO PRINCIPAL */

            if (atividade.video) {

                const videoArea =
                    document.createElement("div");

                videoArea.className =
                    "activity-video";


                const video =
                    document.createElement("video");

                video.controls = true;
                video.playsInline = true;
                video.preload = "metadata";


                if (atividade.poster) {
                    video.poster =
                        atividade.poster;
                }


                video.src =
                    atividade.video;


                videoArea.appendChild(video);

                card.appendChild(videoArea);
            }


            /* FOTOS */

            if (
                atividade.images &&
                atividade.images.length > 0
            ) {

                const photosTitle =
                    document.createElement("h5");

                photosTitle.className =
                    "activity-media-title";

                photosTitle.textContent =
                    "Fotos da atividade";


                card.appendChild(photosTitle);


                const photos =
                    document.createElement("div");

                photos.className =
                    "activity-images";


                atividade.images.forEach(
                    function (imageSrc) {

                        const image =
                            document.createElement("img");

                        image.src =
                            imageSrc;

                        image.alt =
                            atividade.title;

                        image.loading =
                            "lazy";

                        photos.appendChild(image);
                    }
                );


                card.appendChild(photos);
            }


            /* VÁRIOS VÍDEOS */

            if (
                atividade.videos &&
                atividade.videos.length > 0
            ) {

                const videosTitle =
                    document.createElement("h5");

                videosTitle.className =
                    "activity-media-title";

                videosTitle.textContent =
                    "Vídeos da atividade";


                card.appendChild(videosTitle);


                const videos =
                    document.createElement("div");

                videos.className =
                    "activity-videos";


                atividade.videos.forEach(
                    function (videoData) {

                        const video =
                            document.createElement("video");

                        video.controls = true;
                        video.playsInline = true;
                        video.preload = "metadata";


                        if (
                            typeof videoData === "string"
                        ) {

                            video.src =
                                videoData;

                        } else {

                            video.src =
                                videoData.src;

                            if (videoData.poster) {

                                video.poster =
                                    videoData.poster;
                            }
                        }


                        videos.appendChild(video);
                    }
                );


                card.appendChild(videos);
            }


            /* FOTO ÚNICA */

            if (
                atividade.image &&
                !atividade.images
            ) {

                const photoTitle =
                    document.createElement("h5");

                photoTitle.className =
                    "activity-media-title";

                photoTitle.textContent =
                    "Foto da atividade";


                card.appendChild(photoTitle);


                const photos =
                    document.createElement("div");

                photos.className =
                    "activity-images";


                const image =
                    document.createElement("img");

                image.src =
                    atividade.image;

                image.alt =
                    atividade.title;

                image.loading =
                    "lazy";


                photos.appendChild(image);

                card.appendChild(photos);
            }


            activityList.appendChild(card);
        });
    }


    projectList.hidden = true;

    projectDetails.hidden = false;


    projectDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================
   CLIQUE NOS PROJETOS
========================= */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                abrirProjeto(
                    card.dataset.project
                );

            }
        );

    });


/* =========================
   VOLTAR PARA PROJETOS
========================= */

if (backProjects) {

    backProjects.addEventListener(
        "click",
        () => {

            if (projectDetails) {
                projectDetails.hidden = true;
            }

            if (projectList) {
                projectList.hidden = false;
            }

            const projetosSection =
                document.getElementById("projetos");

            if (projetosSection) {

                projetosSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================
   ANO AUTOMÁTICO
========================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================
   GALERIA
========================= */

const modal =
    document.getElementById("galleryModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalClose =
    document.getElementById("modalClose");

const modalBackdrop =
    document.getElementById("modalBackdrop");


function abrirModal(item) {

    if (
        !modal ||
        !modalImage ||
        !modalTitle
    ) {
        return;
    }

    modalImage.src =
        item.dataset.image || "";

    modalImage.alt =
        item.dataset.title ||
        "Imagem da galeria";

    modalTitle.textContent =
        item.dataset.title || "";

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}


function fecharModal() {

    if (!modal) return;

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


document
    .querySelectorAll(".gallery-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {
                abrirModal(item);
            }
        );

    });


if (modalClose) {

    modalClose.addEventListener(
        "click",
        fecharModal
    );

}


if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        fecharModal
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            fecharModal();
        }

    }
);


/* =========================
   VOLTAR AO TOPO
========================= */

const backToTop =
    document.getElementById("backToTop");


function atualizarBotaoTopo() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }
}


window.addEventListener(
    "scroll",
    atualizarBotaoTopo,
    { passive: true }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================
   LINKS INTERNOS
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute("href");

                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================
   CALENDÁRIO
========================= */

const calendarGrid =
    document.getElementById("calendarGrid");

const monthName =
    document.getElementById("monthName");

const yearNumber =
    document.getElementById("yearNumber");

const prevMonth =
    document.getElementById("prevMonth");

const nextMonth =
    document.getElementById("nextMonth");

const eventModal =
    document.getElementById("eventModal");

const closeModal =
    document.getElementById("closeModal");

const selectedDate =
    document.getElementById("selectedDate");

const eventInput =
    document.getElementById("eventInput");

const saveEvent =
    document.getElementById("saveEvent");

const deleteEvent =
    document.getElementById("deleteEvent");


let calendarDate =
    new Date(2026, 8, 1);

let selectedDateKey =
    null;


const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


let calendarEvents = {

    "2026-09-22":
        "Prova Paulista",

    "2026-09-23":
        "Prova Paulista",

    "2026-09-24":
        "Prova Paulista"

};


function createDateKey(
    year,
    month,
    day
) {

    return `${year}-${String(
        month + 1
    ).padStart(2, "0")}-${String(
        day
    ).padStart(2, "0")}`;

}


function renderCalendar() {

    if (
        !calendarGrid ||
        !monthName ||
        !yearNumber
    ) {
        return;
    }


    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    monthName.textContent =
        monthNames[month];

    yearNumber.textContent =
        year;


    calendarGrid.innerHTML = "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const previousMonthDays =
        new Date(
            year,
            month,
            0
        ).getDate();


    /* DIAS DO MÊS ANTERIOR */

    for (
        let i = firstDay - 1;
        i >= 0;
        i--
    ) {


        const cell =
            document.createElement("div");

        cell.className =
            "calendar-cell other-month";

        cell.innerHTML = `
            <span class="day-number">
                ${previousMonthDays - i}
            </span>
        `;

        calendarGrid.appendChild(cell);
    }


    /* DIAS DO MÊS ATUAL */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cell =
            document.createElement("button");

        cell.type =
            "button";

        cell.className =
            "calendar-cell";


        const dateKey =
            createDateKey(
                year,
                month,
                day
            );


        const today =
            new Date();


        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            cell.classList.add(
                "today"
            );

        }


        cell.innerHTML = `
            <span class="day-number">
                ${day}
            </span>

            ${calendarEvents[dateKey]
                ? `<span class="event-text">${calendarEvents[dateKey]}</span>`
                : ""
            }
        `;


        if (calendarEvents[dateKey]) {

            cell.classList.add(
                "has-event"
            );

        }


        cell.addEventListener(
            "click",
            function () {

                openEvent(dateKey);

            }
        );


        calendarGrid.appendChild(cell);

    }


    /* COMPLETA A ÚLTIMA SEMANA */

    const totalCells =
        calendarGrid.children.length;

    const remaining =
        7 - (
            totalCells % 7
        );


    if (remaining < 7) {

        for (
            let i = 1;
            i <= remaining;
            i++
        ) {

            const cell =
                document.createElement("div");

            cell.className =
                "calendar-cell other-month";

            cell.innerHTML = `
                <span class="day-number">
                    ${i}
                </span>
            `;

            calendarGrid.appendChild(cell);

        }

    }

}


/* =========================
   MÊS ANTERIOR
========================= */

if (prevMonth) {

    prevMonth.addEventListener(
        "click",
        function () {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }
    );

}


/* =========================
   PRÓXIMO MÊS
========================= */

if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        function () {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }
    );

}


/* =========================
   ABRIR EVENTO
========================= */

function openEvent(dateKey) {

    selectedDateKey =
        dateKey;


    const [
        year,
        month,
        day
    ] =
        dateKey.split("-");


    if (selectedDate) {

        selectedDate.textContent =
            `${day}/${month}/${year}`;

    }


    if (eventInput) {

        eventInput.value =
            calendarEvents[dateKey] || "";

    }


    if (eventModal) {

        eventModal.classList.add(
            "active"
        );

    }


    setTimeout(
        function () {

            if (eventInput) {
                eventInput.focus();
            }

        },
        100
    );

}


/* =========================
   FECHAR EVENTO
========================= */

function closeEventModal() {

    if (eventModal) {

        eventModal.classList.remove(
            "active"
        );

    }

    selectedDateKey =
        null;

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeEventModal
    );

}


if (eventModal) {

    eventModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                eventModal
            ) {

                closeEventModal();

            }

        }
    );

}


/* =========================
   SALVAR EVENTO
========================= */

if (saveEvent) {

    saveEvent.addEventListener(
        "click",
        function () {

            if (!selectedDateKey) {
                return;
            }


            const texto =
                eventInput
                    ? eventInput.value.trim()
                    : "";


            if (texto) {

                calendarEvents[
                    selectedDateKey
                ] = texto;

            } else {

                delete calendarEvents[
                    selectedDateKey
                ];

            }


            renderCalendar();

            closeEventModal();

        }
    );

}


/* =========================
   EXCLUIR EVENTO
========================= */

if (deleteEvent) {

    deleteEvent.addEventListener(
        "click",
        function () {

            if (!selectedDateKey) {
                return;
            }


            delete calendarEvents[
                selectedDateKey
            ];


            renderCalendar();

            closeEventModal();

        }
    );

}


/* =========================
   TECLA ESC
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeEventModal();

        }

    }
);


/* =========================
   INICIA O CALENDÁRIO
========================= */

renderCalendar();


/* =========================
   BOTÕES VER MAIS
========================= */

document
    .querySelectorAll(
        ".school-expand-button"
    )
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        button.getAttribute(
                            "data-target"
                        );


                    const conteudo =
                        document.getElementById(id);


                    if (!conteudo) {
                        return;
                    }


                    if (conteudo.hidden) {

                        conteudo.hidden =
                            false;

                        button.classList.add(
                            "active"
                        );

                        button.setAttribute(
                            "aria-expanded",
                            "true"
                        );


                        if (
                            id ===
                            "disciplinasDetalhes"
                        ) {

                            button.innerHTML =
                                'VER MENOS <span>←</span>';

                        }


                        if (
                            id ===
                            "infraDetalhes"
                        ) {

                            button.innerHTML =
                                'VER MENOS <span>←</span>';

                        }

                    } else {

                        conteudo.hidden =
                            true;

                        button.classList.remove(
                            "active"
                        );

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        if (
                            id ===
                            "disciplinasDetalhes"
                        ) {

                            button.innerHTML =
                                'VER TODAS <span>→</span>';

                        }


                        if (
                            id ===
                            "infraDetalhes"
                        ) {

                            button.innerHTML =
                                'VER MAIS <span>→</span>';

                        }

                    }

                }
            );

        }
    );