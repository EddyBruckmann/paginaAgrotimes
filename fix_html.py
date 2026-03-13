import re

with open("productos.html", "r", encoding="utf-8") as f:
    content = f.read()

# We need to find each <div class="product-item" data-category="X">
# and the corresponding <h3>Title</h3> inside it.

parts = content.split('<div class="product-item"')
new_parts = [parts[0]]

for part in parts[1:]:
    # Find h3 content to determine ID
    match = re.search(r'<h3[^>]*>([^<]+)</h3>', part)
    if match:
        title = match.group(1).strip()
        # id formatting from main.js: titleEl.textContent.toLowerCase().replace(/\s+/g, '-')
        product_id = re.sub(r'\s+', '-', title.lower())
        new_part = f' data-product-id="{product_id}"' + part
        new_parts.append(new_part)
    else:
        new_parts.append(part)

new_content = '<div class="product-item"'.join(new_parts)

with open("productos.html", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Added data-product-id to HTML")
