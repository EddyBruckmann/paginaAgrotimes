const fs = require('fs');

const content = fs.readFileSync('productos.html', 'utf-8');

const parts = content.split('<div class="product-item"');
const newParts = [parts[0]];

for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const match = part.match(/<h3[^>]*>([^<]+)<\/h3>/);
    if (match) {
        const title = match[1].trim();
        const productId = title.toLowerCase().replace(/\s+/g, '-');
        newParts.push(` data-product-id="${productId}"` + part);
    } else {
        newParts.push(part);
    }
}

const newContent = newParts.join('<div class="product-item"');
fs.writeFileSync('productos.html', newContent, 'utf-8');
console.log('Done modifying HTML!');
