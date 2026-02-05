import { products, categories } from '../../data/products.js';
import { t } from '../../utils/i18n.js';

// --- Átomos: UI Components ---

/**
 * Renderiza los botones de filtro con el estilo destacado seleccionado.
 */
const FilterButton = (cat, isActive, lang) => `
    <button class="filter-btn-new group relative flex flex-col items-center py-2 ${isActive ? 'active' : ''}" data-filter="${cat.id}">
        <span class="relative z-10 font-bold tracking-[0.3em] text-[10px] uppercase transition-all duration-500 
                     ${isActive ? 'text-d-crimson' : 'text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white'}">
            ${cat.id === 'all' ? t('products.all') : cat.name[lang]}
        </span>
        
        <div class="btn-line absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-d-crimson transition-all duration-500 ease-out
                    ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'}">
        </div>
    </button>
`;

/**
 * Renderiza la tarjeta de producto individual.
 */
export const renderProductCard = (product, i, lang) => `
    <div class="product-item break-inside-avoid opacity-0 group mb-12" data-id="${product.id}">
        <div class="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-sm cursor-pointer open-detail">
            <div class="aspect-square md:aspect-[3/4] overflow-hidden">
                <img src="${product.image}" class="product-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="${product.name[lang]}">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/20">
                <button data-add-cart="${product.id}" class="quick-add-btn w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-d-crimson hover:text-white transition-colors">
                    ${t('products.quick_add')}
                </button>
            </div>
        </div>
        <div class="mt-6 flex justify-between items-baseline border-b border-zinc-100 dark:border-white/5 pb-4 cursor-pointer open-detail">
            <h3 class="text-2xl font-title italic text-zinc-900 dark:text-zinc-100">${product.name[lang]}</h3>
            <span class="text-lg font-light text-zinc-400">$${product.price}</span>
        </div>
    </div>
`;

/**
 * Renderiza el contenido interno del modal de detalle.
 */
export const renderProductDetail = (product, lang) => `
    <div class="max-w-6xl w-full bg-white dark:bg-[#080808] md:bg-transparent rounded-t-[2rem] md:rounded-none relative">
        <button id="close-detail" class="fixed md:absolute top-6 right-6 md:-top-12 md:-right-12 z-[310] text-zinc-400 hover:text-d-crimson transition-colors bg-white/80 dark:bg-black/50 md:bg-transparent w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm md:backdrop-blur-none">
            <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
        <div class="max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center p-6 md:p-0 scrollbar-hide">
            <div class="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl md:rounded-sm shadow-2xl bg-zinc-100 dark:bg-zinc-800">
                <img src="${product.image}" class="w-full h-full object-cover" alt="${product.name[lang]}">
            </div>
            <div class="space-y-6 md:space-y-8 text-left pb-10 md:pb-0">
                <div class="space-y-2">
                    <span class="text-d-crimson text-[10px] uppercase tracking-[0.5em] font-bold block">${t('products.collection_year')}</span>
                    <h2 class="text-4xl md:text-7xl font-title italic text-zinc-900 dark:text-white leading-tight">${product.name[lang]}</h2>
                </div>
                <p class="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-base md:text-lg italic">${product.description[lang]}</p>
                <div class="text-3xl md:text-4xl font-light text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-white/5 pb-4 md:border-none">$${product.price}</div>
                <div class="flex flex-col gap-4 pt-4 md:pt-8 md:border-t md:border-zinc-100 md:border-white/5">
                    <button data-add-cart="${product.id}" class="w-full py-6 bg-d-crimson text-white text-[10px] font-bold uppercase tracking-[.4em] hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black transition-all shadow-lg shadow-d-crimson/20">${t('products.add_to_selection')}</button>
                    <p class="text-[9px] uppercase tracking-widest text-zinc-400 text-center italic leading-relaxed px-4">${t('products.wa_disclaimer')}</p>
                </div>
            </div>
        </div>
    </div>
`;

// --- Componente Principal ---

export function Products(initialCategory = 'all') {
    const lang = localStorage.getItem('lang') || 'es';
    const allCats = [{id: 'all'}, ...categories];

    return `
    <div class="pt-32 pb-24 bg-[#fcfaf9] dark:bg-[#050505] min-h-screen overflow-hidden">
        <div class="max-w-[1800px] mx-auto px-6 md:px-12">
            
            <div class="relative mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-200 dark:border-white/5 pb-12">
                <div class="space-y-2">
                    <span class="text-[9px] uppercase tracking-[0.8em] text-d-crimson font-bold block mb-2">
                        Est. 2026 / ${t('products.collection_year')}
                    </span>
                    <h1 class="text-5xl md:text-7xl font-title text-zinc-900 dark:text-white leading-none tracking-tighter italic">
                        ${t('products.title_part1')} 
                        <span class="text-d-crimson not-italic uppercase tracking-tighter ml-1 text-4xl md:text-6xl">
                            ${t('products.title_part2')}
                        </span>
                    </h1>
                </div>
                
                <div class="flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end items-center">
                    ${allCats.map(cat => FilterButton(cat, cat.id === initialCategory, lang)).join('')}
                </div>
            </div>

            <div id="products-grid" class="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                ${products
                    .filter(p => initialCategory === 'all' || p.categoryId === initialCategory)
                    .map((p, i) => renderProductCard(p, i, lang)).join('')}
            </div>
        </div>
    </div>

    <div id="product-detail-modal" class="fixed inset-0 z-[400] invisible pointer-events-none">
        <div id="detail-overlay" class="absolute inset-0 bg-white/90 dark:bg-black/95 backdrop-blur-md opacity-0 transition-opacity duration-500"></div>
        <div id="detail-content" class="absolute inset-0 flex items-center justify-center p-4 md:p-20 overflow-y-auto"></div>
    </div>
    `;
}

// --- Lógica de Inicialización ---

export function initProducts() {
    const anime = window.anime;
    const grid = document.getElementById('products-grid');
    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('detail-content');
    const overlay = document.getElementById('detail-overlay');
    const lang = localStorage.getItem('lang') || 'es';

    // Animación de entrada del catálogo
    const animateGrid = () => {
        anime({
            targets: '.product-item',
            opacity: [0, 1],
            translateY: [60, 0],
            delay: anime.stagger(80),
            duration: 1000,
            easing: 'easeOutExpo'
        });
    };
    animateGrid();

    // Lógica del Modal
    const toggleDetail = (open, productId = null) => {
        if (open) {
            const product = products.find(p => p.id == productId);
            content.innerHTML = renderProductDetail(product, lang);
            modal.classList.remove('invisible', 'pointer-events-none');
            anime({ targets: overlay, opacity: [0, 1], duration: 400, easing: 'linear' });
            anime({ targets: content, scale: [0.95, 1], opacity: [0, 1], duration: 600, easing: 'easeOutExpo' });
        } else {
            anime({
                targets: [overlay, content], opacity: 0, duration: 300, easing: 'linear',
                complete: () => modal.classList.add('invisible', 'pointer-events-none')
            });
        }
    };

    // Delegación de Eventos
    document.addEventListener('click', (e) => {
        // 1. Evitar interferencia con botón de compra rápida
        const addBtn = e.target.closest('[data-add-cart]');
        if (addBtn) return;

        // 2. Abrir detalle
        const openBtn = e.target.closest('.open-detail');
        if (openBtn) toggleDetail(true, openBtn.closest('.product-item').dataset.id);

        // 3. Cerrar detalle
        if (e.target.closest('#close-detail') || e.target.id === 'detail-overlay') toggleDetail(false);

        // 4. Lógica de Filtros (Dinamismo y Visuales)
        const filterBtn = e.target.closest('.filter-btn-new');
        if (filterBtn) {
            const filter = filterBtn.dataset.filter;
            
            // Actualizar estados visuales de los botones
            document.querySelectorAll('.filter-btn-new').forEach(btn => {
                const text = btn.querySelector('span');
                const line = btn.querySelector('.btn-line');
                const isActive = btn === filterBtn;

                btn.classList.toggle('active', isActive);
                if (isActive) {
                    text.style.color = '#be123c'; // d-crimson
                    line.style.width = '100%';
                    line.style.opacity = '1';
                } else {
                    text.style.color = ''; // Reset a clase original
                    line.style.width = '0';
                    line.style.opacity = '0';
                }
            });

            // Re-renderizado filtrado
            const filtered = filter === 'all' ? products : products.filter(p => p.categoryId === filter);
            grid.innerHTML = filtered.map((p, i) => renderProductCard(p, i, lang)).join('');
            animateGrid();
        }
    });
}