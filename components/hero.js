import { getWhatsAppLink } from '../utils/linkHelpers.js';
import { t } from '../utils/i18n.js';

const heroMessage = "Hola, vengo desde el sitio web y me gustaría más información.";

export function Hero() {
    return `
    <section id="hero-section" class="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
        
        <div id="ambient-elements" class="absolute inset-0 z-0 pointer-events-none"></div>

        <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-d-crimson/10 dark:bg-d-crimson/25 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-500/5 dark:bg-pink-600/15 blur-[100px] rounded-full"></div>

        <div class="relative z-10 w-full max-w-7xl px-8 md:px-20 text-center">
            
            <div class="mb-8 overflow-hidden">
                <span class="hero-tagline opacity-0 inline-block text-zinc-500 dark:text-zinc-400 text-[10px] md:text-xs tracking-[0.5em] uppercase font-medium">
                    ${t('hero.tagline')}
                </span>
            </div>

            <h1 class="hero-title font-title text-6xl md:text-[130px] text-zinc-900 dark:text-white leading-[0.9] mb-10">
                <span class="block opacity-0 translate-y-20">${t('hero.title').split(' ')[0]}</span>
                <span class="block opacity-0 translate-y-20 italic font-light text-d-crimson">${t('hero.title').split(' ')[1] || ''}</span>
            </h1>

            <div class="flex justify-center mb-16">
                <p class="hero-desc opacity-0 text-zinc-600 dark:text-zinc-400 font-sans text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                    ${t('hero.subtitle')}
                </p>
            </div>

            <div class="hero-cta-wrapper opacity-0 translate-y-10">
                <a href="${getWhatsAppLink(heroMessage)}" 
                target="_blank" 
                class="group relative inline-flex items-center justify-center px-14 py-6 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl transition-all hover:scale-105 duration-300 shadow-xl">
                    
                    <span class="relative uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-900 dark:text-white group-hover:text-d-crimson transition-colors">
                        ${t('hero.cta')}
                    </span>
                    
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
            </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 hero-scroll">
            <div class="w-[1px] h-16 bg-gradient-to-b from-d-crimson to-transparent"></div>
        </div>
    </section>
    `;
}

export function initHero() {
    const anime = window.anime;
    if (!anime) return;

    const ambientContainer = document.getElementById('ambient-elements');
    if (!ambientContainer) return;

    ambientContainer.innerHTML = '';

    const heartPath = "M50,88 C50,88 15,62 15,38 C15,18 42,18 50,33 C58,18 85,18 85,38 C85,62 50,88 50,88";

    const count = 8;
    for (let i = 0; i < count; i++) {
        const container = document.createElement('div');
        const size = anime.random(120, 300);
        
        container.className = 'absolute opacity-0 pointer-events-none';
        container.style.width = `${size}px`;
        container.style.height = `${size}px`;
        container.style.left = `${anime.random(-10, 100)}%`;
        container.style.top = `${anime.random(-10, 100)}%`;
        
        // El corazón ahora es un SVG con gradiente y glow dinámico
        container.innerHTML = `
            <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-[0_0_25px_rgba(220,38,38,0.1)] dark:drop-shadow-[0_0_35px_rgba(255,255,255,0.05)]">
                <defs>
                    <linearGradient id="heartGrad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" class="stop-color-crimson" stop-color="currentColor" stop-opacity="0.15" />
                        <stop offset="100%" stop-color="currentColor" stop-opacity="0.02" />
                    </linearGradient>
                </defs>
                <path d="${heartPath}" 
                    class="text-d-crimson dark:text-white"
                    fill="url(#heartGrad${i})" 
                    stroke="currentColor" 
                    stroke-width="0.5" 
                    stroke-opacity="0.2" />
            </svg>
        `;
        
        ambientContainer.appendChild(container);

        // Animación de flotación
        anime({
            targets: container,
            translateX: () => anime.random(-150, 150),
            translateY: () => anime.random(-150, 150),
            rotate: () => anime.random(-20, 20),
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            duration: anime.random(20000, 30000),
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        });
    }

    // Timeline de entrada
    const tl = anime.timeline({ easing: 'easeOutQuart' });
    tl.add({ targets: '.hero-tagline', opacity: [0, 1], letterSpacing: ['1em', '0.5em'], duration: 1000 }, 400)
      .add({ targets: '.hero-title span', opacity: [0, 1], translateY: [80, 0], duration: 1200, delay: anime.stagger(200) }, '-=700')
      .add({ targets: '.hero-desc', opacity: [0, 1], translateY: [20, 0], duration: 800 }, '-=800')
      .add({ targets: ['.hero-cta-wrapper', '.hero-scroll'], opacity: [0, 1], translateY: [20, 0], duration: 1000 }, '-=600');
}