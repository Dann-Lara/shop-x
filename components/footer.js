import { getWhatsAppLink, getMapsLink } from '../utils/linkHelpers.js';
import { ENV } from '../config/env.js';
import { conditions } from '../data/conditions.js';
import { t } from '../utils/i18n.js';

const BrandSection = () => `
    <div class="col-span-1">
        <h3 class="text-3xl font-title tracking-tighter mb-8 text-zinc-900 dark:text-white italic">
            SHOP<span class="text-d-crimson font-bold not-italic">X</span>
        </h3>
        <p class="text-sm font-sans font-light text-zinc-500 dark:text-zinc-400 leading-relaxed italic pr-4">
            ${t('footer.description')}
        </p>
    </div>
`;

const NavLinks = () => `
    <div class="space-y-4">
        <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-d-crimson mb-8">${t('footer.explore')}</p>
        <ul class="space-y-4 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 dark:text-zinc-300">
            <li><a href="#globos" class="hover:text-d-crimson transition-all flex items-center gap-2 group transform hover:translate-x-2">
                <span class="w-0 group-hover:w-4 h-[1px] bg-d-crimson transition-all"></span>${t('categories.tag_label')}</a>
            </li>
            <li><button class="open-info-modal hover:text-d-crimson transition-all flex items-center gap-2 group transform hover:translate-x-2" data-info="buy_process">
                <span class="w-0 group-hover:w-4 h-[1px] bg-d-crimson transition-all"></span>${t('footer.buy_process')}</button>
            </li>
            <li><button class="open-info-modal hover:text-d-crimson transition-all flex items-center gap-2 group transform hover:translate-x-2" data-info="terms">
                <span class="w-0 group-hover:w-4 h-[1px] bg-d-crimson transition-all"></span>${t('footer.terms')}</button>
            </li>
        </ul>
    </div>
`;

const SocialSection = () => `
    <div class="space-y-4">
        <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-d-crimson mb-8">${t('footer.social')}</p>
        <div class="flex flex-col gap-6">
            <a href="mailto:${ENV.EMAIL_CONTACT}" class="text-sm font-sans font-light hover:text-d-crimson transition-colors text-zinc-600 dark:text-zinc-300 lowercase">${ENV.EMAIL_CONTACT}</a>
            <div class="flex gap-6 mt-2 text-zinc-400">
                <a href="https://instagram.com/${ENV.INSTAGRAM_USER}" target="_blank" class="hover:text-d-crimson hover:scale-110 transition-all"><i class="fa-brands fa-instagram text-xl"></i></a>
                <a href="https://tiktok.com/@${ENV.TIKTOK_USER}" target="_blank" class="hover:text-d-crimson hover:scale-110 transition-all"><i class="fa-brands fa-tiktok text-xl"></i></a>
                <a href="https://facebook.com/@${ENV.FACEBOOK_USER}" target="_blank" class="hover:text-d-crimson hover:scale-110 transition-all"><i class="fa-brands fa-facebook text-xl"></i></a>
                <a href="${getWhatsAppLink()}" target="_blank" class="hover:text-d-crimson hover:scale-110 transition-all"><i class="fa-brands fa-whatsapp text-xl"></i></a>
            </div>
        </div>
    </div>
`;

const LocationSection = () => `
    <div class="space-y-4">
        <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-d-crimson mb-8">${t('footer.location')}</p>
        <a href="${getMapsLink()}" target="_blank" class="flex items-start gap-4 text-zinc-500 dark:text-zinc-400 group">
            <i class="fa-solid fa-location-dot mt-1 text-sm text-d-crimson group-hover:animate-bounce"></i>
            <div class="text-sm font-sans font-light leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                <p>${t('footer.show')}</p>
                <p class="underline underline-offset-4 decoration-d-crimson/20 italic">Río Cazones 1441, La Pradera, 36630 Irapuato, Gto.</p>
            </div>
        </a>
    </div>
`;

export function Footer() {
    return `
    <footer class="relative py-24 px-6 border-t border-d-crimson/10 dark:border-white/5 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
        
        <div class="absolute -bottom-10 -left-10 text-[12rem] md:text-[18rem] font-title font-black opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none text-d-crimson italic">
            DMX
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
                ${BrandSection()}
                ${NavLinks()}
                ${SocialSection()}
                ${LocationSection()}
            </div>

            <div class="pt-12 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <div class="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em]">
                    &copy; ${new Date().getFullYear()} SHOPX. ${t('footer.rights')}
                </div>

                <div class="flex items-center gap-8">
                    <div class="flex gap-6 opacity-40 text-sm text-zinc-500 dark:text-zinc-400">
                        <i class="fa-brands fa-html5 hover:text-[#E34F26] transition-colors cursor-help" title="HTML5"></i>
                        <i class="fa-brands fa-js hover:text-[#F7DF1E] transition-colors cursor-help" title="JavaScript / AnimeJS"></i>
                        <i class="fa-solid fa-wind hover:text-[#06B6D4] transition-colors cursor-help" title="Tailwind CSS"></i>
                    </div>
                    
                    <div class="h-4 w-[1px] bg-zinc-200 dark:border-white/10"></div>
                    
                    <div class="text-[9px] tracking-[0.4em] uppercase opacity-40 text-zinc-500 dark:text-zinc-400 font-medium">
                        made by
                        <a href="https://github.com/dannlara" target="_blank" class="font-bold hover:text-d-crimson transition-colors underline-offset-4 decoration-d-crimson/30">
                            DANN LARA
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="info-modal" class="fixed inset-0 z-[200] invisible pointer-events-none">
            <div id="modal-overlay" class="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm opacity-0 transition-opacity duration-500"></div>
            <div id="modal-content" class="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#080808] p-8 md:p-16 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-t-[2.5rem] max-h-[90vh] overflow-y-auto">
                <button id="close-modal" class="absolute top-6 right-6 text-zinc-400 hover:text-d-crimson transition-all p-2">
                    <i class="fa-solid fa-xmark text-2xl"></i>
                </button>
                <div id="modal-body" class="max-w-3xl mx-auto py-4"></div>
            </div>
        </div>
    </footer>
    `;
}

export function initFooter() {
    const elements = {
        modal: document.getElementById('info-modal'),
        content: document.getElementById('modal-content'),
        overlay: document.getElementById('modal-overlay'),
        body: document.getElementById('modal-body'),
        lang: localStorage.getItem('lang') || 'es'
    };

    const toggleModal = (open, type = null) => {
        if (open && type) {
            const data = conditions[type][elements.lang];
            elements.body.innerHTML = `
                <h2 class="text-4xl md:text-6xl font-title italic text-zinc-900 dark:text-white mb-4">${data.title}</h2>
                <div class="h-px w-20 bg-d-crimson mb-10"></div>
                ${renderModalContent(type, data, elements.lang)}
            `;
            elements.modal.classList.remove('invisible', 'pointer-events-none');
            elements.overlay.classList.replace('opacity-0', 'opacity-100');
            elements.content.classList.remove('translate-y-full');
        } else {
            elements.content.classList.add('translate-y-full');
            elements.overlay.classList.replace('opacity-100', 'opacity-0');
            setTimeout(() => elements.modal.classList.add('invisible', 'pointer-events-none'), 700);
        }
    };

    document.querySelectorAll('.open-info-modal').forEach(btn => 
        btn.addEventListener('click', () => toggleModal(true, btn.dataset.info)));
    
    [document.getElementById('close-modal'), elements.overlay].forEach(el => 
        el?.addEventListener('click', () => toggleModal(false)));
}

// renderers.js

export function renderModalContent(type, data, lang) {
    if (type === 'buy_process') {
        // Mapeo de iconos específicos para cada ID de paso del JSON
        const stepIcons = {
            1: 'fa-box-open',       // Elegir pedido
            2: 'fa-truck-fast',     // Entrega/Uber
            3: 'fa-calendar-check', // Acordar hora/día
            4: 'fa-credit-card',    // Pago/Anticipo
            5: 'fa-receipt',        // Comprobante
            6: 'fa-camera-retro',   // Foto del #Detaile
            7: 'fa-face-grin-stars' // Sonrisa/Disfrutar
        };

        return `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-10">
                ${data.steps.map(step => `
                    <div class="flex gap-5 items-start group">
                        <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-d-crimson/5 dark:bg-d-crimson/10 flex items-center justify-center text-d-crimson border border-d-crimson/10 group-hover:bg-d-crimson group-hover:text-white transition-all duration-500">
                            <i class="fa-solid ${stepIcons[step.id] || 'fa-check'} text-xl"></i>
                        </div>
                        <div class="space-y-1">
                            <span class="text-[10px] uppercase tracking-widest font-bold text-d-crimson/40">Paso 0${step.id}</span>
                            <p class="text-[13px] leading-relaxed italic text-zinc-600 dark:text-zinc-400 font-light">
                                ${step.text}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-16 flex flex-col items-center gap-4">
                <div class="h-px w-full bg-gradient-to-r from-transparent via-d-crimson/20 to-transparent mb-4"></div>
                <a href="https://wa.me/5215500000000" target="_blank" 
                   class="group bg-d-crimson text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:scale-105 transition-all shadow-xl shadow-d-crimson/20 flex items-center gap-4">
                    <i class="fa-brands fa-whatsapp text-xl"></i> 
                    ${data.cta}
                </a>
            </div>`;
    }

    if (type === 'terms') {
        // ... (el render de términos se mantiene igual o similar)
        return `
            <div class="space-y-8 text-zinc-600 dark:text-zinc-400 font-sans">
                <p class="text-sm leading-relaxed border-l-2 border-d-crimson pl-6 italic">${data.general}</p>
                <div class="bg-zinc-50 dark:bg-white/[0.02] p-8 rounded-3xl border border-zinc-100 dark:border-white/5">
                    <h3 class="text-d-crimson font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-3">
                        <i class="fa-solid fa-circle-info"></i> ${data.care_title}
                    </h3>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 text-[12px] italic leading-relaxed">
                        ${data.care_items.map(item => `
                            <li class="flex gap-3 items-start">
                                <i class="fa-solid fa-star text-[8px] mt-1.5 text-d-crimson/40"></i>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>`;
    }
}

