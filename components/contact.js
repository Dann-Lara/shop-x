import { getWhatsAppLink } from '../utils/linkHelpers.js';
import { ENV } from '../config/env.js';
import { t } from '../utils/i18n.js';

// --- 1. COMPONENTE UI (Template) ---
export function Contact() {
    return `
    <section id="contact" class="py-32 bg-[#FFF5F5] dark:bg-[#050505] transition-colors duration-700 overflow-hidden relative">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-d-crimson/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                <div class="contact-info-anim opacity-0 invisible">
                    <span class="font-bold text-[10px] tracking-[0.4em] text-d-crimson uppercase block mb-4">
                        ${t('contact.tag_label')}
                    </span>
                    <h2 class="font-title text-5xl md:text-8xl text-zinc-900 dark:text-white mb-10 leading-none italic">
                        ${t('contact.title')} <span class="text-d-crimson">${t('contact.subtitle')}</span>.
                    </h2>
                    
                    <div class="space-y-8 font-sans text-[11px] tracking-[0.2em] uppercase opacity-80 dark:text-gray-400 border-l-2 border-d-crimson/20 pl-8">
                        <div class="flex flex-col gap-1">
                            <span class="text-d-crimson font-bold italic lowercase tracking-normal text-lg">${ENV.EMAIL_CONTACT}</span>
                        </div>
                    </div>
                </div>

                <div class="contact-form-anim opacity-0 invisible bg-white dark:bg-zinc-900/50 p-8 md:p-14 rounded-[3rem] shadow-2xl border border-d-crimson/10 relative">
                    <form id="contact-form" class="space-y-10" novalidate>
                        
                        <div class="relative group">
                            <input type="text" name="name" id="form-name" required autocomplete="off"
                                class="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 outline-none focus:border-d-crimson transition-all peer text-zinc-900 dark:text-white">
                            <label class="absolute left-0 top-3 text-[10px] uppercase tracking-widest text-zinc-400 transition-all peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-d-crimson font-bold">
                                ${t('contact.form_name')}
                            </label>
                        </div>

                        <div class="relative group mb-6"> 
                            <input type="email" name="email" id="form-email" required autocomplete="off"
                                class="contact-input w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 outline-none focus:border-d-crimson transition-all peer text-zinc-900 dark:text-white">
                            
                            <label class="absolute left-0 top-3 text-[10px] uppercase tracking-widest text-zinc-400 transition-all peer-focus:-top-4 peer-focus:text-d-crimson font-bold">
                                ${t('contact.form_email')}
                            </label>

                            <span id="form-email-error" class="error-msg absolute -bottom-5 left-0 text-[9px] text-red-500 dark:text-red-400 uppercase opacity-0 pointer-events-none transition-opacity duration-300 italic font-bold z-10">
                                ${t('contact.error_email')}
                            </span>
                        </div>

                        <div class="relative">
                            <label class="text-[10px] uppercase tracking-widest text-d-crimson font-bold block mb-4 italic">${t('contact.form_type')}</label>
                            <div class="flex flex-wrap gap-2">
                                ${t('contact.types').map(type => `
                                    <label class="cursor-pointer">
                                        <input type="radio" name="project_type" value="${type}" class="hidden peer">
                                        <span class="px-5 py-2 rounded-full border border-zinc-100 dark:border-zinc-800 text-[9px] uppercase tracking-widest peer-checked:bg-d-crimson peer-checked:text-white peer-checked:border-d-crimson transition-all block font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800">
                                            ${type}
                                        </span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>

                        <div class="relative group">
                            <textarea name="description" id="form-desc" rows="3" required
                                class="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 outline-none focus:border-d-crimson transition-all peer text-zinc-900 dark:text-white resize-none font-light italic"></textarea>
                            <label class="absolute left-0 top-3 text-[10px] uppercase tracking-widest text-zinc-400 transition-all peer-focus:-top-4 peer-valid:-top-4 peer-focus:text-d-crimson font-bold">
                                ${t('contact.form_desc')}
                            </label>
                        </div>

                        <button type="submit" id="submit-btn" disabled
                            class="w-full py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] transition-all duration-500 
                            bg-zinc-200 text-zinc-400 cursor-not-allowed 
                            enabled:bg-zinc-900 enabled:dark:bg-white enabled:text-white enabled:dark:text-zinc-900 enabled:cursor-pointer enabled:hover:bg-d-crimson enabled:dark:hover:bg-d-crimson enabled:dark:hover:text-white enabled:shadow-xl enabled:hover:shadow-d-crimson/20">
                            <span class="block group-hover:tracking-[0.5em] transition-all">${t('contact.form_send')}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
}

// --- 2. AYUDANTES DE VALIDACIÓN ---
const validators = {
    isEmail: (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
    isName: (val) => val.trim().length >= 3,
    isDesc: (val) => val.trim().length >= 10,
    isTypeSelected: (form) => form.querySelector('input[name="project_type"]:checked') !== null
};

// --- 3. LÓGICA FRAGMENTADA ---

// A. Feedback Visual de Errores
const toggleFieldError = (input, isValid) => {
    const errorSpan = document.getElementById(`${input.id}-error`);
    if (input.value.trim().length > 0 && !isValid) {
        errorSpan?.classList.replace('opacity-0', 'opacity-100');
        input.classList.add('border-red-500', 'dark:border-red-400');
    } else {
        errorSpan?.classList.replace('opacity-100', 'opacity-0');
        input.classList.remove('border-red-500', 'dark:border-red-400');
    }
};

// B. Orquestador de Validación
const validateFormState = (form, submitBtn) => {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const descInput = document.getElementById('form-desc');

    toggleFieldError(nameInput, validators.isName(nameInput.value));
    toggleFieldError(emailInput, validators.isEmail(emailInput.value));
    toggleFieldError(descInput, validators.isDesc(descInput.value));

    const isComplete = 
        validators.isName(nameInput.value) && 
        validators.isEmail(emailInput.value) && 
        validators.isDesc(descInput.value) && 
        validators.isTypeSelected(form);

    submitBtn.disabled = !isComplete;
};

// C. Lógica de Envío (WhatsApp Centralizado)
const processWhatsAppOrder = (form, btn) => {
    const lang = localStorage.getItem('lang') || 'es';
    
    const name = document.getElementById('form-name').value;
    const type = form.querySelector('input[name="project_type"]:checked').value;
    const desc = document.getElementById('form-desc').value;

    // --- TODO DESDE LOCALES ---
    const message = [
        `Shopx`,
        `${t('contact.chat_client')}: ${name}`,
        `${t('contact.chat_project')}: ${type}`,
        `${t('contact.chat_details')}: ${desc}`
    ].join('\n\n');
    
    const originalText = btn.innerHTML;
    btn.innerText = t('contact.sending'); 

    setTimeout(() => {
        window.open(getWhatsAppLink(message), '_blank');
        form.reset();
        btn.innerHTML = originalText;
        
        // Reset visual
        form.querySelectorAll('input, textarea').forEach(el => {
            el.nextElementSibling?.classList.remove('-top-4', 'text-d-crimson');
        });
        
        validateFormState(form, btn);
    }, 800);
};

// --- 4. INICIALIZACIÓN ---
export function initContact() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    if (!form || !window.anime) return;

    // Animación de entrada
    window.anime.timeline({ easing: 'easeOutExpo' })
        .add({
            targets: '.contact-info-anim',
            opacity: [0, 1],
            translateX: [-50, 0],
            begin: (el) => el.animatables[0].target.classList.remove('invisible'),
            duration: 1200
        })
        .add({
            targets: '.contact-form-anim',
            opacity: [0, 1],
            translateY: [40, 0],
            begin: (el) => el.animatables[0].target.classList.remove('invisible'),
            duration: 1000
        }, '-=800');

    // Manejo de eventos
    form.addEventListener('input', (e) => {
        // Estilo de label flotante
        const label = e.target.nextElementSibling;
        if (label && e.target.matches('input, textarea')) {
            e.target.value.length > 0 ? label.classList.add('-top-4', 'text-d-crimson') : label.classList.remove('-top-4', 'text-d-crimson');
        }
        validateFormState(form, submitBtn);
    });

    form.addEventListener('change', (e) => {
        if (e.target.name === 'project_type') validateFormState(form, submitBtn);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        processWhatsAppOrder(form, submitBtn);
    });
}
