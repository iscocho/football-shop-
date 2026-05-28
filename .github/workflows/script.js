const products = [
    {
        name: 'Spain Home Jersey',
        featured: true,
        priceRange: '$58 - $68',
        images: ['Jersey/SPAIN HOME .jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Spain%20Home%20Jersey'
    },
    {
        name: 'Netherlands Home Jersey',
        priceRange: '$50 - $70',
        images: ['Jersey/NetherlandsHOME.jpeg','Jersey/Netherlands AWAY.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Netherlands%20Home%20Jersey'
    },
    {
        name: 'Brazil Home Jersey',
        priceRange: '$55 - $65',
        images: ['Jersey/BRAZIL KIT.jpeg','Jersey/Home.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Brazil%20Home%20Jersey'
    },
    {
        name: 'France Home Jersey',
        priceRange: '$60 - $70',
        images: ['Jersey/FRANCE HOME .jpeg','Jersey/FRANCE AWAY.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20France%20Home%20Jersey'
    },
    {
        name: 'USA Home Jersey',
        priceRange: '$52 - $62',
        images: ['Jersey/USA HOME .jpeg','Jersey/USA AWAY .jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20USA%20Home%20Jersey'
    },
    {
        name: 'Mexico Home Jersey',
        priceRange: '$54 - $64',
        images: ['Jersey/MEXICO HOME .jpeg','Jersey/MEXICO AWAY.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Mexico%20Home%20Jersey'
    },
    {
        name: 'Morocco Home Jersey',
        priceRange: '$55 - $65',
        images: ['Jersey/Morocco .jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Morocco%20Home%20Jersey'
    },
    {
        name:'Croatia HOME KIT',
        priceRange:  '$57 - $70',
        images: ['Jersey/Croatia HOME KIT.jpeg', 'Jersey/Croatia AWAY KIT.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Croatia%20Home%20Jersey'
    },
    {
        name: 'NORWAY HOME KIT',
        priceRange: '$57 - $70',
        images: ['Jersey/NORWAY HOME KIT.jpeg', 'Jersey/NORWAY AWAY KIT.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Norway%20Home%20Jersey'
    },
    {
        name: 'German Hoodie',
        priceRange: '$45 - $60',
        images: ['Accessories/GERMAN%20HOODIE.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20German%20Hoodie'
    },
    {
        name: 'Jack 2 Jacket',
        priceRange: '$40 - $55',
        images: ['Accessories/JACK%202.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Jack%202%20Jacket'
    },
    {
        name: 'Nike W Jacket',
        priceRange: '$40 - $55',
        images: ['Accessories/JACK%20NIKE%20W.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Nike%20W%20Jacket'
    },
    {
        name: 'Messi Key Holder',
        priceRange: '$8 - $15',
        images: ['Accessories/MESSI%20KEY%20HOLDER.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Messi%20Key%20Holder'
    },
    {
        name: 'Safety Bag',
        priceRange: '$18 - $30',
        images: ['Accessories/SAFETY%20BAG%20.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Safety%20Bag'
    },
    {
        name: 'Spain Hoodie',
        priceRange: '$45 - $60',
        images: ['Accessories/SPAIN%20HOODIE.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Spain%20Hoodie'
    },
    {
        name: 'Varity Ball',
        priceRange: '$20 - $35',
        images: ['Accessories/VARITY%20BALL%20.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20Varity%20Ball'
    },
    {
        name: 'World Cup Ball',
        priceRange: '$25 - $40',
        images: ['Accessories/WORLD%20CUP%20BALL.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20World%20Cup%20Ball'
    },
    {
        name: 'World Cup Ball Holder',
        priceRange: '$12 - $22',
        images: ['Accessories/WORLD%20CUP%20BALLHOLDER.jpeg'],
        whatsappText: 'I%20want%20to%20order%20the%20World%20Cup%20Ball%20Holder'
    },
];

const productList = document.getElementById('productList');
const phoneNumber = '19363666566';

function initWorldCupCountdown() {
    const worldCupDate = new Date('2026-06-11T17:00:00Z');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const labelEl = document.querySelector('.countdown-label');

    function updateCountdown() {
        const now = new Date();
        const diff = worldCupDate - now;
        if (diff <= 0) {
            if (labelEl) labelEl.textContent = 'The World Cup has begun!';
            [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => {
                if (el) el.textContent = '00';
            });
            return;
        }
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function initFootballNews() {
    const newsList = [
        {
            type: 'goal',
            label: 'GOAL',
            text: "23' | BRAZIL 1-0 ARGENTINA — Neymar lashes in a blistering strike from the edge of the box.",
            homeScore: 1,
            awayScore: 0,
            time: '23:12',
            status: '1st Half'
        },
        {
            type: 'player',
            label: 'PLAYER ALERT',
            text: "35' | Messi is finding space and is about to take the free-kick for Argentina.",
            homeScore: 1,
            awayScore: 0,
            time: '35:40',
            status: '1st Half'
        },
        {
            type: 'yellow',
            label: 'CARD',
            text: "42' | Yellow for Sánchez after stopping a dangerous break in midfield.",
            homeScore: 1,
            awayScore: 0,
            time: '42:05',
            status: '1st Half'
        },
        {
            type: 'sub',
            label: 'SUBSTITUTION',
            text: "60' | Haaland comes on to bolster the attack for Norway in a key tactical change.",
            homeScore: 1,
            awayScore: 0,
            time: '60:10',
            status: '2nd Half'
        },
        {
            type: 'final',
            label: 'FULL-TIME',
            text: "90+4' | Final whistle: a 3-2 thriller, and the crowd erupts after a dramatic finish.",
            homeScore: 3,
            awayScore: 2,
            time: '90:45',
            status: 'Full Time'
        }
    ];

    const newsTicker = document.getElementById('newsTicker');
    const newsNotification = document.getElementById('newsNotification');
    const newsRefreshBtn = document.getElementById('newsRefreshBtn');
    const newsBulletList = document.getElementById('newsBulletList');
    const scoreHome = document.getElementById('scoreHome');
    const scoreAway = document.getElementById('scoreAway');
    const scoreTime = document.getElementById('scoreTime');
    const scoreStatus = document.getElementById('scoreStatus');
    let newsIndex = 0;
    const bulletHistory = [];

    function updateBulletBoard(item) {
        if (!newsBulletList) return;
        bulletHistory.unshift(item.text);
        if (bulletHistory.length > 4) {
            bulletHistory.pop();
        }
        newsBulletList.innerHTML = bulletHistory.map(text => `<li>${text}</li>`).join('');
    }

    function updateScoreboard(item) {
        if (scoreHome) scoreHome.textContent = item.homeScore;
        if (scoreAway) scoreAway.textContent = item.awayScore;
        if (scoreTime) scoreTime.textContent = item.time;
        if (scoreStatus) scoreStatus.textContent = item.status;
    }

    function showNews(item) {
        if (newsTicker) {
            newsTicker.textContent = `${item.label}: ${item.text}`;
        }

        updateScoreboard(item);
        updateBulletBoard(item);

        const marquee = document.querySelector('.news-marquee');
        if (marquee) {
            marquee.classList.remove('animate');
            void marquee.offsetWidth;
            marquee.classList.add('animate');
        }

        if (!newsNotification) return;
        const toast = document.createElement('div');
        toast.className = `news-toast ${item.type}`;
        toast.innerHTML = `<strong>${item.label}</strong><p>${item.text}</p>`;
        newsNotification.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
        }, 3400);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.parentElement.removeChild(toast);
            }
        }, 4200);
    }

    function nextNews() {
        newsIndex = (newsIndex + 1) % newsList.length;
        showNews(newsList[newsIndex]);
    }

    if (newsTicker) showNews(newsList[0]);
    if (newsRefreshBtn) {
        newsRefreshBtn.addEventListener('click', nextNews);
    }

    setInterval(nextNews, 8500);
}

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

function getFilteredProducts(filter = 'all') {
    const sorted = [...products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    if (filter === 'featured') {
        return sorted.filter(product => product.featured);
    }
    return sorted;
}

function updateProductCount(count) {
    const productCount = document.getElementById('productCount');
    if (productCount) {
        productCount.textContent = `${count} product${count === 1 ? '' : 's'} available`;
    }
}

async function renderProductCards(filter = 'all') {
    if (!productList) return;
    productList.innerHTML = '';
    const filteredProducts = getFilteredProducts(filter);
    updateProductCount(filteredProducts.length);

    for (const product of filteredProducts) {
        const card = document.createElement('div');
        card.className = 'product-item';
        if (product.featured) card.classList.add('featured');

        const imgWrap = document.createElement('div');
        imgWrap.className = 'image-wrap';

        const imgs = product.images || [];
        const mainSrc = imgs[0];
        const mainResult = mainSrc ? await createImageOrFallback(mainSrc, product.name) : null;
        let mainEl;
        if (mainResult && mainResult.type === 'img') {
            mainEl = mainResult.node;
            mainEl.alt = product.name;
            mainEl.className = 'product-img';

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
                        setTimeout(() => mainEl.classList.remove('swap-animation'), 800);
                    }
                });
            }

            imgWrap.appendChild(mainEl);
        } else if (mainResult) {
            imgWrap.appendChild(mainResult.node);
        }

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

async function buildProductCards() {
    await renderProductCards();
    initProductFilters();
}

function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', async () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter || 'all';
            await renderProductCards(filter);
        });
    });
}

function initTicketSection() {
    const ticketCheckbox = document.getElementById('ticketCheckbox');
    const ticketButton = document.getElementById('ticketButton');
    const ticketMessage = document.getElementById('ticketMessage');
    const advancedTicketForm = document.getElementById('advancedTicketForm');
    const ticketMatch = document.getElementById('ticketMatch');
    const ticketQuantity = document.getElementById('ticketQuantity');
    const ticketTier = document.getElementById('ticketTier');
    const ticketPreview = document.getElementById('ticketPreview');

    if (!ticketCheckbox || !ticketButton || !ticketMessage || !advancedTicketForm) return;

    function updatePreview() {
        if (!ticketPreview) return;
        if (ticketCheckbox.checked && ticketMatch.value && ticketTier.value) {
            ticketPreview.hidden = false;
            ticketPreview.innerHTML = `<p><strong>Match preview:</strong> ${ticketMatch.value} • ${ticketQuantity.value || '1'} ticket(s) • ${ticketTier.value}</p><p>Tap the button to send this request via WhatsApp.</p>`;
        } else {
            ticketPreview.hidden = true;
            ticketPreview.textContent = '';
        }
    }

    function updateButtonState() {
        const ready = ticketCheckbox.checked && ticketMatch.value && ticketTier.value;
        ticketButton.disabled = !ready;
        ticketMessage.textContent = ready
            ? 'Your ticket request is ready. Confirm it with WhatsApp.'
            : ticketCheckbox.checked
                ? 'Choose a match and seating tier to continue.'
                : 'Select the checkbox to enable ticket availability.';
        updatePreview();
    }

    ticketCheckbox.addEventListener('change', () => {
        if (ticketCheckbox.checked) {
            advancedTicketForm.style.display = 'block';
        } else {
            advancedTicketForm.style.display = 'none';
        }
        updateButtonState();
    });

    [ticketMatch, ticketQuantity, ticketTier].forEach(element => {
        if (element) {
            element.addEventListener('change', updateButtonState);
        }
    });

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

function initPageNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');
    const navLinks = document.querySelectorAll('.site-header nav a');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!expanded));
            siteNav.classList.toggle('open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (siteNav && siteNav.classList.contains('open')) {
                siteNav.classList.remove('open');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`.site-header nav a[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                navLinks.forEach(other => other.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(section => observer.observe(section));
}

buildProductCards();
initWorldCupCountdown();
initFootballNews();
initTicketSection();
initPageNavigation();
