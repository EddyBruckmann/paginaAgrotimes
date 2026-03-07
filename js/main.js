
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
        images: ['assets/images/fotos reales/cokpit.png', 'assets/images/fotos reales/cokpit.png', 'assets/images/fotos reales/cokpit.png', 'assets/images/fotos reales/cokpit.png']
    },
    'manuel': {
        title: 'Manuel',
        category: 'Prendas',
        description: 'Abrigo de cuero lanar premium. Confeccionado con las técnicas más finas de selección de materia prima, este modelo ofrece una cobertura total con un estilo sobrio y elegante.',
        images: ['assets/images/fotos reales/Manuel.png', 'assets/images/fotos reales/Manuel.png', 'assets/images/fotos reales/Manuel.png', 'assets/images/fotos reales/Manuel.png']
    },
    'doll': {
        title: 'Doll',
        category: 'Prendas',
        description: 'Modelo Doll: sofisticación en cuero. Una prenda versátil diseñada para adaptarse a diferentes siluetas, manteniendo siempre la calidez característica de nuestros productos de exportación.',
        images: ['assets/images/fotos reales/doll.png', 'assets/images/fotos reales/doll.png', 'assets/images/fotos reales/doll.png', 'assets/images/fotos reales/doll.png']
    },
    'mitones': {
        title: 'Mitones',
        category: 'Mitones',
        description: 'Mitones de exportación hechos de puro cuero lanar. Ideales para mantener las manos calientes permitiendo el uso libre de los dedos, perfectos para el trabajo o paseos en invierno.',
        images: ['assets/images/fotos reales/mitones.png', 'assets/images/fotos reales/mitones.png', 'assets/images/fotos reales/mitones.png', 'assets/images/fotos reales/mitones.png']
    },
    'gorro-de-aviador': {
        title: 'Gorro de Aviador',
        category: 'Gorros',
        description: 'Máxima protección contra el viento y el frío. El icónico gorro de aviador con interior de lana suave, materiales seleccionados artesanalmente para una durabilidad superior.',
        images: ['assets/images/fotos reales/aviador.png', 'assets/images/fotos reales/aviador.png', 'assets/images/fotos reales/aviador.png', 'assets/images/fotos reales/aviador.png']
    },
    'manuela': {
        title: 'Manuela',
        category: 'Prendas',
        description: 'Elegancia y calidez en una sola prenda. El modelo Manuela destaca por su corte refinado y la suavidad de su lana, ideal para quienes buscan calidad sin compromisos.',
        images: ['assets/images/fotos reales/manuela.png', 'assets/images/fotos reales/manuela.png', 'assets/images/fotos reales/manuela.png', 'assets/images/fotos reales/manuela.png']
    },
    'trenca': {
        title: 'Trenca',
        category: 'Prendas',
        description: 'Un clásico renovado. Nuestra trenca de cuero lanar es la pieza perfecta para cualquier invierno, combinando la tradición artesanal de Agrotimes con un estilo atemporal.',
        images: ['assets/images/fotos reales/trenca.png', 'assets/images/fotos reales/trenca.png', 'assets/images/fotos reales/trenca.png', 'assets/images/fotos reales/trenca.png']
    },
    'jlo-biker': {
        title: 'JLO Biker',
        category: 'Prendas',
        description: 'Estilo audaz con la mejor materia prima. La chaqueta Biker JLO fusiona el diseño urbano con la calidez del cuero lanar, creando una pieza única en su clase.',
        images: ['assets/images/fotosNuevas/product-prendas.jpg', 'assets/images/fotosNuevas/product-prendas.jpg', 'assets/images/fotosNuevas/product-prendas.jpg', 'assets/images/fotosNuevas/product-prendas.jpg']
    },
    'dominico': {
        title: 'Dominico',
        category: 'Prendas',
        description: 'El equilibrio perfecto entre robustez y estilo. El modelo Dominico está diseñado para durar décadas, fabricado con cueros seleccionados bajo estrictos estándares de calidad.',
        images: ['assets/images/fotos reales/dominico.png', 'assets/images/fotos reales/dominico.png', 'assets/images/fotos reales/dominico.png', 'assets/images/fotos reales/dominico.png']
    }
    // Add other products here as needed
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

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
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
});
