import { testimonials } from '../data/social.js';
import { t } from '../utils/i18n.js';

export function Social() {
    const lang = localStorage.getItem('lang') || 'es';

    // Duplicamos los items para el efecto de loop infinito
    const list = [...testimonials, ...testimonials];

    return `
    <section id="social-section" class="py-24 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-6 mb-16 text-center">
            <span class="social-reveal opacity-0 inline-block text-d-crimson font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
                ${t('social.tag_label')}
            </span>
            <h2 class="social-reveal opacity-0 text-5xl md:text-7xl font-title text-zinc-900 dark:text-white leading-tight">
                ${t('social.title')} <span class="italic text-d-crimson">${t('social.subtitle')}</span>
            </h2>
        </div>

        <div class="relative flex flex-col gap-6 select-none">
            
            <div class="marquee-track flex gap-6 w-max items-center">
                ${list.map(item => renderTestimonialCard(item, lang)).join('')}
            </div>

            <div class="marquee-track-reverse flex gap-6 w-max items-center">
                ${list.map(item => renderTestimonialCard(item, lang)).join('')}
            </div>

        </div>
    </section>
    `;
}

function renderTestimonialCard(item, lang) {
    return `
    <div class="testimonial-card group relative w-[350px] p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-white/5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-20">
        <div class="flex gap-1 mb-4 text-d-crimson">
            ${Array(item.rating).fill('★').join('')}
        </div>
        <p class="text-zinc-700 dark:text-zinc-300 font-sans text-sm leading-relaxed mb-6 italic">
            "${item.content[lang]}"
        </p>
        <div class="flex items-center justify-between">
            <span class="font-title text-zinc-900 dark:text-white font-bold">${item.author}</span>
            <span class="text-[10px] text-zinc-400 uppercase tracking-widest">${item.date}</span>
        </div>
    </div>
    `;
}

export function initSocial() {
    const anime = window.anime;
    if (!anime) return;

    // 1. Animación de entrada de títulos
    anime({
        targets: '.social-reveal',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });

    // 2. Animación Marquee Infinito (Fila 1)
    const track = document.querySelector('.marquee-track');
    const trackWidth = track.scrollWidth / 2;

    const anim1 = anime({
        targets: '.marquee-track',
        translateX: [0, -trackWidth],
        duration: 40000,
        easing: 'linear',
        loop: true
    });

    // 3. Animación Marquee Infinito (Fila 2 - Reverso)
    const anim2 = anime({
        targets: '.marquee-track-reverse',
        translateX: [-trackWidth, 0],
        duration: 35000,
        easing: 'linear',
        loop: true
    });

    // 4. Pausar en Hover
    const allTracks = document.querySelectorAll('.marquee-track, .marquee-track-reverse');
    allTracks.forEach(t => {
        t.addEventListener('mouseenter', () => { anim1.pause(); anim2.pause(); });
        t.addEventListener('mouseleave', () => { anim1.play(); anim2.play(); });
    });
}