/**
 * Agrotimes S.A. - Internationalization (i18n) Script
 * Supports ES (Spanish) and EN (English)
 */

const translations = {
    es: {
        // Navigation
        nav_inicio: "Inicio",
        nav_quienes: "Nuesta Empresa",
        nav_productos: "Productos",
        nav_contacto: "Contacto",
        nav_proceso: "Nuestro Proceso",
        btn_ver_mas: "Ver más",
        nav_explorar: "Explorar",
        nav_sobre_nosotros: "Sobre nosotros",
        nav_quienes_desc: "Nuestra historia y compromiso con la excelencia.",
        nav_proceso_desc: "Conozca nuestro arte del curtido tradicional.",
        nav_catalogo: "Catálogo",
        nav_catalogo_desc: "Descubra nuestra colección premium de prendas y accesorios.",
        nav_remanentes: "Remanentes",
        nav_remanentes_desc: "Aproveche materiales de alta calidad en lotes exclusivos.",

        // Hero
        hero_badge: "TRADICIÓN URUGUAYA DESDE 1994",
        hero_title: 'Fabricantes y exportadores de<br> <span style="color: var(--primary-color); font-style: italic;">cuero lanar</span>',
        hero_desc: "Especialistas en la exportación global de cueros curtidos con lana de la más alta calidad premium, procesados artesanalmente.",
        hero_btn_explorar: "Explorar Productos",
        hero_btn_catalogo: "Proceso de curtido",

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
        cat_cueros: "Tonalidades",
        cat_prendas: "Prendas",
        cat_mitones: "Mitones",
        cat_gorros: "Gorros",

        // Nuestro Proceso (cueros.html)
        proceso_subtitle: "Nuestros Procesos",
        proceso_title: "Nuestras tonalidades",
        proceso_hero_title: "Curtido con Propósito y Tradición",
        proceso_hero_desc: "En Agrotimes S.A., fusionamos técnicas ancestrales con tecnología de punta para minimizar el impacto ambiental. Utilizamos extractos vegetales y procesos de bajo consumo hídrico, garantizando una piel flexible, duradera y con un aroma inconfundible.",
        proceso_step1_title: "Selección de Materia Prima",
        proceso_step1_desc: "Solo las pieles más finas de procedencia ética pasan nuestro control de calidad inicial, garantizando una base perfecta.",
        proceso_step2_title: "Curtido Vegetal",
        proceso_step2_desc: "Utilizamos taninos naturales derivados de cortezas y plantas, un proceso lento que respeta el medio ambiente y la fibra.",
        proceso_step3_title: "Acabado Artesanal",
        proceso_step3_desc: "Cada pieza es tratada individualmente por maestros curtidores, logrando texturas únicas y una durabilidad excepcional.",

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
        about_p1: "Somos una empresa uruguaya dinámica, especializada en la fabricación de prendas de cuero lanar. Desde hace más de 45 años, nuestras prendas son exportadas a países tales como Estados Unidos, Canadá, Alemania, Reino Unido, entre otros.",
        about_p2: "Utilizamos y seleccionamos las mejores materias primas para producir nuestras prendas. Dichas prendas pasan por un estricto control de calidad durante todo el proceso de fabricación, obteniendo así la excelente calidad que distingue a nuestros productos a nivel mundial.",
        about_p3: "Como otro rubro, trabajamos con todo tipo de cueros ovinos curtidos al cromo, en sus diferentes tipos y para los más variados usos. Siempre abiertos a las tendencias y sugerencias de nuestros clientes, nos mantenemos a la vanguardia en moda y diseño.",
        about_p4: "Nuestro propósito es estrechar vínculos con quienes confían en nosotros, construyendo relaciones duraderas basadas en la calidad y el compromiso.",

        // Ubicación Estratégica
        location_title: "Ubicación Estratégica",
        location_p1: 'Nuestra sede en <strong>San Ramón 803, Montevideo</strong> se encuentra a pasos del <em>Puerto de Montevideo</em>, el principal punto de salida logística del país.',
        location_p2: "Esta cercanía nos permite gestionar de manera ágil y eficiente las exportaciones hacia los mercados que confían en nuestros productos desde hace décadas.",
        location_p3: 'Además, operamos bajo el régimen de <strong>"Puerto Libre"</strong> de Uruguay, lo que nos brinda ventajas competitivas en tiempos y costos de despacho, conectando nuestra producción artesanal con el mundo de forma directa.',

        // Quienes Somos (New)
        qs_title: "Nuestra Empresa",
        qs_subtitle: "Más de 45 años de excelencia en cueros lanares uruguayos.",
        qs_historia_title: "Una Historia de Pasión",
        qs_historia_text: "Agrotimes S.A. nació como un emprendimiento familiar con la visión de llevar la calidad del cuero uruguayo a los mercados más exigentes del mundo. A través de décadas, hemos perfeccionado el arte del curtido, manteniendo un equilibrio entre la tradición artesanal y la innovación sustentable.",
        qs_valor1_title: "Calidad",
        qs_valor1_text: "Seleccionamos rigurosamente cada materia prima para asegurar piezas de primer nivel.",
        qs_valor2_title: "Exportación",
        qs_valor2_text: "Nuestra presencia global avala la confiabilidad y excelencia de nuestros productos.",
        qs_valor3_title: "Sustentabilidad",
        qs_valor3_text: "Comprometidos con procesos responsables que respetan nuestro entorno y comunidad.",
        qs_location_title: "Ubicación Estratégica",
        qs_location_text: "Operamos desde Montevideo, Uruguay, un punto clave para la producción agroindustrial de Sudamérica. Esta ubicación nos permite acceder a los mejores insumos lanares del país y gestionar una logística ágil para nuestras exportaciones globales.",

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
        cueros_title: "Nuestras tonalidades",
        cueros_desc: "Alta calidad para la industria peletera.",
        cueros_taller_title: "Our Workshop",
        cueros_taller_desc: "In our artisan workshop we select each hide and combine traditional techniques with modern quality controls.",
        cueros_taller_title: "Nuestro Taller",
        cueros_taller_desc: "En nuestro taller artesanal seleccionamos cada cuero y aplicamos técnicas tradicionales combinadas con controles modernos de calidad.",
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

        // Zero Waste page
        nav_zero_waste: "Zero Waste",
        zw_hero_title: 'Política<br> <span style="color: var(--primary-color); font-style: italic;">Zero Waste.</span>',
        zw_hero_desc: "Nuestro compromiso con la sostenibilidad se refleja en el aprovechamiento integral de cada pieza. Ofrecemos una selección curada de materiales remanentes de alta calidad, listos para nuevos proyectos creativos.",
        zw_hero_btn_lotes: "Ver Lotes Disponibles",
        zw_hero_btn_cotizacion: "Solicitar Cotización",
        zw_feat1_title: "Producción Responsable",
        zw_feat1_desc: "Aprovechamiento integral de cada pieza. Cero desperdicio en nuestra cadena productiva.",
        zw_feat2_title: "Lotes a Medida",
        zw_feat2_desc: "Armamos lotes según tus necesidades de color, tamaño y volumen. Sin mínimos rígidos.",
        zw_feat3_title: "Cuero Lanar con Lana",
        zw_feat3_desc: "Mismo origen y calidad que nuestras prendas. Curtido profesional, lana natural intacta.",
        zw_lots_title: "Lotes Disponibles",
        zw_lots_desc: "Cuero lanar con lana, agrupado por paleta de color. Consultá por volumen y disponibilidad.",
        zw_lot1_title: "Napa marrón antik natural",
        zw_lot1_desc: "Recortes de Napalan de alta calidad con acabado antik natural. Ideal para bordes de calzado, accesorios o marroquinería pequeña.",
        zw_lot1_tags: '<span class="zw-lot-tag">Marrón</span><span class="zw-lot-tag">Napalan</span><span class="zw-lot-tag">Lana natural</span>',
        zw_lot1_badge: "Lana de 12-14mm",
        zw_lot2_title: "Napa havana",
        zw_lot2_desc: "Piezas premium de Napalan en tono havana. Textura suave con un look clásico antik adaptable a diversos proyectos artesanales.",
        zw_lot2_tags: '<span class="zw-lot-tag">Lana havana</span><span class="zw-lot-tag">Blanco</span><span class="zw-lot-tag">Antik</span>',
        zw_lot2_badge: "Lana de 12-14mm",
        zw_lot3_title: "Napa marrón antik gold",
        zw_lot3_desc: "Fragmentos elegantes de Napalan marrón antik con destellos dorados. Acabado cálido y lujoso, perfecto para resaltar detalles en prendas de alta gama.",
        zw_lot3_tags: '<span class="zw-lot-tag">Marrón antik</span><span class="zw-lot-tag">Lana gold</span><span class="zw-lot-tag">Premium</span>',
        zw_lot3_badge: "Lana de 12-14mm",
        zw_consultar_disponibilidad: "Consultar disponibilidad →",
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_quienes: "About Us",
        nav_productos: "Products",
        nav_contacto: "Contact",
        nav_proceso: "Our Process",
        btn_ver_mas: "See more",
        nav_explorar: "Explore",
        nav_sobre_nosotros: "About Us",
        nav_quienes_desc: "Our history and commitment to excellence.",
        nav_proceso_desc: "Learn about our traditional tanning art.",
        nav_catalogo: "Catalog",
        nav_catalogo_desc: "Discover our premium collection of garments and accessories.",
        nav_remanentes: "Remnants",
        nav_remanentes_desc: "Take advantage of high-quality materials in exclusive lots.",

        // Hero
        hero_badge: "URUGUAYAN TRADITION SINCE 1994",
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

        // Our Process (cueros.html)
        proceso_subtitle: "Our Processes",
        proceso_title: "Our Tones",
        proceso_hero_title: "Tanning with Purpose and Tradition",
        proceso_hero_desc: "At Agrotimes S.A., we fuse ancestral techniques with cutting-edge technology to minimize environmental impact. We use vegetable extracts and low water consumption processes, guaranteeing flexible, durable skin with an unmistakable aroma.",
        proceso_step1_title: "Raw Material Selection",
        proceso_step1_desc: "Only the finest ethically sourced skins pass our initial quality control, guaranteeing a perfect base.",
        proceso_step2_title: "Vegetable Tanning",
        proceso_step2_desc: "We use natural tannins derived from bark and plants, a slow process that respects the environment and the fiber.",
        proceso_step3_title: "Artisanal Finish",
        proceso_step3_desc: "Each piece is individually treated by master tanners, achieving unique textures and exceptional durability.",

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
        about_p1: "We are a dynamic Uruguayan company, specialized in the manufacture of sheepskin leather garments. For over 45 years, our garments have been exported to countries such as the United States, Canada, Germany, the United Kingdom, among others.",
        about_p2: "We rigorously select the finest raw materials and every garment undergoes strict quality control throughout the entire manufacturing process, achieving the excellence that distinguishes us worldwide.",
        about_p3: "As another line of business, we work with all types of chrome-tanned sheep leather, in their different varieties and for the most diverse uses. Always open to trends and client suggestions, we stay at the forefront of fashion and design.",
        about_p4: "Our purpose is to build lasting bonds with those who trust us, forging enduring relationships grounded in quality and commitment.",

        // Strategic Location
        location_title: "Strategic Location",
        location_p1: 'Our headquarters at <strong>San Ramón 803, Montevideo</strong> is located steps away from the <em>Port of Montevideo</em>, the country\'s main logistics hub.',
        location_p2: "This proximity allows us to manage exports efficiently and swiftly to the markets that have trusted our products for decades.",
        location_p3: 'Additionally, we operate under Uruguay\'s <strong>"Free Port"</strong> regime, giving us competitive advantages in shipping times and costs, connecting our artisan production directly with the world.',

        // Quienes Somos (New)
        qs_title: "Our Company",
        qs_subtitle: "Over 45 years of excellence in Uruguayan sheepskin leather.",
        qs_historia_title: "A Story of Passion",
        qs_historia_text: "Agrotimes S.A. was born as a family venture with the vision of bringing the quality of Uruguayan leather to the most demanding markets in the world. Through decades, we have perfected the art of tanning, maintaining a balance between traditional craftsmanship and sustainable innovation.",
        qs_valor1_title: "Quality",
        qs_valor1_text: "We rigorously select each raw material to ensure top-level pieces.",
        qs_valor2_title: "Export",
        qs_valor2_text: "Our global presence endorses the reliability and excellence of our products.",
        qs_valor3_title: "Sustainability",
        qs_valor3_text: "Committed to responsible processes that respect our environment and community.",
        qs_location_title: "Strategic Location",
        qs_location_text: "We operate from Montevideo, Uruguay, a key point for agro-industrial production in South America. This location allows us to access the best sheepskin inputs in the country and manage agile logistics for our global exports.",

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

        // Zero Waste page
        nav_zero_waste: "Zero Waste",
        zw_hero_title: 'Zero Waste<br> <span style="color: var(--primary-color); font-style: italic;">Policy.</span>',
        zw_hero_desc: "Our commitment to sustainability is reflected in the integral use of every piece. We offer a curated selection of high-quality remaining materials, ready for new creative projects.",
        zw_hero_btn_lotes: "View Available Lots",
        zw_hero_btn_cotizacion: "Request Quote",
        zw_feat1_title: "Responsible Production",
        zw_feat1_desc: "Comprehensive use of every piece. Zero waste in our production chain.",
        zw_feat2_title: "Custom Lots",
        zw_feat2_desc: "We assemble lots according to your color, size, and volume needs. No rigid minimums.",
        zw_feat3_title: "Sheepskin with Wool",
        zw_feat3_desc: "Same origin and quality as our garments. Professional tanning, natural wool intact.",
        zw_lots_title: "Available Lots",
        zw_lots_desc: "Wool-on sheepskin, grouped by color palette. Inquire for volume and availability.",
        zw_lot1_title: "Napa antik natural brown",
        zw_lot1_desc: "High-quality Napalan remnants with a natural antik finish. Ideal for footwear trims, accessories, or small leather goods.",
        zw_lot1_tags: '<span class="zw-lot-tag">Brown</span><span class="zw-lot-tag">Napalan</span><span class="zw-lot-tag">Natural Wool</span>',
        zw_lot1_badge: "12-14mm Wool",
        zw_lot2_title: "Napa antik havana",
        zw_lot2_desc: "Premium Napalan pieces in havana tone. Soft texture with a classic antik look, adaptable to various artisanal projects.",
        zw_lot2_tags: '<span class="zw-lot-tag">Havana wool</span><span class="zw-lot-tag">White</span><span class="zw-lot-tag">Antik</span>',
        zw_lot2_badge: "12-14mm Wool",
        zw_lot3_title: "Napa antik gold brown",
        zw_lot3_desc: "Elegant fragments of Napalan antik brown with gold highlights. Warm and luxurious finish, perfect for detailing premium garments.",
        zw_lot3_tags: '<span class="zw-lot-tag">Antik brown</span><span class="zw-lot-tag">Gold wool</span><span class="zw-lot-tag">Premium</span>',
        zw_lot3_badge: "12-14mm Wool",
        zw_consultar_disponibilidad: "Check availability →",
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
