import { Navbar, initNavbar } from './components/navbar.js';
import { Hero, initHero } from './components/hero.js';
import { Categories, initCategories } from './components/categories.js';
import { Products, initProducts } from './pages/products/products.js';
import { Inspiration, initInspiration } from './components/inspiration.js';
import { Social, initSocial } from './components/social.js';
import { Contact, initContact } from './components/contact.js';
import { Footer, initFooter } from './components/footer.js';
import { CartComponent, initCartLogic } from './store/cart.js';
import { initI18n } from './utils/i18n.js';

async function render() {
    const app = document.getElementById('app');
    const savedLang = localStorage.getItem('lang') || 'es';
    await initI18n(savedLang);

    // 1. Detectar la ruta actual
    const hash = window.location.hash || '#/';
    
    // 2. Definir el contenido del <main> dinámicamente
    let mainContent = '';
    
    if (hash.startsWith('#/shop')) {
        // Extraer categoría del hash: #/shop/globos -> globos
        const categoryId = hash.split('/')[2] || 'all';
        mainContent = Products(categoryId);
    } else {
        // Contenido de la Home
        mainContent = `
            ${Hero()}
            ${Categories()}
            ${Inspiration()}
            ${Social()}
            ${Contact()}
        `;
    }

    // 3. Renderizar estructura base
    app.innerHTML = `
        ${Navbar()}
        <main id="main-container">
            ${mainContent}
        </main>
        ${Footer()}
        ${CartComponent()}
    `;

    // 4. Inicializar componentes comunes
    initNavbar(render);
    initCartLogic();
    initFooter(render);

    // 5. Inicializar lógica específica según la ruta
    if (hash.startsWith('#/shop')) {
        initProducts(); // Lógica de filtros y productos
    } else {
        initHero();
        initCategories();
        initInspiration();
        initSocial();
        initContact();
    }
    
    // window.scrollTo(0, 0);
    // window.dispatchEvent(new Event('scroll'));
}

// Escuchar cambios en el hash para navegar sin recargar
window.addEventListener('hashchange', render);

// Configuración de tema (Dark/Light)
if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

render();