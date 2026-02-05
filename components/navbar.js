import { t } from '../utils/i18n.js';
import { ENV } from '../config/env.js';

// --- Sub-componentes ---
const Logo = () => `
    <a href="#/" class="font-title text-2xl tracking-tighter uppercase text-zinc-900 dark:text-white relative z-[120] italic">
        DETAILE<span class="text-d-crimson font-bold not-italic">MX</span>
    </a>
`;

const LanguageSelector = (currentLang, isMobile = false) => `
    <div class="${isMobile ? 'flex gap-6 mt-8' : 'hidden md:flex gap-3'} text-[10px] font-bold tracking-widest text-zinc-400 italic">
        <button class="lang-btn ${currentLang === 'es' ? 'text-d-crimson' : 'hover:text-zinc-900 dark:hover:text-white'}" data-lang="es">ES</button>
        <span class="opacity-20">/</span>
        <button class="lang-btn ${currentLang === 'en' ? 'text-d-crimson' : 'hover:text-zinc-900 dark:hover:text-white'}" data-lang="en">EN</button>
    </div>
`;

const DesktopMenu = () => `
    <ul class="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 dark:text-zinc-400">
        <li><a href="#/shop/all" class="hover:text-d-crimson transition-all flex items-center gap-2 group">
            <span class="w-1.5 h-1.5 rounded-full bg-d-crimson opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Shop
        </a></li>
        <li><a href="#inspiration-section" class="hover:text-d-crimson transition-all">${t('inspiration.tag_label')}</a></li>
        <li><a href="#social-section" class="hover:text-d-crimson transition-all">${t('social.tag_label')}</a></li>
        <li><a href="#contact" class="hover:text-d-crimson transition-all border-b border-d-crimson/20 pb-1">${t('contact.tag_label')}</a></li>
    </ul>
`;

const MobileMenu = (currentLang) => `
    <div id="mobile-menu" 
         class="not-ready fixed inset-0 bg-white dark:bg-[#080808] translate-x-full z-[150] flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]">
        
        <div class="flex justify-between items-center p-8 border-b border-zinc-100 dark:border-white/5">
             <div class="font-title text-[10px] tracking-[0.5em] uppercase text-d-crimson font-bold">${t('navbar.tagline')}</div>
             <button id="menu-close" class="text-zinc-900 dark:text-white p-4">
                <i class="fa-solid fa-xmark text-2xl opacity-50"></i>
            </button>
        </div>
        
        <div class="flex-1 flex flex-col justify-center px-10">
            <ul class="flex flex-col gap-10">
                ${['shop/all', 'inspiration', 'contact'].map((item, idx) => `
                    <li class="mobile-item opacity-0">
                        <a href="#/${item}" class="mobile-link flex items-baseline gap-4 text-4xl font-title uppercase tracking-tighter text-zinc-900 dark:text-white group">
                            <span class="text-[10px] font-sans tracking-widest text-d-crimson/40">0${idx + 1}</span>
                            <span class="group-hover:text-d-crimson transition-all italic">${item.includes('all') ? 'Shop' : t(item + '.tag_label')}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
            
            <div class="mobile-item opacity-0 pt-10 mt-10 border-t border-zinc-100 dark:border-white/5">
                <p class="text-[9px] uppercase tracking-[0.3em] text-zinc-400 mb-4">${t('nav.change_lang')}</p>
                ${LanguageSelector(currentLang, true)}
            </div>
        </div>

        <div class="p-12 border-t border-zinc-100 dark:border-white/5 flex justify-between items-end text-[9px] uppercase tracking-[0.3em] text-zinc-400 italic">
            <div class="leading-loose">Handcrafted in México <br> <span class="text-d-crimson font-bold tracking-widest">@detaiemx</span></div>
            <div class="flex gap-8 text-zinc-900 dark:text-white text-xl">
                <a href="https://instagram.com/${ENV.INSTAGRAM_USER}" target="_blank" class="hover:text-d-crimson transition-colors"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://tiktok.com/@${ENV.TIKTOK_USER}" target="_blank" class="hover:text-d-crimson transition-colors"><i class="fa-brands fa-tiktok"></i></a>
            </div>
        </div>
    </div>
`;

export function Navbar() {
    const currentLang = localStorage.getItem('lang') || 'es';
    return `
    <nav class="fixed w-full z-[100] px-6 md:px-12 py-6 border-b border-d-crimson/5 backdrop-blur-xl bg-white/80 dark:bg-[#050505]/80 transition-all duration-500">
        <div class="max-w-[1800px] mx-auto flex justify-between items-center">
            ${Logo()}
            <div class="flex gap-4 md:gap-10 items-center relative z-[120]">
                ${DesktopMenu()}
                <div class="flex items-center gap-4 border-l border-zinc-100 dark:border-white/10 pl-6 md:pl-10">
                    <button id="theme-toggle" class="text-zinc-400 dark:text-zinc-500 p-2 hover:text-d-crimson transition-colors">
                        <i class="fa-solid fa-moon dark:hidden text-lg"></i>
                        <i class="fa-solid fa-sun hidden dark:block text-d-crimson text-lg"></i>
                    </button>
                    <button id="open-cart" class="relative p-2 text-zinc-900 dark:text-white group">
                        <i class="fa-solid fa-bag-shopping text-xl group-hover:text-d-crimson transition-colors"></i>
                        <span id="cart-count" class="absolute -top-1 -right-1 bg-d-crimson text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">0</span>
                    </button>
                    ${LanguageSelector(currentLang)}
                    <button id="menu-open" class="lg:hidden text-zinc-900 dark:text-white ml-2">
                        <div class="w-6 h-px bg-current mb-1.5"></div>
                        <div class="w-4 h-px bg-current ml-auto"></div>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    ${MobileMenu(currentLang)}
    `;
}

export function initNavbar(reRenderCallback) {
    const anime = window.anime;
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = (open) => {
        if (open) {
            mobileMenu.classList.remove('not-ready');
            void mobileMenu.offsetWidth; 
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';

            anime({
                targets: '.mobile-item',
                translateX: [50, 0],
                opacity: [0, 1],
                filter: ['blur(8px)', 'blur(0px)'],
                delay: anime.stagger(60, {start: 300}),
                duration: 800,
                easing: 'easeOutQuart'
            });
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.add('not-ready');
                }
            }, 700);
        }
    };

    // Event Listeners (Delegados)
    document.addEventListener('click', async (e) => {
        if (e.target.closest('#menu-open')) toggleMenu(true);
        if (e.target.closest('#menu-close') || e.target.closest('.mobile-link')) toggleMenu(false);

        const langBtn = e.target.closest('.lang-btn');
        if (langBtn) {
            localStorage.setItem('lang', langBtn.dataset.lang);
            if (reRenderCallback) await reRenderCallback();
        }

        if (e.target.closest('#theme-toggle')) {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
    });

    window.addEventListener('cartUpdated', () => {
        if (anime) anime({ targets: '#open-cart', scale: [1, 1.2, 1], duration: 600, easing: 'easeOutElastic(1, .8)' });
    });
}