import { categories } from '../data/products.js';
import { t } from '../utils/i18n.js';

export function Categories() {
    const lang = localStorage.getItem('lang') || 'es';

    return `
    <section id="categories-section" class="py-24 bg-white dark:bg-[#050505] transition-colors duration-700">
        <div class="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div class="mb-20 overflow-hidden">
                <p class="cat-reveal opacity-0 text-d-crimson font-bold tracking-[0.5em] uppercase text-[10px] mb-3">
                    ${t('categories.title')}
                </p>
                <h2 class="cat-reveal opacity-0 text-5xl md:text-8xl font-title text-zinc-900 dark:text-white leading-none italic tracking-tighter">
                    ${t('categories.subtitle')}
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[400px] md:auto-rows-[500px]">
                ${categories.map((cat, i) => {
                    const isLarge = cat.size === 'large' || (i % 3 === 0);
                    const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
                    
                    return `
                    <div class="cat-card opacity-0 group relative ${colSpan} overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 transition-all duration-1000" data-id="${cat.id}">
                        
                        <div class="absolute inset-0 z-0">
                            <img src="${cat.image}" 
                                 class="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.23,1,0.32,1) group-hover:scale-110" 
                                 alt="${cat.name[lang]}">
                        </div>

                        <div class="absolute inset-0 bg-white/0 backdrop-blur-0 group-hover:bg-white/40 group-hover:backdrop-blur-md dark:hidden transition-all duration-700 z-10"></div>
                        
                        <div class="absolute inset-0 hidden dark:block bg-black/0 backdrop-blur-0 group-hover:bg-black/60 group-hover:backdrop-blur-md transition-all duration-700 z-10"></div>

                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 z-15"></div>

                        <div class="absolute inset-0 p-10 md:p-16 flex flex-col justify-end z-20">
                            <div class="relative">
                                
                                <span class="text-white group-hover:text-zinc-400 dark:group-hover:text-zinc-500 text-[10px] font-mono mb-4 block tracking-[0.5em] transition-colors duration-700">
                                    / 0${i+1}
                                </span>

                                <h3 class="text-4xl md:text-6xl font-title italic leading-none mb-4 
                                        text-white group-hover:text-zinc-900 dark:group-hover:text-white 
                                        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                    ${cat.name[lang]}
                                </h3>
                                
                                <div class="grid transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                                            ${/* Usamos grid-template-rows para una transición de altura más fluida que max-height */ ''}
                                            grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100">
                                    <div class="overflow-hidden">
                                        <p class="text-zinc-700 dark:text-zinc-400 text-sm md:text-base font-light max-w-sm mb-8 leading-relaxed italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                            ${cat.description[lang]}
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-6 group/cta mt-2">
                                    <div class="w-12 h-[1px] bg-d-crimson transition-all duration-700 group-hover:w-20 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                                    <span class="text-d-crimson font-bold uppercase tracking-[0.4em] text-[10px] transition-transform duration-500 group-hover:translate-x-2">
                                        ${t('categories.cta_view')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <a href="#/shop/${cat.id}" class="absolute inset-0 z-30"></a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </section>
    `;
}

export function initCategories() {
    const anime = window.anime;
    if (!anime) return;

    // Animación de entrada escalonada
    const tl = anime.timeline({ easing: 'easeOutQuart' });

    tl.add({
        targets: '.cat-reveal',
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200)
    })
    .add({
        targets: '.cat-card',
        opacity: [0, 1],
        translateY: [60, 0],
        scale: [0.95, 1],
        duration: 1200,
        delay: anime.stagger(150)
    }, '-=800');
}