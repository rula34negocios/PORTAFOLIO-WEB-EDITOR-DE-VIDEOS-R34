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

// ==========================================
// ESTADO GLOBAL DE LOS CARRUSELES
// ==========================================
let currentIndex = 0;
let currentThumbIndex = 0;
const PRELOAD_RANGE = 4; // Elementos cargados a cada lado (visible y no visible)

// ==========================================
// INICIALIZACIÓN: Crear el DOM una sola vez
// ==========================================
function initCarousels() {
    const vTrack = document.getElementById('carouselTrack');
    const tTrack = document.getElementById('thumbCarouselTrack');

    if (vTrack) {
        vTrack.innerHTML = '';
        verticalVideos.forEach((videoData, index) => {
            const card = document.createElement('div');
            card.id = `v-card-${index}`;
            // Todas inician ocultas hasta que la actualización las mueva
            card.className = 'video-card-3d pos-hidden';
            card.innerHTML = `
                <video src="${videoData.src}" muted loop playsinline preload="auto"></video>
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-solid fa-play"></i> Ver Video</span>
                </div>
            `;
            vTrack.appendChild(card);
        });
    }

    if (tTrack) {
        tTrack.innerHTML = '';
        thumbnailsData.forEach((thumbData, index) => {
            const card = document.createElement('div');
            card.id = `t-card-${index}`;
            card.className = 'video-card-3d thumb-card-3d pos-hidden';
            card.innerHTML = `
                <img src="${thumbData.src}" alt="${thumbData.title}" loading="eager">
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-solid fa-eye"></i> Ver Miniatura</span>
                </div>
            `;
            tTrack.appendChild(card);
        });
    }

    // Dibujar el estado inicial con animaciones
    updateCarousel();
    updateThumbCarousel();
}

// ==========================================
// LÓGICA DE ANIMACIÓN (VIDEOS VERTICALES)
// ==========================================
function updateCarousel() {
    const total = verticalVideos.length;

    verticalVideos.forEach((videoData, index) => {
        const card = document.getElementById(`v-card-${index}`);
        if (!card) return;

        const video = card.querySelector('video');

        // Calculamos la distancia relativa (offset) respetando la circularidad
        let offset = index - currentIndex;

        // Magia para hacer la cinta infinita: si la distancia es mayor a la mitad, 
        // lo empujamos al otro lado virtualmente.
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        // Limpiamos clases previas
        card.className = 'video-card-3d';

        // Manejo de la ventana visible y de precarga (+/- 4 elementos totales en DOM activo)
        if (offset >= -PRELOAD_RANGE && offset <= PRELOAD_RANGE) {

            // Asignamos las clases visuales de CSS (que usan absolute y translateX)
            // Las posiciones -2, -1, 0, 1, 2 son visibles. Las posiciones 3, 4, -3, -4 están ocultas pero listas en el DOM.
            if (offset >= -2 && offset <= 2) {
                card.classList.add(`pos-${offset}`);
            } else {
                card.classList.add('pos-hidden'); // Precargado, pero fuera de cámara
            }

            // Lógica de interacción y reproducción
            if (offset === 0) {
                // Elemento central: reproduce
                video.play().catch(() => {});
                card.onclick = () => openModal(videoData.id, videoData.title, videoData.desc, videoData.yt, videoData.tk, videoData.ig, 'vertical');
            } else {
                // Elementos laterales: pausa y click para navegar
                video.pause();
                card.onclick = () => {
                    // Calculamos hacia dónde mover para animar suavemente
                    currentIndex = (currentIndex + offset + total) % total;
                    updateCarousel();
                };
            }
        } else {
            // Fuera de rango totalmente: se reciclan/ocultan sin transición brusca
            card.classList.add('pos-hidden');
            video.pause();
        }
    });
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + verticalVideos.length) % verticalVideos.length;
    updateCarousel();
}

// ==========================================
// LÓGICA DE ANIMACIÓN (MINIATURAS HORIZONTALES)
// ==========================================
function updateThumbCarousel() {
    const total = thumbnailsData.length;

    thumbnailsData.forEach((thumbData, index) => {
        const card = document.getElementById(`t-card-${index}`);
        if (!card) return;

        let offset = index - currentThumbIndex;

        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        // Importante mantener la clase base de proporciones 16:9
        card.className = 'video-card-3d thumb-card-3d';

        // Mismo rango de precarga para las imágenes
        if (offset >= -PRELOAD_RANGE && offset <= PRELOAD_RANGE) {

            // Las miniaturas solo muestran -1, 0, 1. El resto se oculta pero se precarga.
            if (offset >= -1 && offset <= 1) {
                card.classList.add(`pos-${offset}`);
            } else {
                card.classList.add('pos-hidden');
            }

            if (offset === 0) {
                card.onclick = () => openImageModal(thumbData.src);
            } else {
                card.onclick = () => {
                    currentThumbIndex = (currentThumbIndex + offset + total) % total;
                    updateThumbCarousel();
                };
            }
        } else {
            card.classList.add('pos-hidden');
        }
    });
}

function moveThumbCarousel(direction) {
    currentThumbIndex = (currentThumbIndex + direction + thumbnailsData.length) % thumbnailsData.length;
    updateThumbCarousel();
}

// ==========================================
// INICIO Y EVENTOS
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    initCarousels();
});

// ==========================================
// MODALES (Misma lógica previa, sin cambios)
// ==========================================
function openModal(youtubeId, title, description, urlYT, urlTK, urlIG, tipo) {
    const modal = document.getElementById('videoModal');
    const modalContentBox = document.getElementById('modalContentBox');
    const iframe = document.getElementById('modalIframe');
    const imgElement = document.getElementById('modalImage');
    const container = document.getElementById('modalContainer');
    const linksContainer = document.getElementById('modalLinksContainer');
    const videoInfo = modalContentBox.querySelector('.video-info');

    modalContentBox.classList.remove('image-modal-view');
    if (videoInfo) videoInfo.style.display = 'flex';

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('ytLink').href = urlYT;
    document.getElementById('tkLink').href = urlTK;
    document.getElementById('igLink').href = urlIG;

    imgElement.style.display = 'none';
    imgElement.src = '';
    iframe.style.display = 'block';
    linksContainer.style.display = 'block';

    container.style.aspectRatio = tipo === 'vertical' ? '9/16' : '16/9';

    if (youtubeId && youtubeId !== '') {
        iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&fs=1&vq=hd1080`;
    } else {
        iframe.src = '';
    }

    modal.style.display = 'flex';
}

function openImageModal(imageSrc) {
    const modal = document.getElementById('videoModal');
    const modalContentBox = document.getElementById('modalContentBox');
    const iframe = document.getElementById('modalIframe');
    const imgElement = document.getElementById('modalImage');
    const container = document.getElementById('modalContainer');
    const linksContainer = document.getElementById('modalLinksContainer');
    const videoInfo = modalContentBox.querySelector('.video-info');

    modalContentBox.classList.add('image-modal-view');
    if (videoInfo) videoInfo.style.display = 'none';

    container.style.aspectRatio = '16/9';

    iframe.style.display = 'none';
    iframe.src = '';
    imgElement.style.display = 'block';
    imgElement.src = imageSrc;

    linksContainer.style.display = 'none';

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    const imgElement = document.getElementById('modalImage');
    iframe.src = '';
    imgElement.src = '';
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Función para crear el universo de estrellas
function createGalaxy() {
    const container = document.querySelector('.galaxy-background');
    if (!container) return;

    // Generar 150 estrellas estáticas repartidas por toda la pantalla
    for (let i = 0; i < 150; i++) {
        let star = document.createElement('div');
        star.className = 'star';

        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';

        let size = Math.random() * 2 + 1; // Tamaños entre 1px y 3px
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        star.style.animationDuration = (Math.random() * 3 + 1) + 's';

        container.appendChild(star);
    }
}