/**
 * Agrotimes S.A. - Internationalization (i18n) Script
 * Supports ES (Spanish) and EN (English)
 */

const translations = {
    es: {
        // Navigation
        nav_inicio: "Inicio",
        nav_quienes: "¿Quiénes Somos?",
        nav_productos: "Productos",
        nav_contacto: "Contacto",
        nav_explorar: "Explorar",

        // Hero
        hero_badge: "TRADICIÓN URUGUAYA DESDE 1978",
        hero_title: 'Fabricantes y exportadores de<br> <span style="color: var(--primary-color); font-style: italic;">cuero lanar</span>',
        hero_desc: "Especialistas en la exportación global de cueros curtidos con lana de la más alta calidad premium, procesados con maestría artesanal.",
        hero_btn_explorar: "Explorar Productos",
        hero_btn_catalogo: "Ver Catálogo",

        // Heritage
        heritage_badge: "HERENCIA FAMILIAR",
        heritage_title: "Excelencia artesanal <br>en cada detalle.",
        heritage_desc: "Nuestra pasión por el curtido tradicional se fusiona con procesos industriales de vanguardia. En AGROTIMES S.A., cada pieza cuenta una historia de dedicación, desde las pasturas naturales de Uruguay hasta los mercados más exigentes de Europa y Asia.",
        heritage_stat1_val: "45+",
        heritage_stat1_label: "AÑOS DE EXPERIENCIA",
        heritage_stat2_val: "10+",
        heritage_stat2_label: "PAÍSES DE EXPORTACIÓN",
        heritage_quote: '"Calidad que trasciende fronteras."',

        // Categories
        cat_title: "Categorías Premium",
        cat_desc: "Selección curada de nuestros productos estrella, procesados con los estándares más altos de la industria peletera.",
        cat_link: "Ver todo el catálogo →",
        cat_cueros: "Cueros Curtidos",
        cat_prendas: "Prendas",
        cat_mitones: "Mitones",
        cat_gorros: "Gorros",

        // Footer
        footer_desc: "Líderes en la producción artesanal y exportación de cueros lanares de origen uruguayo. Calidad certificada internacionalmente para los mercados globales más exigentes.",
        footer_contacto: "CONTACTO",
        footer_newsletter: "NEWSLETTER",
        footer_newsletter_desc: "Reciba actualizaciones sobre nuevas colecciones y tendencias de mercado.",
        footer_email_placeholder: "Su email",
        footer_copyright: "© 2026 AGROTIMES S.A. Todos los derechos reservados.",
        footer_privacidad: "Privacidad",
        footer_terminos: "Términos",
        footer_cookies: "Cookies",

        // Productos page
        prod_title: "Catálogo de Productos",
        prod_desc: "Explore nuestra exclusiva selección de prendas, gorros y mitones de cuero lanar.",
        prod_filter_todo: "Todo",
        prod_filter_prendas: "Prendas",
        prod_filter_gorros: "Gorros",
        prod_filter_mitones: "Mitones",
        prod_consultar: "Consultar Precio",
        prod_modal_desc: "Descripción del producto",
        prod_consultar_btn: "Consultar por este producto",

        // Product names - Prendas
        prod_chaqueta_cockpit: "Cockpit",
        prod_abrigo_lanar: "Manuel",
        prod_doll: "Doll",
        prod_manuela: "Manuela",
        prod_trenca: "Trenca",
        prod_jlo_biker: "JLO Biker",
        prod_dominico: "Dominico",
        prod_rufus: "Rufus",
        prod_roy: "Roy",
        prod_mara: "Mara",
        prod_kelly: "Kelly",
        prod_ines: "Ines",
        prod_frida: "Frida",
        prod_del: "Del",
        prod_b52: "B-52",
        prod_at11: "AT-11",
        prod_anne: "Anne",
        prod_3029: "3029",
        prod_silvana: "Silvana",

        // Product names - Gorros & Mitones
        prod_mitones_termicos: "Mitones Térmicos",
        prod_gorro_aviador: "Gorro de Aviador",
        prod_gorro_6p: "Gorro 6P",
        prod_gorro_rhapsody: "Gorro Rhapsody",

        // Quienes Somos
        about_badge: "ACERCA DE NOSOTROS",
        about_title: "¿Quiénes Somos?",
        about_subtitle: "Descubra la pasión y dedicación detrás de cada una de nuestras piezas de cuero lanar.",
        about_empresa_title: "Nuestra Empresa",
        about_p1: "Somos una empresa Uruguaya dinámica, especializada en la fabricación de prendas de cuero lanar. Desde hace mas de 30 años, nuestras prendas son exportadas a países tales como Estados Unidos, Canadá, Alemania, Reino Unido, entre otros.",
        about_p2: "Utilizamos y seleccionamos las mejores materias primas para producir nuestras prendas. Dichas prendas pasan por un estricto control de calidad durante todo el proceso de fabricación, obteniendo así la excelente calidad que distingue a nuestros productos a nivel mundial.",
        about_p3: "Como otro rubro, exportamos todo tipo de cueros ovinos curtidos al cromo, en sus diferentes tipos y para los diferentes usos. Somos una empresa dinámica en estos términos, siempre abierta a cambios y sugerencias de nuestros clientes, estando así a la vanguardia en lo que a moda se refiere.",
        about_p4: "Nuestro propósito es estrechar vínculos con nuestros clientes para así poder seguir satisfaciéndolos, como desde hace mas de 30 años.",

        // Contacto
        contact_badge: "SOPORTE AL CLIENTE",
        contact_title: "Contáctenos",
        contact_desc: "Estamos aquí para ayudarle. Póngase en contacto con nuestro equipo para consultas, pedidos o información sobre exportaciones.",
        contact_info_title: "Información Directa",
        contact_direccion: "Dirección",
        contact_telefono: "Teléfono",
        contact_email: "Email",
        contact_redes: "Redes Sociales",
        contact_redes_link: "AGROTIMES",
        contact_form_title: "Envíenos un Mensaje",
        contact_label_nombre: "Nombre",
        contact_label_email: "Email",
        contact_label_empresa: "Empresa",
        contact_label_asunto: "Asunto",
        contact_label_mensaje: "Mensaje",
        contact_nombre: "Nombre completo",
        contact_correo: "Correo electrónico",
        contact_empresa: "Nombre de su empresa (opcional)",
        contact_asunto: "Asunto",
        contact_mensaje: "Cuéntenos sobre su consulta...",
        contact_enviar: "Enviar Mensaje",

        // Cueros page
        cueros_title: "Cueros Curtidos",
        cueros_desc: "Alta calidad para la industria peletera.",
        cuero_vintage_antik: "Vintage Antik Salmon Wool",
        cuero_pecari_sf: "Pecari San Francisco",
        cuero_pecari_nugat: "Pecari Nugat Tone Tone",
        cuero_pecari_camel: "Pecari Camel Tone Tone",
        cuero_pecari_nugat2: "Pecari Nugat Tone to Tone",
        cuero_old_navy: "Old Navy Cafe Lana Salmon",
        cuero_negro_brisa: "Negro Brisa Bota",
        cuero_napalan_sky: "Napalan Sky Blue Curly Natural Wool",
        cuero_napalan_navy: "Napalan Old Navy Cafe Salmon Wool",
        cuero_napalan_jade: "Napalan Jade",
        cuero_napalan_black: "Napalan Black Tone",
        cuero_napalan_antik: "Napalan Antik Natural Wool",
        cuero_marron_brisa: "Marrón Brisa Bota",
        cuero_habano: "Habano Tone to Tone",
        cuero_ginseng: "Ginseng Tone to Tone Boots",
        cuero_napalan_havanna: "Napalan Antik Havanna Wool",
        cuero_alpino: "Alpino Natural",
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_quienes: "About Us",
        nav_productos: "Products",
        nav_contacto: "Contact",
        nav_explorar: "Explore",

        // Hero
        hero_badge: "URUGUAYAN TRADITION SINCE 1978",
        hero_title: 'Manufacturers and exporters of<br> <span style="color: var(--primary-color); font-style: italic;">sheepskin leather</span>',
        hero_desc: "Specialists in the global export of premium quality wool-on tanned leathers, processed with artisan craftsmanship.",
        hero_btn_explorar: "Explore Products",
        hero_btn_catalogo: "View Catalog",

        // Heritage
        heritage_badge: "FAMILY HERITAGE",
        heritage_title: "Artisan excellence <br>in every detail.",
        heritage_desc: "Our passion for traditional tanning merges with cutting-edge industrial processes. At AGROTIMES S.A., every piece tells a story of dedication, from Uruguay's natural pastures to the most demanding markets in Europe and Asia.",
        heritage_stat1_val: "45+",
        heritage_stat1_label: "YEARS OF EXPERIENCE",
        heritage_stat2_val: "10+",
        heritage_stat2_label: "EXPORT COUNTRIES",
        heritage_quote: '"Quality that transcends borders."',

        // Categories
        cat_title: "Premium Categories",
        cat_desc: "A curated selection of our star products, processed with the highest standards of the fur industry.",
        cat_link: "View full catalog →",
        cat_cueros: "Tanned Leathers",
        cat_prendas: "Garments",
        cat_mitones: "Mittens",
        cat_gorros: "Hats",

        // Footer
        footer_desc: "Leaders in artisan production and export of sheepskin leathers of Uruguayan origin. Internationally certified quality for the most demanding global markets.",
        footer_contacto: "CONTACT",
        footer_newsletter: "NEWSLETTER",
        footer_newsletter_desc: "Receive updates on new collections and market trends.",
        footer_email_placeholder: "Your email",
        footer_copyright: "© 2026 AGROTIMES S.A. All rights reserved.",
        footer_privacidad: "Privacy",
        footer_terminos: "Terms",
        footer_cookies: "Cookies",

        // Productos page
        prod_title: "Product Catalog",
        prod_desc: "Explore our exclusive selection of sheepskin leather garments, hats and mittens.",
        prod_filter_todo: "All",
        prod_filter_prendas: "Garments",
        prod_filter_gorros: "Hats",
        prod_filter_mitones: "Mittens",
        prod_consultar: "Request Price",
        prod_modal_desc: "Product description",
        prod_consultar_btn: "Inquire about this product",

        // Product names - Prendas (proper names stay the same)
        prod_chaqueta_cockpit: "Cockpit",
        prod_abrigo_lanar: "Manuel",
        prod_doll: "Doll",
        prod_manuela: "Manuela",
        prod_trenca: "Trenca",
        prod_jlo_biker: "JLO Biker",
        prod_dominico: "Dominico",
        prod_rufus: "Rufus",
        prod_roy: "Roy",
        prod_mara: "Mara",
        prod_kelly: "Kelly",
        prod_ines: "Ines",
        prod_frida: "Frida",
        prod_del: "Del",
        prod_b52: "B-52",
        prod_at11: "AT-11",
        prod_anne: "Anne",
        prod_3029: "3029",
        prod_silvana: "Silvana",

        // Product names - Gorros & Mitones
        prod_mitones_termicos: "Thermal Mittens",
        prod_gorro_aviador: "Aviator Hat",
        prod_gorro_6p: "6P Hat",
        prod_gorro_rhapsody: "Rhapsody Hat",

        // Quienes Somos
        about_badge: "ABOUT US",
        about_title: "Who We Are",
        about_subtitle: "Discover the passion and dedication behind every one of our sheepskin leather pieces.",
        about_empresa_title: "Our Company",
        about_p1: "We are a dynamic Uruguayan company, specialized in the manufacture of sheepskin leather garments. For over 30 years, our garments have been exported to countries such as the United States, Canada, Germany, the United Kingdom, among others.",
        about_p2: "We use and select the finest raw materials to produce our garments. These garments undergo strict quality control throughout the entire manufacturing process, thus achieving the excellent quality that distinguishes our products worldwide.",
        about_p3: "As another line of business, we export all types of chrome-tanned sheep leather, in their different types and for different uses. We are a dynamic company in these terms, always open to changes and suggestions from our clients, thus staying at the forefront of fashion.",
        about_p4: "Our purpose is to strengthen bonds with our clients so we can continue to satisfy them, as we have for over 30 years.",

        // Contacto
        contact_badge: "CUSTOMER SUPPORT",
        contact_title: "Contact Us",
        contact_desc: "We are here to help. Get in touch with our team for inquiries, orders or export information.",
        contact_info_title: "Direct Information",
        contact_direccion: "Address",
        contact_telefono: "Phone",
        contact_email: "Email",
        contact_redes: "Social Media",
        contact_redes_link: "AGROTIMES",
        contact_form_title: "Send us a Message",
        contact_label_nombre: "Name",
        contact_label_email: "Email",
        contact_label_empresa: "Company",
        contact_label_asunto: "Subject",
        contact_label_mensaje: "Message",
        contact_nombre: "Full name",
        contact_correo: "Email address",
        contact_empresa: "Your company name (optional)",
        contact_asunto: "Subject",
        contact_mensaje: "Tell us about your inquiry...",
        contact_enviar: "Send Message",

        // Cueros page
        cueros_title: "Tanned Leathers",
        cueros_desc: "High quality for the fur industry.",
        cuero_vintage_antik: "Vintage Antik Salmon Wool",
        cuero_pecari_sf: "Pecari San Francisco",
        cuero_pecari_nugat: "Pecari Nugat Tone Tone",
        cuero_pecari_camel: "Pecari Camel Tone Tone",
        cuero_pecari_nugat2: "Pecari Nugat Tone to Tone",
        cuero_old_navy: "Old Navy Cafe Lana Salmon",
        cuero_negro_brisa: "Negro Brisa Bota",
        cuero_napalan_sky: "Napalan Sky Blue Curly Natural Wool",
        cuero_napalan_navy: "Napalan Old Navy Cafe Salmon Wool",
        cuero_napalan_jade: "Napalan Jade",
        cuero_napalan_black: "Napalan Black Tone",
        cuero_napalan_antik: "Napalan Antik Natural Wool",
        cuero_marron_brisa: "Marrón Brisa Bota",
        cuero_habano: "Habano Tone to Tone",
        cuero_ginseng: "Ginseng Tone to Tone Boots",
        cuero_napalan_havanna: "Napalan Antik Havanna Wool",
        cuero_alpino: "Alpino Natural",
    }
};

let currentLang = localStorage.getItem('agrotimes_lang') || 'es';

function applyTranslations() {
    const t = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update the language button text
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        const span = langBtn.querySelector('span');
        if (span) {
            span.textContent = currentLang === 'es' ? 'EN' : 'ES';
        }
        langBtn.title = currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español';
    }

    // Update html lang attribute
    document.documentElement.lang = currentLang;
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('agrotimes_lang', currentLang);
    applyTranslations();
}

// Apply translations on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});
