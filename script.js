// ==========================================
// DATOS DEL PORTAFOLIO Y COLABORACIONES
// ==========================================
const verticalVideos = [
    { id: 'M4s3d8SsVCU', title: 'Bombanana Primer Nivel', desc: 'Edición dinámica multicamara para Cursedfiber78 en el juego de Bombanana.', src: 'Verticales/Bombanana Primer Nivel - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'hrzdL8WE-Tg', title: 'Cuantas Vergs haz visto?', desc: 'Edición dinámica multicamara para Cursedfiber78 en donde se capta una breve conversacion.', src: 'Verticales/Cuantas Verg haz visto - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'HISLu4pza-I', title: 'Partida Cassidy Overwatch2', desc: 'Edición dinámica para Cursedfiber78 donde se resumio una partida en overwatch2.', src: 'Verticales/Partida Cassidy Overwatch2 - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'Y4h3pzXtslk', title: 'Shion Overwatch2', desc: 'Edición dinámica para Cursedfiber78 donde juega una partida con el nuevo dps shion en overwatch2.', src: 'Verticales/Shion Overwatch2 - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'oXP3wfL3TfY', title: 'Resumen de GamePlay Overwatch2', desc: 'Edición dinámica para Cursedfiber78 donde juega una partida con el nuevo dps shion en overwatch2.', src: 'Verticales/Partida Overwatch2 - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'GxDu5RLLK3U', title: 'HistoryTime Filtrado de Numero', desc: 'Edición dinámica para Cursedfiber78 de HistoryTime de cuando se le filtro su numero telfonico.', src: 'Verticales/HistoryTime Numero Filtrado - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'RnSAnGEH2ps', title: 'Meccha Chameleon', desc: 'Edición dinámica para Cursedfiber78 de partida de MecchaChameleon gameplay.', src: 'Verticales/MecchaChameleon - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: '0N1PMCntavI', title: 'Primera Vez en R6', desc: 'Edición dinámica para Cursedfiber78 de resumen de partidas en Raimbow Six.', src: 'Verticales/Primera Vez en R6 - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'fq5fWmCJdpo', title: 'Record Six Seven', desc: 'Video de record de six seven de Cursedfiber78.', src: 'Verticales/Record 67 - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' },
    { id: 'WNc0OXxYL1M', title: 'Resumen Partida Fornite', desc: 'Video de Cursedfiber78 donde se resume una partida de Fornite.', src: 'Verticales/Victoria en Fornite - Cursedfiber78.mp4', yt: 'https://youtube.com', tk: 'https://tiktok.com', ig: 'https://instagram.com' }
];

const horizontalVideos = [{
        title: 'REVIVIMOS BATTLEFRONT 2 en 2026 (ES INCREIBLE)',
        thumb: 'Horizontales/maxresdefault (1).jpg',
        url: 'https://youtu.be/X6vzMJW32OA?si=RYocrK_5zOWNtylf'
    },
    {
        title: 'ALGO ANDA MAL CON ESTE CLIENTE… 💀',
        thumb: 'Horizontales/maxresdefault (2).jpg',
        url: 'https://youtu.be/XXLw_URiQS8?si=X85_DIz91PFiRew5'
    },
    {
        title: 'ESTE JUEGO DE PESCA ES INCREIBLE - HOW TO FISH',
        thumb: 'Horizontales/maxresdefault (3).jpg',
        url: 'https://youtu.be/8dd55Np-GtU?si=5Ee40y7jdxhWCepr'
    },
    {
        title: 'Intente subir a MASTER con un amigo...',
        thumb: 'Horizontales/maxresdefault (4).jpg',
        url: 'https://youtu.be/m5kdyatyXIQ?si=yTgJ53mt8MeQN9gd'
    },
    {
        title: 'el JUEGO de SALTAR la CUERDA más EXTRAÑO',
        thumb: 'Horizontales/maxresdefault (5).jpg',
        url: 'https://youtu.be/gXDkhT7ir-I?si=Z2nW3u_yzD2E1TNC'
    },
    {
        title: 'NUNCA DEBÍ TRABAJAR EN ESTA GASOLINERA… | Gas Station Case',
        thumb: 'Horizontales/maxresdefault (6).jpg',
        url: 'https://youtu.be/6RjmpQdlkG0?si=VJYpCk4oDEzG5Nzv'
    },
];

const thumbnailsData = [
    { src: 'Miniaturas/Miniatura1 - Cursedfiber78.jpeg', title: 'Miniatura 1 - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura1 - Nephtunie.jpg', title: 'Miniatura 1 - Nephtunie' },
    { src: 'Miniaturas/Gamplay GOW.jpg', title: 'Miniatura GOW - Cursedfiber78' },
    { src: 'Miniaturas/IRL con Regina edit.jpg', title: 'Miniatura IRL con Regina - Cursedfiber78' },
    { src: 'Miniaturas/Ropa Nueva.jpg', title: 'Miniatura Ropa Nueva - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura2 - Cursedfiber78.jpg', title: 'Miniatura 2 - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura2 - Nephtunie.jpg', title: 'Miniatura 2 - Nephtunie' },
    { src: 'Miniaturas/Miniatura3 - Cursedfiber78.jpg', title: 'Miniatura 3 - Cursedfiber78' },
    { src: 'Miniaturas/Miniatura3 - Nephtunie.jpg', title: 'Miniatura 3 - Nephtunie' },
    { src: 'Miniaturas/Miniatura4 - Nephtunie.jpg', title: 'Miniatura 4 - Nephtunie' },
    { src: 'Miniaturas/Miniatura5 - Nephtunie.jpg', title: 'Miniatura 5 - Nephtunie' },
];

const collaborationsData = [
    { name: 'Cursedfiber78', streamer: 'Cursedfiber78', avatar: 'Colaboradores/65f6b207-6fb6-48f1-a4dc-4f2e5586.jpg', twitch: 'https://www.twitch.tv/cursedfiber78' }
];

// ==========================================
// ESTADO GLOBAL DE LOS CARRUSELES
// ==========================================
let currentIndex = 0;
let currentHorizIndex = 0;
let currentThumbIndex = 0;
let currentCollabIndex = 0;
const PRELOAD_RANGE = 4;

// ==========================================
// INICIALIZACIÓN DE LOS DOMs DEL CARRUSEL
// ==========================================
function initCarousels() {
    const vTrack = document.getElementById('carouselTrack');
    const hTrack = document.getElementById('horizCarouselTrack');
    const tTrack = document.getElementById('thumbCarouselTrack');
    const cTrack = document.getElementById('collabCarouselTrack');

    if (vTrack) {
        vTrack.innerHTML = '';
        verticalVideos.forEach((videoData, index) => {
            const card = document.createElement('div');
            card.id = `v-card-${index}`;
            card.className = 'video-card-3d pos-hidden';
            card.innerHTML = `
                <video src="${videoData.src}" muted loop playsinline preload="metadata"></video>
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-solid fa-play"></i> Ver Video</span>
                </div>
            `;
            vTrack.appendChild(card);
        });
    }

    if (hTrack) {
        hTrack.innerHTML = '';
        horizontalVideos.forEach((videoData, index) => {
            const card = document.createElement('div');
            card.id = `h-card-${index}`;
            card.className = 'video-card-3d horiz-card-3d pos-hidden';
            card.innerHTML = `
                <img src="${videoData.thumb}" alt="${videoData.title}" loading="lazy">
                <div class="play-overlay-btn">
                    <i class="fa-solid fa-play"></i>
                </div>
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-brands fa-youtube"></i> Ver en YouTube</span>
                </div>
            `;
            hTrack.appendChild(card);
        });
    }

    if (tTrack) {
        tTrack.innerHTML = '';
        thumbnailsData.forEach((thumbData, index) => {
            const card = document.createElement('div');
            card.id = `t-card-${index}`;
            card.className = 'video-card-3d thumb-card-3d pos-hidden';
            card.innerHTML = `
                <img src="${thumbData.src}" alt="${thumbData.title}" loading="lazy">
                <div class="card-overlay">
                    <span class="play-pill"><i class="fa-solid fa-eye"></i> Ver Miniatura</span>
                </div>
            `;
            tTrack.appendChild(card);
        });
    }

    if (cTrack) {
        cTrack.innerHTML = '';
        collaborationsData.forEach((collab, index) => {
            const card = document.createElement('div');
            card.id = `c-card-${index}`;
            card.className = 'video-card-3d collab-card-3d pos-hidden';
            card.innerHTML = `
                <div class="collab-avatar-wrapper">
                    <img src="${collab.avatar}" alt="${collab.name}">
                </div>
                <span class="collab-streamer-name">${collab.streamer}</span>
                <div class="card-overlay">
                    <a href="${collab.twitch}" target="_blank" class="play-pill twitch-pill"><i class="fa-brands fa-twitch"></i> Visitar Twitch</a>
                </div>
            `;
            cTrack.appendChild(card);
        });
    }

    updateCarousel();
    updateHorizCarousel();
    updateThumbCarousel();
    updateCollabCarousel();
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
        let offset = index - currentIndex;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        card.className = 'video-card-3d';
        if (offset >= -PRELOAD_RANGE && offset <= PRELOAD_RANGE) {
            if (offset >= -2 && offset <= 2) {
                card.classList.add(`pos-${offset}`);
            } else {
                card.classList.add('pos-hidden');
            }
            if (offset === 0) {
                if (video) video.play().catch(() => {});
                card.onclick = () => openModal(videoData.id, videoData.title, videoData.desc, videoData.yt, videoData.tk, videoData.ig, 'vertical');
            } else {
                if (video) video.pause();
                card.onclick = () => {
                    currentIndex = (currentIndex + offset + total) % total;
                    updateCarousel();
                };
            }
        } else {
            card.classList.add('pos-hidden');
            if (video) video.pause();
        }
    });
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + verticalVideos.length) % verticalVideos.length;
    updateCarousel();
}

// ==========================================
// LÓGICA DE ANIMACIÓN (VIDEOS HORIZONTALES)
// ==========================================
function updateHorizCarousel() {
    const total = horizontalVideos.length;
    horizontalVideos.forEach((videoData, index) => {
        const card = document.getElementById(`h-card-${index}`);
        if (!card) return;
        let offset = index - currentHorizIndex;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        card.className = 'video-card-3d horiz-card-3d';
        if (offset >= -PRELOAD_RANGE && offset <= PRELOAD_RANGE) {
            if (offset >= -1 && offset <= 1) {
                card.classList.add(`pos-${offset}`);
            } else {
                card.classList.add('pos-hidden');
            }
            if (offset === 0) {
                card.onclick = () => window.open(videoData.url, '_blank');
            } else {
                card.onclick = () => {
                    currentHorizIndex = (currentHorizIndex + offset + total) % total;
                    updateHorizCarousel();
                };
            }
        } else {
            card.classList.add('pos-hidden');
        }
    });
}

function moveHorizCarousel(direction) {
    currentHorizIndex = (currentHorizIndex + direction + horizontalVideos.length) % horizontalVideos.length;
    updateHorizCarousel();
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

        card.className = 'video-card-3d thumb-card-3d';
        if (offset >= -PRELOAD_RANGE && offset <= PRELOAD_RANGE) {
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
// LÓGICA DE ANIMACIÓN (COLABORACIONES)
// ==========================================
function updateCollabCarousel() {
    const total = collaborationsData.length;
    collaborationsData.forEach((collab, index) => {
        const card = document.getElementById(`c-card-${index}`);
        if (!card) return;
        let offset = index - currentCollabIndex;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        card.className = 'video-card-3d collab-card-3d';
        if (offset >= -PRELOAD_RANGE && offset <= PRELOAD_RANGE) {
            if (offset >= -1 && offset <= 1) {
                card.classList.add(`pos-${offset}`);
            } else {
                card.classList.add('pos-hidden');
            }
            if (offset !== 0) {
                card.onclick = () => {
                    currentCollabIndex = (currentCollabIndex + offset + total) % total;
                    updateCollabCarousel();
                };
            } else {
                card.onclick = null;
            }
        } else {
            card.classList.add('pos-hidden');
        }
    });
}

function moveCollabCarousel(direction) {
    currentCollabIndex = (currentCollabIndex + direction + collaborationsData.length) % collaborationsData.length;
    updateCollabCarousel();
}

// ==========================================
// MODALES
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

    if (iframe) iframe.src = '';
    if (imgElement) imgElement.src = '';
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// ==========================================
// GENERADOR DE ESTRELLAS ALEATORIAS
// ==========================================
function generateStars() {
    const container = document.querySelector('.galaxy-background');
    if (!container) return;
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('static-star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 1.5 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        container.appendChild(star);
    }
}

// ==========================================
// INICIALIZACIÓN GLOBAL AL CARGAR LA PÁGINA
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    initCarousels();
    generateStars();
});