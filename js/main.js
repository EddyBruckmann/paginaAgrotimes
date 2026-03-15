
/**
 * Agrotimes S.A. - Shared JavaScript
 * Handles mobile menu toggle and other common functionality
 */

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('menu-toggle');
    
    if (mobileNav && menuBtn) {
        mobileNav.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

/**
 * Product Data - Details for the Quick View modal
 */
const productData = {
    'cockpit': {
        title: 'Cockpit',
        category: 'Prendas',
        description: 'Chaqueta de cuero lanar con lana de alta calidad. Un diseño clásico inspirado en la aviación, combinando durabilidad mecánica con un confort térmico excepcional para climas fríos.',
        images: ['assets/images/fotos reales/cokpitv2.png', 'assets/images/fotos reales/cockpit2.png']
    },
    'manuel': {
        title: 'Manuel',
        category: 'Prendas',
        description: 'Abrigo de cuero lanar premium. Confeccionado con las técnicas más finas de selección de materia prima, este modelo ofrece una cobertura total con un estilo sobrio y elegante.',
        images: ['assets/images/fotos reales/Manuel.png', 'assets/images/fotos reales/Manuel2.png', 'assets/images/fotos reales/manuel3.png']
    },
    'doll': {
        title: 'Doll',
        category: 'Prendas',
        description: 'Modelo Doll: sofisticación en cuero. Una prenda versátil diseñada para adaptarse a diferentes siluetas, manteniendo siempre la calidez característica de nuestros productos de exportación.',
        images: ['assets/images/fotos reales/doll.png', 'assets/images/fotos reales/doll2.png']
    },
    'mitones': {
        title: 'Mitones',
        category: 'Mitones',
        description: 'Mitones de exportación hechos de puro cuero lanar. Ideales para mantener las manos calientes permitiendo el uso libre de los dedos, perfectos para el trabajo o paseos en invierno.',
        images: ['assets/images/fotos reales/mitones.png', 'assets/images/fotos reales/mitonesOtra.png']
    },
    'gorro-de-aviador': {
        title: 'Gorro de Aviador',
        category: 'Gorros',
        description: 'Máxima protección contra el viento y el frío. El icónico gorro de aviador con interior de lana suave, materiales seleccionados artesanalmente para una durabilidad superior.',
        images: ['assets/images/fotos reales/aviador.png', 'assets/images/fotos reales/aviador2.png']
    },
    'manuela': {
        title: 'Manuela',
        category: 'Prendas',
        description: 'Elegancia y calidez en una sola prenda. El modelo Manuela destaca por su corte refinado y la suavidad de su lana, ideal para quienes buscan calidad sin compromisos.',
        images: ['assets/images/fotos reales/manuela.png', 'assets/images/fotos reales/manuela2.png']
    },
    'trenca': {
        title: 'Trenca',
        category: 'Prendas',
        description: 'Un clásico renovado. Nuestra trenca de cuero lanar es la pieza perfecta para cualquier invierno, combinando la tradición artesanal de Agrotimes con un estilo atemporal.',
        images: ['assets/images/fotos reales/trenca.png', 'assets/images/fotos reales/trenca2.png', 'assets/images/fotos reales/trenca3.png']
    },
    'jlo-biker': {
        title: 'JLO Biker',
        category: 'Prendas',
        description: 'Estilo audaz con la mejor materia prima. La chaqueta Biker JLO fusiona el diseño urbano con la calidez del cuero lanar, creando una pieza única en su clase.',
        images: ['assets/images/fotos reales/biker.png', 'assets/images/fotos reales/biker2.png']
    },
    'dominico': {
        title: 'Dominico',
        category: 'Prendas',
        description: 'El equilibrio perfecto entre robustez y estilo. El modelo Dominico está diseñado para durar décadas, fabricado con cueros seleccionados bajo estrictos estándares de calidad.',
        images: ['assets/images/fotos reales/dominico2.png', 'assets/images/fotos reales/dominico.png']
    },
    'rufus': {
        title: 'Rufus',
        category: 'Prendas',
        description: 'Modelo Rufus: versatilidad y resistencia. Una prenda pensada para el uso intensivo sin sacrificar la estética de alta gama propia de Agrotimes.',
        images: ['assets/images/fotos reales/rufus.png', 'assets/images/fotos reales/rufus3.png', 'assets/images/fotos reales/rufus2.png']
    },
    'roy': {
        title: 'Roy',
        category: 'Prendas',
        description: 'El abrigo Roy destaca por su estructura impecable y su capacidad aislante, siendo uno de nuestros modelos más solicitados para climas extremos.',
        images: ['assets/images/fotos reales/roy.png', 'assets/images/fotos reales/roy2.png']
    },
    'mara': {
        title: 'Mara',
        category: 'Prendas',
        description: 'Mara es sinónimo de elegancia cotidiana. Un diseño que realza la figura mientras envuelve en la suavidad incomparable de nuestro cuero lanar de exportación.',
        images: ['assets/images/fotos reales/mara.png', 'assets/images/fotos reales/mara2.png']
    },
    'kelly': {
        title: 'Kelly',
        category: 'Prendas',
        description: 'Inspirado en la sofisticación clásica, el modelo Kelly ofrece acabados hechos a mano y una selección de lana curly de alta densidad.',
        images: ['assets/images/fotos reales/kelly.png', 'assets/images/fotos reales/kelly2.png']
    },
    'ines': {
        title: 'Ines',
        category: 'Prendas',
        description: 'La prenda Ines combina ligereza y calidez. Un diseño funcional con el sello de calidad certificado que nos representa en los mercados globales.',
        images: ['assets/images/fotos reales/ines.png', 'assets/images/fotos reales/ines2.png']
    },
    'frida': {
        title: 'Frida',
        category: 'Prendas',
        description: 'Originalidad y confort. El modelo Frida es una pieza de diseño que utiliza cueros con texturas exclusivas desarrolladas en nuestra propia curtiembre.',
        images: ['assets/images/fotos reales/frida.png', 'assets/images/fotos reales/frida2.png']
    },
    'del': {
        title: 'Del',
        category: 'Prendas',
        description: 'Simplicidad refinada. El modelo Del es perfecto para quienes buscan una prenda esencial de cuero lanar con la durabilidad de un producto artesanal.',
        images: ['assets/images/fotos reales/Del.png', 'assets/images/fotos reales/del2.png']
    },
    'b-52': {
        title: 'B-52',
        category: 'Prendas',
        description: 'Inspirada en las chaquetas de vuelo icónicas, la B-52 ofrece una protección superior contra el frío con un estilo robusto y masculino.',
        images: ['assets/images/fotos reales/b52.png', 'assets/images/fotos reales/b52-2.png']
    },
    'at-11': {
        title: 'AT-11',
        category: 'Prendas',
        description: 'Un modelo técnico de alta performance térmica. El AT-11 utiliza los cueros más densos de nuestra producción para asegurar confort en cualquier condición.',
        images: ['assets/images/fotos reales/at11-2.png', 'assets/images/fotos reales/at11.png']
    },
    'anne': {
        title: 'Anne',
        category: 'Prendas',
        description: 'Anne es delicadeza y calidad. Con detalles de costura a la vista y una suavidad extrema al tacto, es la elección ideal para el invierno urbano.',
        images: ['assets/images/fotos reales/anne.png', 'assets/images/fotos reales/anne2.png']
    },
    '3029': {
        title: '3029',
        category: 'Prendas',
        description: 'Modelo 3029: Clásico industrial uruguayo. Una prenda que ha formado parte de nuestra historia de exportación gracias a su calidad inalterable.',
        images: ['assets/images/fotos reales/3029.png', 'assets/images/fotos reales/3029-2.png', 'assets/images/fotos reales/3029-3.png']
    },
    'silvana': {
        title: 'Silvana',
        category: 'Prendas',
        description: 'Estilo contemporáneo con base tradicional. Silvana ofrece un corte moderno en cuero lanar, manteniendo los estándares de calidad de exportación.',
        images: ['assets/images/fotos reales/silvana.png', 'assets/images/fotos reales/silvana2.png']
    },
    'gorro-6p': {
        title: 'Gorro 6P',
        category: 'Gorros',
        description: 'Gorro artesanal de cuero lanar, diseñado para ofrecer protección total con un ajuste cómodo. La lana natural permite una transpiración ideal manteniendo el calor.',
        images: ['assets/images/fotos reales/6p.png', 'assets/images/fotos reales/6p2.png']
    },
    'gorro-rhapsody': {
        title: 'Gorro Rhapsody',
        category: 'Gorros',
        description: 'Un diseño elegante y funcional. El gorro Rhapsody es suave al tacto y extremadamente abrigado, ideal para los inviernos más exigentes.',
        images: ['assets/images/fotos reales/rhapsody.png', 'assets/images/fotos reales/rhapsody2.png']
    },
    // Cueros
    'vintage-antik-salmon-wool': {
        title: 'Vintage Antik Salmon Wool',
        category: 'Cueros',
        description: 'Cuero lanar con acabado vintage y lana en tono salmón. Alta calidad para la industria peletera internacional.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'pecari-san-francisco': {
        title: 'Pecari San Francisco',
        category: 'Cueros',
        description: 'Acabado tipo pecarí de alta resistencia y suavidad. Ideal para calzado y marroquinería de lujo.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'pecari-nugat-tone-tone': {
        title: 'Pecari Nugat Tone Tone',
        category: 'Cueros',
        description: 'Cuero pecarí en tono nugat con acabado tono sobre tono para una estética sofisticada y uniforme.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'pecari-camel-tone-tone': {
        title: 'Pecari Camel Tone Tone',
        category: 'Cueros',
        description: 'Variante en color camel de nuestro cuero pecarí premium, procesado con estándares de exportación.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'pecari-nugat-tone-to-tone': {
        title: 'Pecari Nugat Tone to Tone',
        category: 'Cueros',
        description: 'Nuestra exclusiva selección de pecarí nugat, garantizando flexibilidad y durabilidad superior.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'old-navy-cafe-lana-salmon': {
        title: 'Old Navy Cafe Lana Salmon',
        category: 'Cueros',
        description: 'Combinación clásica de cuero café con lana salmón, un favorito para abrigos de alta gama.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'negro-brisa-bota': {
        title: 'Negro Brisa Bota',
        category: 'Cueros',
        description: 'Cuero diseñado específicamente para calzado, con resistencia al agua y acabado negro profundo.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'napalan-sky-blue-curly-natural-wool': {
        title: 'Napalan Sky Blue Curly Natural Wool',
        category: 'Cueros',
        description: 'Acabado napalán en azul cielo con lana rizada natural. Diseño innovador para moda internacional.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'napalan-old-navy-cafe-salmon-wool': {
        title: 'Napalan Old Navy Cafe Salmon Wool',
        category: 'Cueros',
        description: 'Acabado napalán de alta calidad combinando tonos clásicos con la calidez de la lana natural.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'napalan-jade': {
        title: 'Napalan Jade',
        category: 'Cueros',
        description: 'Tono jade exclusivo en acabado napalán, procesado bajo estrictos controles de calidad.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'napalan-black-tone': {
        title: 'Napalan Black Tone',
        category: 'Cueros',
        description: 'El clásico negro en acabado napalán, ideal para prendas atemporales de alta durabilidad.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'napalan-antik-natural-wool': {
        title: 'Napalan Antik Natural Wool',
        category: 'Cueros',
        description: 'Efecto antiguo sobre napalán con lana natural, perfecto para diseños rústicos y elegantes.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'marron-brisa-bota': {
        title: 'Marrón Brisa Bota',
        category: 'Cueros',
        description: 'Versión marrón de nuestro cuero Brisa para botas, con excelente comportamiento mecánico.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'habano-tone-to-tone': {
        title: 'Habano Tone to Tone',
        category: 'Cueros',
        description: 'Color habano profundo en acabado uniforme, suave al tacto y extremadamente flexible.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'ginseng-tone-to-tone-boots': {
        title: 'Ginseng Tone to Tone Boots',
        category: 'Cueros',
        description: 'Acabado especial en tono ginseng para calzado de alta gama y diseño contemporáneo.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'napalan-antik-havanna-wool': {
        title: 'Napalan Antik Havanna Wool',
        category: 'Cueros',
        description: 'Combinación de acabado antiguo y lana havanna, una de nuestras pieles más exclusivas para exportación.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    },
    'alpino-natural': {
        title: 'Alpino Natural',
        category: 'Cueros',
        description: 'Acabado alpino clásico con lana natural, proporcionando un abrigo y suavidad incomparables.',
        images: ['assets/images/fotosNuevas/product-cueros.jpg', 'assets/images/fotosNuevas/product-cueros.jpg']
    }
};

/**
 * Modal Functionality
 */
function openProductModal(productId) {
    const data = productData[productId];
    if (!data) return;

    const modal = document.getElementById('product-modal');
    const mainImg = modal.querySelector('#modal-main-img');
    const title = modal.querySelector('#modal-title');
    const category = modal.querySelector('#modal-category');
    const description = modal.querySelector('#modal-description');
    const thumbContainer = modal.querySelector('#modal-thumbnails');

    // Populate data
    title.textContent = data.title;
    category.textContent = data.category;
    description.textContent = data.description;
    mainImg.src = data.images[0];

    // Clear and build thumbnails
    thumbContainer.innerHTML = '';
    data.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${imgSrc}" alt="${data.title} view ${index + 1}">`;
        thumb.addEventListener('click', () => {
            mainImg.src = imgSrc;
            thumbContainer.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbContainer.appendChild(thumb);
    });

    // Update contact link with product subject and message
    const contactBtn = modal.querySelector('.modal-actions .btn');
    if (contactBtn) {
        const subject = encodeURIComponent(`Consulta por ${data.title}`);
        const message = encodeURIComponent(`Hola, me gustaría recibir más información y asesoramiento sobre el producto ${data.title}. Muchas gracias.`);
        contactBtn.href = `contacto.html?asunto=${subject}&mensaje=${message}`;
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('active');
        // Restore overflow only if mobile nav is also closed
        const mobileNav = document.getElementById('mobile-nav');
        if (!mobileNav || !mobileNav.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }
}

/**
 * Hover Effect Automation
 * Dynamically injects a second image for hover effect based on productData
 */
function initHoverEffect() {
    document.querySelectorAll('.product-item').forEach(item => {
        const titleEl = item.querySelector('h3');
        if (!titleEl) return;

        const productId = titleEl.textContent.toLowerCase().replace(/\s+/g, '-');
        const data = productData[productId];

        // Check if we have at least 2 images and if the second one is different from the first
        if (data && data.images && data.images.length >= 2) {
            const imgContainer = item.querySelector('.product-image');
            if (imgContainer) {
                // Ensure the current image has a class for control
                const originalImg = imgContainer.querySelector('img');
                if (originalImg) originalImg.classList.add('primary-image');

                // Create the hover image
                const hoverImg = document.createElement('img');
                hoverImg.src = data.images[1]; // Use the second image of the list
                hoverImg.alt = data.title + ' view 2';
                hoverImg.className = 'hover-image';

                // Append to container
                imgContainer.appendChild(hoverImg);
            }
        }
    });
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Hover Effects
    initHoverEffect();

    // Setup Mobile Menu links
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileNav = document.getElementById('mobile-nav');
            const menuBtn = document.getElementById('menu-toggle');
            if (mobileNav) mobileNav.classList.remove('active');
            if (menuBtn) menuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Handle clicks outside modal to close it
    const modalOverlay = document.getElementById('product-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeProductModal();
        });
    }

    // Attach modal events to dynamically identified products
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't open modal if clicking the like button
            if (e.target.closest('.like-btn')) return;

            const titleEl = item.querySelector('h3');
            if (titleEl) {
                const productId = titleEl.textContent.toLowerCase().replace(/\s+/g, '-');
                openProductModal(productId);
            }
        });
    });

    // initialize tone buttons on cueros page if present
    initToneButtons();
});

/**
 * Adds the row of coloured dots and links them to the main gallery image.
 * Also hooks the overlay zones so both interactions behave the same way.
 */
function initToneButtons() {
    return; // temporarily disabled per user request
    const galleryWrapper = document.querySelector('.cueros-gallery .gallery-image-wrapper');
    if (!galleryWrapper) return;
    const mainImg = galleryWrapper.querySelector('img');
    const defaultSrc = mainImg ? mainImg.src : '';
    const currentToneEl = document.getElementById('current-tone');

    // hover behaviour for the static buttons
    document.querySelectorAll('.cueros-gallery .tone-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const img = btn.getAttribute('data-image');
            const name = btn.getAttribute('data-name');
            if (mainImg && img) mainImg.src = img;
            if (currentToneEl) currentToneEl.textContent = name;
            btn.classList.add('active');
        });
        btn.addEventListener('mouseleave', () => {
            if (mainImg && defaultSrc) mainImg.src = defaultSrc;
            if (currentToneEl) currentToneEl.textContent = '';
            btn.classList.remove('active');
        });
    });

    // mirror the same behaviour for the transparent overlay zones
    document.querySelectorAll('.cueros-gallery .tone').forEach(tone => {
        tone.addEventListener('mouseenter', () => {
            const img = tone.getAttribute('data-image');
            const name = tone.getAttribute('data-name');
            if (mainImg && img) mainImg.src = img;
            if (currentToneEl) currentToneEl.textContent = name;
        });
        tone.addEventListener('mouseleave', () => {
            if (mainImg && defaultSrc) mainImg.src = defaultSrc;
            if (currentToneEl) currentToneEl.textContent = '';
        });
    });
}


