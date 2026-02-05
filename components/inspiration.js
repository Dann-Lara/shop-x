import { inspiration } from '../data/inspiration.js';
import { t } from '../utils/i18n.js';

export function Inspiration() {
    const lang = localStorage.getItem('lang') || 'es';
    const data = inspiration;

    return `
    <section id="inspiration-section" class="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
        
        <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
            
            <div class="w-full lg:w-1/2 relative">
                <div class="insp-img-container opacity-0 relative z-10 group">
                    <div class="overflow-hidden rounded-sm shadow-2xl">
                        <img src="${data.main_image}" class="w-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Inspiration">
                    </div>
                    
                    <div class="insp-cta-card opacity-0 absolute -bottom-10 -right-6 md:right-10 bg-white dark:bg-zinc-900 p-8 shadow-xl max-w-xs border-l-4 border-d-crimson">
                        <p class="font-title text-lg text-zinc-900 dark:text-white mb-4 italic">
                            ${t('inspiration.cta_box')}
                        </p>
                        <a href="#/shop/all" class="group flex items-center gap-2 text-d-crimson font-bold uppercase tracking-widest text-[10px]">
                            ${t('inspiration.cta_link')}
                            <span class="group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                <div class="absolute -top-10 -left-10 w-48 h-48 opacity-20 pointer-events-none">
                    <img src="${data.pattern_image}" class="w-full h-full object-contain animate-pulse-slow" alt="">
                </div>
            </div>

            <div class="w-full lg:w-1/2 flex flex-col justify-center">
                <header class="mb-12 overflow-hidden">
                    <span class="insp-reveal opacity-0 inline-block text-d-crimson font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
                        ${t('inspiration.section_tag')}
                    </span>
                    <h2 class="insp-reveal opacity-0 text-5xl md:text-7xl font-title text-zinc-900 dark:text-white italic leading-tight">
                        ${data.blocks[0].title[lang]}
                    </h2>
                </header>

                <div class="space-y-12">
                    <p class="insp-reveal opacity-0 text-zinc-600 dark:text-zinc-400 font-sans text-lg md:text-xl leading-relaxed font-light">
                        ${data.blocks[0].text[lang]}
                    </p>
                    
                    <div class="insp-reveal opacity-0 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100 dark:border-white/5">
                        <div>
                            <h4 class="text-d-crimson font-title text-2xl mb-4 italic">${data.blocks[1].title[lang]}</h4>
                            <p class="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed italic">
                                ${data.blocks[1].text[lang]}
                            </p>
                        </div>
                        <div class="flex items-center justify-center p-4 bg-zinc-50 dark:bg-white/5 rounded-2xl border border-dashed border-zinc-200 dark:border-white/10">
                             <p class="text-[10px] text-zinc-400 uppercase tracking-[0.3em] text-center">
                                ${t('inspiration.craft_label')} <br> <span class="text-d-crimson font-bold">2026</span>
                             </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    `;
}

export function initInspiration() {
    const anime = window.anime;
    if (!anime) return;

    const tl = anime.timeline({
        easing: 'easeOutQuart',
        autoplay: false
    });

    tl.add({
        targets: '.insp-img-container',
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 1200
    })
    .add({
        targets: '.insp-reveal',
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 1000
    }, '-=800')
    .add({
        targets: '.insp-cta-card',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800
    }, '-=400');

    // Trigger con Scroll
    const section = document.getElementById('inspiration-section');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) tl.play();
    }, { threshold: 0.2 });
    
    observer.observe(section);
}