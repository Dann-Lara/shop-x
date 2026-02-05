export const products = [
    // --- CATEGORÍA: GLOBOS ---
    {
        id: 'g1',
        categoryId: 'globos',
        name: { es: 'Milagrito', en: 'Little Miracle' },
        price: 830,
        image: 'assets/img/c1.png',
        description: { 
            es: 'Globo burbuja personalizado con pintura/confeti y base de globos.', 
            en: 'Personalized bubble balloon with paint/confetti and balloon base.' 
        }
    },
    {
        id: 'g2',
        categoryId: 'globos',
        name: { es: 'Corazón Gigante', en: 'Giant Heart' },
        price: 400,
        image: 'assets/img/c1.png',
        description: { 
            es: 'Globo metálico de corazón gigante con helio y listones elegantes.', 
            en: 'Giant heart foil balloon with helium and elegant ribbons.' 
        }
    },

    // --- CATEGORÍA: JARDÍN ---
    {
        id: 'j1',
        categoryId: 'jardin',
        name: { es: 'Jardín Enmarcado', en: 'Framed Garden' },
        price: 950,
        image: 'assets/img/garden1.png',
        description: { 
            es: 'Exclusivo arreglo de flores frescas diseñado en una estructura tipo marco.', 
            en: 'Exclusive fresh flower arrangement designed in a frame-like structure.' 
        }
    },

    // --- CATEGORÍA: RAMO ---
    {
        id: 'rm1',
        categoryId: 'ramo',
        name: { es: 'Ramo Clásico', en: 'Classic Bouquet' },
        price: 650,
        image: 'assets/img/ramo1.png',
        description: { 
            es: 'Elegante ramo de flores de temporada envuelto en papel craft premium.', 
            en: 'Elegant bouquet of seasonal flowers wrapped in premium craft paper.' 
        }
    },

    // --- CATEGORÍA: CARTA ---
    {
        id: 'ct1',
        categoryId: 'carta',
        name: { es: 'Carta con Chocolates', en: 'Letter with Chocolates' },
        price: 450,
        image: 'assets/img/carta1.png',
        description: { 
            es: 'Mensaje personalizado acompañado de una fina selección de chocolates.', 
            en: 'Personalized message accompanied by a fine selection of chocolates.' 
        }
    },

    // --- CATEGORÍA: FLORECER ---
    {
        id: 'f1',
        categoryId: 'florecer',
        name: { es: 'Corazón Florecer', en: 'Bloom Heart' },
        price: 1200,
        image: 'assets/img/flo1.png',
        description: { 
            es: 'Arreglo floral premium acomodado artísticamente en forma de corazón.', 
            en: 'Premium floral arrangement artistically arranged in a heart shape.' 
        }
    },

    // --- CATEGORÍA: KITS ---
    {
        id: 'k1',
        categoryId: 'kits',
        name: { es: 'Dulzura', en: 'Sweetness' },
        price: 950,
        image: 'assets/img/kit1.png',
        description: { 
            es: 'Kit especial que incluye flores frescas y un pastel artesanal.', 
            en: 'Special kit including fresh flowers and a handcrafted cake.' 
        }
    },
    {
        id: 'k2',
        categoryId: 'kits',
        name: { es: 'Amarte', en: 'Amarte Kit' },
        price: 1450,
        image: 'assets/img/kit1.png',
        description: { 
            es: 'Experiencia romántica con flores y botellas de vino seleccionadas.', 
            en: 'Romantic experience with flowers and selected bottles of wine.' 
        }
    },
    {
        id: 'k3',
        categoryId: 'kits',
        name: { es: 'Sobre Amor', en: 'About Love' },
        price: 1300,
        image: 'assets/img/kit1.png',
        description: { 
            es: 'Kit de lujo con arreglo floral y una botella de vino tinto.', 
            en: 'Luxury kit with floral arrangement and a bottle of red wine.' 
        }
    },

    // --- CATEGORÍA: COMIDA ---
    {
        id: 'c1',
        categoryId: 'comida',
        name: { es: 'Desayuno Nändi', en: 'Nändi Breakfast' },
        price: 1100,
        image: 'assets/img/cake1.png',
        description: { 
            es: 'Desayuno completo gourmet con ingredientes frescos y artesanales.', 
            en: 'Complete gourmet breakfast with fresh and handcrafted ingredients.' 
        }
    },
    {
        id: 'c2',
        categoryId: 'comida',
        name: { es: 'Pastel Charlie', en: 'Charlie Cake' },
        price: 850,
        image: 'assets/img/cake1.png',
        description: { 
            es: 'Pastel artesanal de diseño exclusivo Charlie Bakes.', 
            en: 'Exclusively designed handcrafted cake by Charlie Bakes.' 
        }
    }
];

export const categories = [
    {
        id: "regalos",
        name: { es: "Regalos", en: "Gifts" },
        description: { es: "Detalles que enamoran", en: "Details to fall in love with" },
        image: "assets/img/c2.jpg"
    },
    {
        id: "globos",
        name: { es: "Globos", en: "Balloons" },
        description: { es: "Diseños que roban suspiros", en: "Designs that steal sighs" },
        image: "assets/img/c1.png"
    },
    {
        id: "kits",
        name: { es: "Kits", en: "Kits" },
        description: { es: "Experiencias mágicas completas", en: "Complete magical experiences" },
        image: "assets/img/kit1.png"
    },
    {
        id: "jardin",
        name: { es: "Jardín", en: "Garden" },
        description: { es: "Arreglos tipo marco", en: "Frame-style arrangements" },
        image: "assets/img/garden1.png"
    },
    {
        id: "ramo",
        name: { es: "Ramo", en: "Bouquet" },
        description: { es: "Ramos de flores", en: "Flower bouquets" },
        image: "assets/img/ramo1.png"
    },
    {
        id: "carta",
        name: { es: "Carta", en: "Letter" },
        description: { es: "Cartas y chocolates", en: "Letters and chocolates" },
        image: "assets/img/carta1.png"
    },
    {
        id: "florecer",
        name: { es: "Florecer", en: "Bloom" },
        description: { es: "Flores en forma de corazón", en: "Heart-shaped flowers" },
        image: "assets/img/flo1.png"
    },
    {
        id: "comida",
        name: { es: "Comida", en: "Food" },
        description: { es: "Desayunos y pasteles", en: "Breakfasts and cakes" },
        image: "assets/img/cake1.png"
    }
];