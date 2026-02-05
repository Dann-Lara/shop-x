import { products } from '../data/products.js';
import { t } from '../utils/i18n.js';
import { getWhatsAppLink } from '../utils/linkHelpers.js';

const state = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    isOpen: false
};

// --- Lógica de Datos ---
const cartLogic = {
    save() {
        localStorage.setItem('cart', JSON.stringify(state.items));
        renderCartItems();
        updateBadge();
    },
    add(id) {
        const product = products.find(p => p.id === id);
        const lang = localStorage.getItem('lang') || 'es';
        const existing = state.items.find(item => item.id === id);
        
        if (existing) {
            existing.quantity++;
        } else {
            // Guardamos el nombre dinámico según el idioma actual
            state.items.push({ ...product, name: product.name[lang], quantity: 1 });
        }
        this.save();
        openCart();
    }
};

// --- Componente UI ---
export function CartComponent() {
    return `
    <div id="cart-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300] opacity-0 pointer-events-none transition-opacity duration-500"></div>
    
    <div id="cart-panel" 
         class="not-ready fixed top-0 right-0 h-full w-full md:w-[400px] bg-white dark:bg-[#080808] z-[301] translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col">
        
        <div class="p-8 border-b border-zinc-100 dark:border-white/5 flex justify-between items-center">
            <h2 class="text-2xl font-title italic">${t('cart.title')}</h2>
            <button id="close-cart" class="text-[10px] uppercase tracking-widest opacity-50 hover:opacity-100">
                ${t('cart.close')}
            </button>
        </div>

        <div id="cart-items-list" class="flex-1 overflow-y-auto p-8 space-y-6"></div>
        
        <div id="cart-footer" class="p-8 border-t border-zinc-100 dark:border-white/5"></div>
    </div>
    `;
}

// --- Renderizado Dinámico ---
function renderCartItems() {
    const list = document.getElementById('cart-items-list');
    const footer = document.getElementById('cart-footer');
    if (!list || !footer) return;

    const total = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (state.items.length === 0) {
        list.innerHTML = `<p class="text-center italic text-zinc-400 mt-20">${t('cart.empty')}</p>`;
        footer.innerHTML = '';
        return;
    }

    list.innerHTML = state.items.map(item => `
        <div class="flex gap-4 items-center animate-fadeIn">
            <img src="${item.image}" class="w-20 h-24 object-cover rounded-sm bg-zinc-100 dark:bg-zinc-800">
            <div class="flex-1">
                <h4 class="font-title italic text-lg leading-tight text-zinc-900 dark:text-white">${item.name}</h4>
                <p class="text-xs text-zinc-400 mt-1">$${item.price} x ${item.quantity}</p>
                <div class="flex gap-4 mt-3">
                    <button class="qty-btn text-xs w-6 h-6 border border-zinc-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-d-crimson hover:text-white transition-colors text-zinc-900 dark:text-white" data-id="${item.id}" data-delta="-1">-</button>
                    <span class="text-xs font-bold self-center text-zinc-900 dark:text-white">${item.quantity}</span>
                    <button class="qty-btn text-xs w-6 h-6 border border-zinc-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-d-crimson hover:text-white transition-colors text-zinc-900 dark:text-white" data-id="${item.id}" data-delta="1">+</button>
                </div>
            </div>
            <button class="remove-btn text-zinc-300 hover:text-d-crimson transition-colors px-2" data-id="${item.id}">
                <i class="fa-solid fa-times text-[10px]"></i>
            </button>
        </div>
    `).join('');

    footer.innerHTML = `
        <div class="flex justify-between mb-6 italic font-title text-xl text-zinc-900 dark:text-white">
            <span>Total:</span> <span>$${total}</span>
        </div>
        <button id="checkout-btn" class="w-full py-5 bg-d-crimson text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black transition-all">
            ${t('cart.checkout')}
        </button>
    `;
}

// --- Inicialización y Eventos ---
export function initCartLogic() {
    document.addEventListener('click', (e) => {
        // Agregar
        const addBtn = e.target.closest('[data-add-cart]');
        if (addBtn) return cartLogic.add(addBtn.dataset.addCart);
        
        // Abrir/Cerrar
        if (e.target.closest('#open-cart')) return openCart();
        if (e.target.closest('#close-cart') || e.target.id === 'cart-overlay') return closeCart();
        
        // Cantidades
        const qtyBtn = e.target.closest('.qty-btn');
        if (qtyBtn) return handleQuantityChange(qtyBtn.dataset.id, parseInt(qtyBtn.dataset.delta));

        // Eliminar
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) return handleRemoveItem(removeBtn.dataset.id);

        // Checkout
        if (e.target.id === 'checkout-btn') return processCartCheckout(state.items);
    });

    renderCartItems();
    updateBadge();
}

// --- Helpers de Acción ---
const handleQuantityChange = (id, delta) => {
    const item = state.items.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        cartLogic.save();
    }
};

const handleRemoveItem = (id) => {
    state.items = state.items.filter(i => i.id !== id);
    cartLogic.save();
};

const processCartCheckout = (items) => {
    const msgItems = items.map(i => `• ${i.quantity}x ${i.name} ($${i.price * i.quantity})`).join('\n');
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    const fullMsg = [
        t('cart.wa_intro'),
        '',
        msgItems,
        '',
        `${t('cart.wa_total')}: $${total}`
    ].join('\n');

    window.open(getWhatsAppLink(fullMsg), '_blank');
};

// --- Control Visual ---
function openCart() {
    const overlay = document.getElementById('cart-overlay');
    const panel = document.getElementById('cart-panel');
    
    panel.classList.remove('not-ready');
    void panel.offsetWidth; // Reflow
    
    overlay.classList.replace('pointer-events-none', 'pointer-events-auto');
    overlay.classList.add('opacity-100');
    panel.classList.remove('translate-x-full');
}

function closeCart() {
    const overlay = document.getElementById('cart-overlay');
    const panel = document.getElementById('cart-panel');
    
    panel.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100');
    
    setTimeout(() => {
        if (panel.classList.contains('translate-x-full')) {
            overlay.classList.replace('pointer-events-auto', 'pointer-events-none');
            panel.classList.add('not-ready');
        }
    }, 700);
}

function updateBadge() {
    const count = state.items.reduce((acc, i) => acc + i.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = count;
        badge.classList.toggle('hidden', count === 0);
        window.dispatchEvent(new Event('cartUpdated'));
    }
}