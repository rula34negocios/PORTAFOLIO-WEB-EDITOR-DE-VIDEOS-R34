// Array con los 10 videos verticales del portafolio
const verticalVideos = [{
        id: 'M4s3d8SsVCU',
        title: 'Bombanana Primer Nivel',
        desc: 'Edición dinámica multicamara para Cursedfiber78 en el juego de Bombanana.',
        src: 'Verticales/Bombanana Primer Nivel - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'hrzdL8WE-Tg',
        title: 'Cuantas Vergs haz visto?',
        desc: 'Edición dinámica multicamara para Cursedfiber78 en donde se capta una breve conversacion.',
        src: 'Verticales/Cuantas Verg haz visto - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'HISLu4pza-I',
        title: 'Partida Cassidy Overwatch2',
        desc: 'Edición dinámica para Cursedfiber78 donde se resumio una partida en overwatch2.',
        src: 'Verticales/Partida Cassidy Overwatch2 - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'Y4h3pzXtslk',
        title: 'Shion Overwatch2',
        desc: 'Edición dinámica para Cursedfiber78 donde juega una partida con el nuevo dps shion en overwatch2.',
        src: 'Verticales/Shion Overwatch2 - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'oXP3wfL3TfY',
        title: 'Resumen de GamePlay Overwatch2',
        desc: 'Edición dinámica para Cursedfiber78 donde juega una partida con el nuevo dps shion en overwatch2.',
        src: 'Verticales/Partida Overwatch2 - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'GxDu5RLLK3U',
        title: 'HistoryTime Filtrado de Numero',
        desc: 'Edición dinámica para Cursedfiber78 de HistoryTime de cuando se le filtro su numero telfonico.',
        src: 'Verticales/HistoryTime Numero Filtrado - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'RnSAnGEH2ps',
        title: 'Meccha Chameleon',
        desc: 'Edición dinámica para Cursedfiber78 de partida de MecchaChameleon gameplay.',
        src: 'Verticales/MecchaChameleon - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: '0N1PMCntavI',
        title: 'Primera Vez en R6',
        desc: 'Edición dinámica para Cursedfiber78 de resumen de partidas en Raimbow Six.',
        src: 'Verticales/Primera Vez en R6 - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'fq5fWmCJdpo',
        title: 'Record Six Seven',
        desc: 'Video de record de six seven de Cursedfiber78.',
        src: 'Verticales/Record 67 - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    },
    {
        id: 'WNc0OXxYL1M',
        title: 'Resumen Partida Fornite',
        desc: 'Video de Cursedfiber78 donde se resume una partida de Fornite.',
        src: 'Verticales/Victoria en Fornite - Cursedfiber78.mp4',
        yt: 'https://youtube.com',
        tk: 'https://tiktok.com',
        ig: 'https://instagram.com'
    }
];

let currentIndex = 0; // Índice central (0)

function renderCarousel() {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = '';

    // Mostrar un rango de -2 a 2 centrado en currentIndex
    for (let offset = -2; offset <= 2; offset++) {
        let actualIndex = (currentIndex + offset + verticalVideos.length) % verticalVideos.length;
        let videoData = verticalVideos[actualIndex];

        let card = document.createElement('div');
        card.className = `video-card-3d pos-${offset}`;

        if (offset === 0) {
            // Elemento central: con reproducción automática (autoplay) y a todo color
            card.onclick = () => openModal(videoData.id, videoData.title, videoData.desc, videoData.yt, videoData.tk, videoData.ig, 'vertical');
            card.innerHTML = `
                <video src="${videoData.src}" autoplay muted loop playsinline></video>
                <div class="card-overlay"><span>Ver Video</span></div>
            `;
        } else {
            // Elementos laterales (-2, -1, 1, 2): se ven estáticos (sin autoplay) para corregir la visibilidad y mejorar el rendimiento
            card.onclick = () => {
                currentIndex = actualIndex;
                renderCarousel();
            };
            card.innerHTML = `
                <video src="${videoData.src}" muted loop playsinline></video>
                <div class="card-overlay"><span>Ver Video</span></div>
            `;
        }
        track.appendChild(card);
    }
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + verticalVideos.length) % verticalVideos.length;
    renderCarousel();
}

// Inicializar el carrusel al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    renderCarousel();
});

function openModal(youtubeId, title, description, urlYT, urlTK, urlIG, tipo) {
    const modal = document.getElementById('videoModal');
    const modalContentBox = document.getElementById('modalContentBox');
    const iframe = document.getElementById('modalIframe');
    const imgElement = document.getElementById('modalImage');
    const container = document.getElementById('modalContainer');
    const linksContainer = document.getElementById('modalLinksContainer');

    // Quitar clase de imagen para que regrese al layout de video normal
    modalContentBox.classList.remove('image-modal-view');

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('ytLink').href = urlYT;
    document.getElementById('tkLink').href = urlTK;
    document.getElementById('igLink').href = urlIG;

    imgElement.style.display = 'none';
    imgElement.src = '';
    iframe.style.display = 'block';
    linksContainer.style.display = 'block';

    if (tipo === 'vertical') {
        container.style.aspectRatio = '9/16';
    } else {
        container.style.aspectRatio = '16/9';
    }

    if (youtubeId && youtubeId !== '') {
        iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&fs=1&vq=hd1080`;
    } else {
        iframe.src = '';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    iframe.src = '';
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}

JavaScript
// Array con los datos de las miniaturas
const thumbnailsData = [
    { src: 'Miniaturas/Miniatura1 - Cursedfiber78.jpeg', title: 'Miniatura 1 - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura1 - Nephtunie.jpg', title: 'Miniatura 1 - Nephtunie' },
    { src: 'Miniaturas/Miniatura2 - Cursedfiber78.jpg', title: 'Miniatura 2 - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura2 - Nephtunie.jpg', title: 'Miniatura 2 - Nephtunie' },
    { src: 'Miniaturas/Miniatura3 - Cursedfiber78.jpg', title: 'Miniatura 3 - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura3 - Nephtunie.jpg', title: 'Miniatura 3 - Nephtunie' },
    { src: 'Miniaturas/Miniatura4 - Nephtunie.jpg', title: 'Miniatura 4 - Nephtunie' },
    { src: 'Miniaturas/Miniatura5 - Nephtunie.jpg', title: 'Miniatura 5 - Nephtunie' }
];

let currentThumbIndex = 0;

function renderThumbCarousel() {
    const track = document.getElementById('thumbCarouselTrack');
    if (!track) return;
    track.innerHTML = '';

    // Rango de -1 a 1 para las miniaturas
    for (let offset = -1; offset <= 1; offset++) {
        let actualIndex = (currentThumbIndex + offset + thumbnailsData.length) % thumbnailsData.length;
        let thumbData = thumbnailsData[actualIndex];

        let card = document.createElement('div');
        // Usamos una clase con sufijo thumb para controlar sus dimensiones independientes
        card.className = `video-card-3d thumb-card-3d pos-${offset}`;

        if (offset === 0) {
            card.onclick = () => openImageModal(thumbData.src);
            card.innerHTML = `
                <img src="${thumbData.src}" alt="${thumbData.title}">
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-solid fa-eye"></i> Ver Miniatura</span>
                </div>
            `;
        } else {
            card.onclick = () => {
                currentThumbIndex = actualIndex;
                renderThumbCarousel();
            };
            card.innerHTML = `
                <img src="${thumbData.src}" alt="${thumbData.title}">
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-solid fa-eye"></i> Ver Miniatura</span>
                </div>
            `;
        }
        track.appendChild(card);
    }
}

function moveThumbCarousel(direction) {
    currentThumbIndex = (currentThumbIndex + direction + thumbnailsData.length) % thumbnailsData.length;
    renderThumbCarousel();
}

// Asegúrate de inicializarlo al cargar la página junto con el otro carrusel
window.addEventListener('DOMContentLoaded', () => {
    renderCarousel();
    renderThumbCarousel(); // <--- Añadir esta línea
});

// Función específica para mostrar SOLO la miniatura en grande sin ningún texto
function openImageModal(imageSrc, title, description) {
    const modal = document.getElementById('videoModal');
    const modalContentBox = document.getElementById('modalContentBox');
    const iframe = document.getElementById('modalIframe');
    const imgElement = document.getElementById('modalImage');
    const container = document.getElementById('modalContainer');
    const linksContainer = document.getElementById('modalLinksContainer');
    const videoInfo = modalContentBox.querySelector('.video-info');

    // Añadir clase para expandir el cuadro del modal
    modalContentBox.classList.add('image-modal-view');

    // Ocultar por completo la sección de texto lateral
    if (videoInfo) {
        videoInfo.style.display = 'none';
    }

    // Configurar aspecto 16:9 para la miniatura
    container.style.aspectRatio = '16/9';

    // Ocultar iframe y mostrar únicamente la imagen
    iframe.style.display = 'none';
    iframe.src = '';
    imgElement.style.display = 'block';
    imgElement.src = imageSrc;

    // Asegurar que los enlaces también estén ocultos
    linksContainer.style.display = 'none';

    modal.style.display = 'flex';
}