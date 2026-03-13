const fs = require('fs');

let mainJs = fs.readFileSync('js/main.js', 'utf8');

const translations = {
    'cockpit': {
        title_en: 'Cockpit',
        category_en: 'Garments',
        description_en: 'Sheepskin leather jacket with high-quality wool. A classic aviation-inspired design combining mechanical durability with exceptional thermal comfort for cold climates.'
    },
    'manuel': {
        title_en: 'Manuel',
        category_en: 'Garments',
        description_en: 'Premium sheepskin coat. Crafted with the finest raw material selection techniques, this model offers complete coverage with a sober and elegant style.'
    },
    'doll': {
        title_en: 'Doll',
        category_en: 'Garments',
        description_en: 'Doll model: sophistication in leather. A versatile garment designed to adapt to different silhouettes while always maintaining the characteristic warmth of our export products.'
    },
    'mitones': {
        title_en: 'Mittens',
        category_en: 'Mittens',
        description_en: 'Export mittens made of pure sheepskin leather. Ideal for keeping hands warm while allowing free use of fingers, perfect for winter work or walks.'
    },
    'gorro-de-aviador': {
        title_en: 'Aviator Hat',
        category_en: 'Hats',
        description_en: 'Maximum protection against wind and cold. The iconic aviator hat with a soft wool interior, craftsman-selected materials for superior durability.'
    },
    'manuela': {
        title_en: 'Manuela',
        category_en: 'Garments',
        description_en: 'Elegance and warmth in a single garment. The Manuela model stands out for its refined cut and the softness of its wool, ideal for those seeking uncompromising quality.'
    },
    'trenca': {
        title_en: 'Trenca',
        category_en: 'Garments',
        description_en: 'A renewed classic. Our sheepskin duffle coat is the perfect piece for any winter, combining Agrotimes\' traditional craftsmanship with timeless style.'
    },
    'jlo-biker': {
        title_en: 'JLO Biker',
        category_en: 'Garments',
        description_en: 'Bold style with the best raw materials. The JLO Biker jacket merges urban design with the warmth of sheepskin leather, creating a one-of-a-kind piece.'
    },
    'dominico': {
        title_en: 'Dominico',
        category_en: 'Garments',
        description_en: 'The perfect balance between robustness and style. The Dominico model is designed to last for decades, made with strictly quality-controlled selected leathers.'
    },
    'rufus': {
        title_en: 'Rufus',
        category_en: 'Garments',
        description_en: 'Rufus model: versatility and resistance. A garment designed for intensive use without sacrificing the high-end aesthetics typical of Agrotimes.'
    },
    'roy': {
        title_en: 'Roy',
        category_en: 'Garments',
        description_en: 'The Roy coat stands out for its impeccable structure and insulating capacity, making it one of our most requested models for extreme climates.'
    },
    'mara': {
        title_en: 'Mara',
        category_en: 'Garments',
        description_en: 'Mara is synonymous with everyday elegance. A design that enhances the silhouette while wrapping you in the incomparable softness of our export sheepskin.'
    },
    'kelly': {
        title_en: 'Kelly',
        category_en: 'Garments',
        description_en: 'Inspired by classic sophistication, the Kelly model features hand-finished details and a selection of high-density curly wool.'
    },
    'ines': {
        title_en: 'Ines',
        category_en: 'Garments',
        description_en: 'The Ines garment combines lightness and warmth. A functional design with the certified quality seal that represents us in global markets.'
    },
    'frida': {
        title_en: 'Frida',
        category_en: 'Garments',
        description_en: 'Originality and comfort. The Frida model is a design piece that uses leathers with exclusive textures developed in our own tannery.'
    },
    'del': {
        title_en: 'Del',
        category_en: 'Garments',
        description_en: 'Refined simplicity. The Del model is perfect for those looking for an essential sheepskin garment with the durability of an artisanal product.'
    },
    'b-52': {
        title_en: 'B-52',
        category_en: 'Garments',
        description_en: 'Inspired by iconic flight jackets, the B-52 offers superior protection against the cold with a rugged, masculine style.'
    },
    'at-11': {
        title_en: 'AT-11',
        category_en: 'Garments',
        description_en: 'A high thermal performance technical model. The AT-11 uses the densest leathers from our production to ensure comfort in any condition.'
    },
    'anne': {
        title_en: 'Anne',
        category_en: 'Garments',
        description_en: 'Anne is delicacy and quality. With visible stitching details and extreme softness to the touch, it is the ideal choice for an urban winter.'
    },
    '3029': {
        title_en: '3029',
        category_en: 'Garments',
        description_en: 'Model 3029: Uruguayan industrial classic. A garment that has been part of our export history thanks to its unalterable quality.'
    },
    'silvana': {
        title_en: 'Silvana',
        category_en: 'Garments',
        description_en: 'Contemporary style with a traditional base. Silvana offers a modern cut in sheepskin leather, maintaining export quality standards.'
    },
    'gorro-6p': {
        title_en: '6P Hat',
        category_en: 'Hats',
        description_en: 'Handcrafted sheepskin hat, designed to offer total protection with a comfortable fit. The natural wool allows ideal breathability while retaining heat.'
    },
    'gorro-rhapsody': {
        title_en: 'Rhapsody Hat',
        category_en: 'Hats',
        description_en: 'An elegant and functional design. The Rhapsody hat is soft to the touch and extremely warm, ideal for the most demanding winters.'
    },
    'vintage-antik-salmon-wool': {
        title_en: 'Vintage Antik Salmon Wool',
        category_en: 'Leathers',
        description_en: 'Sheepskin leather with a vintage finish and salmon-toned wool. High quality for the international fur industry.'
    },
    'pecari-san-francisco': {
        title_en: 'Pecari San Francisco',
        category_en: 'Leathers',
        description_en: 'High-resistance and soft peccary-type finish. Ideal for luxury footwear and leather goods.'
    },
    'pecari-nugat-tone-tone': {
        title_en: 'Pecari Nugat Tone Tone',
        category_en: 'Leathers',
        description_en: 'Peccary leather in nougat tone with a tone-on-tone finish for a sophisticated and uniform aesthetic.'
    },
    'pecari-camel-tone-tone': {
        title_en: 'Pecari Camel Tone Tone',
        category_en: 'Leathers',
        description_en: 'Camel color variant of our premium peccary leather, processed to export standards.'
    },
    'pecari-nugat-tone-to-tone': {
        title_en: 'Pecari Nugat Tone to Tone',
        category_en: 'Leathers',
        description_en: 'Our exclusive selection of nougat peccary, ensuring superior flexibility and durability.'
    },
    'old-navy-cafe-lana-salmon': {
        title_en: 'Old Navy Cafe Salmon Wool',
        category_en: 'Leathers',
        description_en: 'Classic combination of brown leather with salmon wool, a favorite for high-end coats.'
    },
    'negro-brisa-bota': {
        title_en: 'Negro Brisa Boots',
        category_en: 'Leathers',
        description_en: 'Leather specifically designed for footwear, with water resistance and a deep black finish.'
    },
    'napalan-sky-blue-curly-natural-wool': {
        title_en: 'Napalan Sky Blue Curly Natural Wool',
        category_en: 'Leathers',
        description_en: 'Napalan finish in sky blue with natural curly wool. Innovative design for international fashion.'
    },
    'napalan-old-navy-cafe-salmon-wool': {
        title_en: 'Napalan Old Navy Cafe Salmon Wool',
        category_en: 'Leathers',
        description_en: 'High-quality napalan finish combining classic tones with the warmth of natural wool.'
    },
    'napalan-jade': {
        title_en: 'Napalan Jade',
        category_en: 'Leathers',
        description_en: 'Exclusive jade tone in napalan finish, processed under strict quality controls.'
    },
    'napalan-black-tone': {
        title_en: 'Napalan Black Tone',
        category_en: 'Leathers',
        description_en: 'The classic black in a napalan finish, ideal for highly durable timeless garments.'
    },
    'napalan-antik-natural-wool': {
        title_en: 'Napalan Antik Natural Wool',
        category_en: 'Leathers',
        description_en: 'Antique effect on napalan with natural wool, perfect for rustic and elegant designs.'
    },
    'marron-brisa-bota': {
        title_en: 'Brown Brisa Boots',
        category_en: 'Leathers',
        description_en: 'Brown version of our Brisa leather for boots, with excellent mechanical performance.'
    },
    'habano-tone-to-tone': {
        title_en: 'Habano Tone to Tone',
        category_en: 'Leathers',
        description_en: 'Deep habano color in a uniform finish, soft to the touch and extremely flexible.'
    },
    'ginseng-tone-to-tone-boots': {
        title_en: 'Ginseng Tone to Tone Boots',
        category_en: 'Leathers',
        description_en: 'Special ginseng tone finish for high-end footwear and contemporary design.'
    },
    'napalan-antik-havanna-wool': {
        title_en: 'Napalan Antik Havanna Wool',
        category_en: 'Leathers',
        description_en: 'Combination of antique finish and havanna wool, one of our most exclusive skins for export.'
    },
    'alpino-natural': {
        title_en: 'Alpino Natural',
        category_en: 'Leathers',
        description_en: 'Classic alpine finish with natural wool, providing incomparable warmth and softness.'
    }
};

for (const [key, t] of Object.entries(translations)) {
    const regex = new RegExp(`('${key}'|"${key}"):\\s*\\{[^}]*description:\\s*('[^']+'|"[^"]+"),\\s*images:`, 'g');
    mainJs = mainJs.replace(regex, (match) => {
        return match.replace(/description:\s*('[^']+'|"[^"]+"),/, `description: $1,\n        title_en: ${JSON.stringify(t.title_en)},\n        category_en: ${JSON.stringify(t.category_en)},\n        description_en: ${JSON.stringify(t.description_en)},`);
    });
}

// Transform openProductModal
mainJs = mainJs.replace(
    /title\.textContent = data\.title;[\s\n]+category\.textContent = data\.category;[\s\n]+description\.textContent = data\.description;/,
    `// Detect language
    const currentLang = localStorage.getItem('agrotimes_lang') || 'es';
    const isEn = currentLang === 'en';

    // Populate data
    title.textContent = isEn && data.title_en ? data.title_en : data.title;
    category.textContent = isEn && data.category_en ? data.category_en : data.category;
    description.textContent = isEn && data.description_en ? data.description_en : data.description;`
);

// Transform contactBtn logic
mainJs = mainJs.replace(
    /const subject = encodeURIComponent\(`Consulta por \${data\.title}`\);[\s\n]+const message = encodeURIComponent\(`Hola, me gustaría recibir más información y asesoramiento sobre el producto \${data\.title}\. Muchas gracias\.`\);/,
    `const productTitle = isEn && data.title_en ? data.title_en : data.title;
        const subject = isEn 
            ? encodeURIComponent(\`Inquiry about \${productTitle}\`)
            : encodeURIComponent(\`Consulta por \${productTitle}\`);
            
        const message = isEn
            ? encodeURIComponent(\`Hello, I would like to receive more information and advice about the product \${productTitle}. Thank you very much.\`)
            : encodeURIComponent(\`Hola, me gustaría recibir más información y asesoramiento sobre el producto \${productTitle}. Muchas gracias.\`);`
);

// Transform initHoverEffect logic
mainJs = mainJs.replace(
    /const productId = titleEl\.textContent\.toLowerCase\(\)\.replace\(\/\\s\+\/g, '-'\);/,
    `const productId = item.getAttribute('data-product-id');`
);

// Transform Event Listener click logic
mainJs = mainJs.replace(
    /const titleEl = item\.querySelector\('h3'\);\s*if \(titleEl\) \{\s*const productId = titleEl\.textContent\.toLowerCase\(\)\.replace\(\/\\s\+\/g, '-'\);\s*openProductModal\(productId\);\s*\}/,
    `const productId = item.getAttribute('data-product-id');
            if (productId) {
                openProductModal(productId);
            }`
);

fs.writeFileSync('js/main.js', mainJs, 'utf8');
console.log('Successfully completed all main.js transformations');
