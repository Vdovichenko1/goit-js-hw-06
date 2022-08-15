const itemsNumberEl = document.querySelectorAll('.item');

console.log('Number of categories:', itemsNumberEl.length)

for(const element of itemsNumberEl) {
    const title = element.querySelector('h2').textContent;
    const itemsLength = element.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    
    console.log(`Elements: ${itemsLength}`)
};

