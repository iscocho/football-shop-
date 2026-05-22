const products = [
    {
        name: 'Spain Home Jersey',
        featured: true,
        priceRange: '$58 - $68',
        images: ['../Jersey/SPAIN HOME .jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Spain%20Home%20Jersey'
    },
    {
        name: 'Netherlands Home Jersey',
        priceRange: '$50 - $70',
        images: ['../Jersey/NetherlandsHOME.jpeg','../Jersey/Netherlands AWAY.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Netherlands%20Home%20Jersey'
    },
    {
        name: 'Brazil Home Jersey',
        priceRange: '$55 - $65',
        images: ['../Jersey/BRAZIL KIT.jpeg','../Jersey/Home.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Brazil%20Home%20Jersey'
    },
    {
        name: 'France Home Jersey',
        priceRange: '$60 - $70',
        images: ['../Jersey/FRANCE HOME .jpeg','../Jersey/FRANCE AWAY.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20France%20Home%20Jersey'
    },
    {
        name: 'USA Home Jersey',
        priceRange: '$52 - $62',
        images: ['../Jersey/USA HOME .jpeg','../Jersey/USA AWAY .jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20USA%20Home%20Jersey'
    },
    {
        name: 'Mexico Home Jersey',
        priceRange: '$54 - $64',
        images: ['../Jersey/MEXICO HOME .jpeg','../Jersey/MEXICO AWAY.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Mexico%20Home%20Jersey'
    },
    {
        name: 'Morocco Home Jersey',
        priceRange: '$55 - $65',
        images: ['../Jersey/Morocco .jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Morocco%20Home%20Jersey'
    }
];

const productList = document.getElementById('productList');
const phoneNumber = '19363666566';

function createImageOrFallback(src, name) {
    return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve({type: 'img', node: img});
        img.onerror = () => {
            const placeholder = document.createElement('div');
            placeholder.className = 'product-placeholder';
            const initials = name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
            placeholder.innerHTML = `<div class="ph-initials">${initials}</div><div class="ph-name">${name}</div>`;
            resolve({type: 'placeholder', node: placeholder});
        };
    });
}

async function buildProductCards() {
    // ensure featured products appear first
    const sorted = [...products].sort((a,b)=> (b.featured?1:0) - (a.featured?1:0));
    for (const product of sorted) {
        const card = document.createElement('div');
        card.className = 'product-item';
        if (product.featured) card.classList.add('featured');

        const imgWrap = document.createElement('div');
        imgWrap.className = 'image-wrap';

        const imgs = product.images || [];
        // load main image
        const mainSrc = imgs[0];
        const mainResult = mainSrc ? await createImageOrFallback(mainSrc, product.name) : null;
        let mainEl;
        if (mainResult && mainResult.type === 'img') {
            mainEl = mainResult.node;
            mainEl.alt = product.name;
            mainEl.className = 'product-img';
            
            // Add click to swap functionality
            if (imgs.length > 1) {
                mainEl.style.cursor = 'pointer';
                mainEl.title = 'Click to swap images';
                mainEl.addEventListener('click', function() {
                    const thumbs = imgWrap.querySelectorAll('.product-thumb');
                    if (thumbs.length > 0) {
                        const thumb = thumbs[0];
                        const tmp = mainEl.src;
                        mainEl.src = thumb.src;
                        thumb.src = tmp;
                        mainEl.classList.add('swap-animation');
                        setTimeout(() => mainEl.classList.remove('swap-animation'), 500);
                    }
                });
            }
            
            imgWrap.appendChild(mainEl);
        } else if (mainResult) {
            imgWrap.appendChild(mainResult.node);
        }

        // load second image as thumbnail if provided
        if (imgs[1]) {
            const thumbResult = await createImageOrFallback(imgs[1], product.name + ' (alt)');
            if (thumbResult.type === 'img') {
                const thumb = thumbResult.node;
                thumb.className = 'product-thumb';
                thumb.alt = product.name + ' alternate';
                thumb.addEventListener('click', () => {
                    if (mainEl && thumb.src) {
                        const tmp = mainEl.src;
                        mainEl.src = thumb.src;
                        thumb.src = tmp;
                        mainEl.classList.add('swap-animation');
                        setTimeout(() => mainEl.classList.remove('swap-animation'), 500);
                    }
                });
                const thumbsWrap = document.createElement('div');
                thumbsWrap.className = 'thumbs';
                thumbsWrap.appendChild(thumb);
                imgWrap.appendChild(thumbsWrap);
            } else {
                imgWrap.appendChild(thumbResult.node);
            }
        }

        // add featured ribbon
        if (product.featured) {
            const ribbon = document.createElement('div');
            ribbon.className = 'ribbon';
            ribbon.textContent = 'FEATURED';
            card.appendChild(ribbon);
        }

        const title = document.createElement('h3');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `Price range: ${product.priceRange}`;

        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Order on WhatsApp';
        button.addEventListener('click', () => {
            const url = `https://wa.me/${phoneNumber}?text=${product.whatsappText}`;
            window.open(url, '_blank');
        });

        card.appendChild(imgWrap);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);

        productList.appendChild(card);
    }
}

function initTicketSection() {
    const ticketCheckbox = document.getElementById('ticketCheckbox');
    const ticketButton = document.getElementById('ticketButton');
    const ticketMessage = document.getElementById('ticketMessage');
    const advancedTicketForm = document.getElementById('advancedTicketForm');
    const ticketMatch = document.getElementById('ticketMatch');
    const ticketQuantity = document.getElementById('ticketQuantity');
    const ticketTier = document.getElementById('ticketTier');

    if (!ticketCheckbox || !ticketButton || !ticketMessage || !advancedTicketForm) return;

    ticketCheckbox.addEventListener('change', () => {
        if (ticketCheckbox.checked) {
            advancedTicketForm.style.display = 'block';
            ticketMessage.textContent = 'Select your preferences and check availability.';
            updateButtonState();
        } else {
            advancedTicketForm.style.display = 'none';
            ticketButton.disabled = true;
            ticketMessage.textContent = 'Select the checkbox to enable ticket availability.';
        }
    });

    function updateButtonState() {
        if (ticketCheckbox.checked && ticketMatch.value && ticketTier.value) {
            ticketButton.disabled = false;
        } else {
            ticketButton.disabled = true;
        }
    }

    if (ticketMatch) {
        ticketMatch.addEventListener('change', updateButtonState);
    }
    if (ticketTier) {
        ticketTier.addEventListener('change', updateButtonState);
    }

    ticketButton.addEventListener('click', () => {
        if (!ticketCheckbox.checked || !ticketMatch.value || !ticketTier.value) return;
        
        const match = ticketMatch.value;
        const quantity = ticketQuantity.value || '1';
        const tier = ticketTier.value;
        
        const message = `Hello%20Football%20Shop%2C%20I%20want%20to%20check%20World%20Cup%20tickets%20for%20${match}%20match%2C%20${quantity}%20tickets%20in%20${tier}%20tier`;
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    });
}

buildProductCards();
initTicketSection();
