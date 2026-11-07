const CONFIG = {
    destinations: [
        {
            id: "dal-lake",
            name: "Dal Lake",
            region: "Srinagar",
            category: "Lakes",
            altitude: "1,580 m",
            bestTime: "April to October",
            temp: "14°C to 28°C",
            summary: "Shikara rides, floating gardens and traditional houseboats on one of Kashmir's most iconic waters.",
            details: "Dal Lake is the urban jewel of Srinagar. Spanning over 18 square kilometers, it features intricate floating lotus gardens, bustling lakeside markets, and centuries-old cedar houseboats.",
            highlights: ["Shikara ride at sunrise", "Houseboat stay", "Walk along Boulevard Road"],
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a060a"/><stop offset="100%" stop-color="#3b7080"/></linearGradient></defs><rect width="400" height="250" fill="url(#s1)"/><circle cx="320" cy="70" r="22" fill="#d4af37" opacity="0.8"/><path d="M0 160 Q 150 140 400 160 L 400 250 L 0 250 Z" fill="#050203"/><path d="M50 165 C 120 160 280 160 350 168 C 280 185 120 185 50 165 Z" fill="#cc1122" opacity="0.6"/><path d="M0 160 L 80 100 L 150 135 L 230 85 L 310 120 L 400 95 L 400 160 Z" fill="#120306"/></svg>`
        },
        {
            id: "wular-lake",
            name: "Wular Lake",
            region: "Bandipora",
            category: "Lakes",
            altitude: "1,580 m",
            bestTime: "April to November",
            temp: "12°C to 26°C",
            summary: "One of Asia's largest freshwater lakes. Expansive, tranquil and renowned for migratory birdwatching.",
            highlights: ["Boat trips with local fishermen", "Wetland birdwatching", "Sunset from the shore"],
            details: "Wular Lake is tectonic in origin and boasts dramatic expansive horizons with rich waterfowl populations during migratory seasons.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#260a10"/><stop offset="100%" stop-color="#2d5b68"/></linearGradient></defs><rect width="400" height="250" fill="url(#s2)"/><path d="M0 150 Q 200 130 400 150 L 400 250 L 0 250 Z" fill="#050203"/><path d="M0 130 L 100 110 L 200 125 L 300 95 L 400 115 L 400 150 L 0 150 Z" fill="#1a060a"/></svg>`
        },
        {
            id: "gulmarg",
            name: "Gulmarg",
            region: "Baramulla",
            category: "Mountains",
            altitude: "2,650 m",
            bestTime: "Dec to Mar (Skiing) / Jun to Sep (Meadows)",
            temp: "-5°C to 18°C",
            summary: "A high alpine meadow that transforms into premier ski slopes in winter, reached via high-altitude gondola.",
            highlights: ["Gondola towards Apharwat Peak", "Skiing from Dec to March", "Pony rides across the meadow"],
            details: "Gulmarg ('Meadow of Flowers') hosts the world's second highest operating cable car and legendary powder snow bowls.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#120306"/><stop offset="100%" stop-color="#6a7d65"/></linearGradient></defs><rect width="400" height="250" fill="url(#s3)"/><path d="M0 140 L 120 70 L 220 110 L 320 50 L 400 90 L 400 250 L 0 250 Z" fill="#050203"/><path d="M110 75 L 120 70 L 130 80 Z" fill="#f4eee8"/><path d="M310 55 L 320 50 L 330 60 Z" fill="#f4eee8"/></svg>`
        },
        {
            id: "pahalgam",
            name: "Pahalgam",
            region: "Anantnag",
            category: "Mountains",
            altitude: "2,200 m",
            bestTime: "May to October",
            temp: "10°C to 24°C",
            summary: "A dramatic valley town cradled by the Lidder River and towering pine forests, prime base for Himalayan treks.",
            highlights: ["Betaab Valley", "Baisaran meadow", "Lidder River trail walks"],
            details: "Situated at the confluence of the Sheshnag Lake streams, Pahalgam offers stunning pine valleys and glacial river gorges.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a060a"/><stop offset="100%" stop-color="#4a5b45"/></linearGradient></defs><rect width="400" height="250" fill="url(#s4)"/><path d="M0 150 Q 200 130 400 150 L 400 250 L 0 250 Z" fill="#050203"/><path d="M0 150 L 90 90 L 170 125 L 260 70 L 350 110 L 400 85 L 400 150 Z" fill="#120306"/></svg>`
        },
        {
            id: "sonamarg",
            name: "Sonamarg",
            region: "Ganderbal",
            category: "Mountains",
            altitude: "2,800 m",
            bestTime: "June to September",
            temp: "8°C to 20°C",
            summary: "The Meadow of Gold, framed by gleaming glaciers, roaring glacial streams and dense pine canopies.",
            highlights: ["Thajiwas Glacier trek", "Sindh River valley walks", "Pine forest picnics"],
            details: "The gateway to Ladakh, Sonamarg is surrounded by majestic glaciers like Thajiwas and fast-flowing alpine torrents.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#260a10"/><stop offset="100%" stop-color="#b89a42"/></linearGradient></defs><rect width="400" height="250" fill="url(#s5)"/><path d="M0 150 L 150 80 L 250 120 L 400 60 L 400 250 L 0 250 Z" fill="#050203"/><path d="M140 85 L 150 80 L 165 95 L 155 100 Z" fill="#f4eee8" opacity="0.9"/></svg>`
        },
        {
            id: "mughal-gardens",
            name: "Mughal Gardens",
            region: "Srinagar",
            category: "Heritage",
            altitude: "1,600 m",
            bestTime: "April to June & Sep to Nov",
            temp: "15°C to 27°C",
            summary: "Terraced imperial gardens along Dal Lake featuring cascading water channels, fountains and ancient chinar trees.",
            highlights: ["Shalimar Bagh", "Nishat Bagh", "Chinar trees in autumn"],
            details: "Commissioned by Mughal emperors, these terraced pleasure gardens exhibit master hydraulic landscaping and Persian garden symmetry.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#120306"/><stop offset="100%" stop-color="#b89a42"/></linearGradient></defs><rect width="400" height="250" fill="url(#s6)"/><path d="M0 160 L 400 160 L 400 250 L 0 250 Z" fill="#050203"/><path d="M180 160 L 200 100 L 220 160 Z" fill="#cc1122"/></svg>`
        },
        {
            id: "yusmarg",
            name: "Yusmarg",
            region: "Budgam",
            category: "Mountains",
            altitude: "2,396 m",
            bestTime: "May to September",
            temp: "10°C to 22°C",
            summary: "An untouched meadowland framed by dense pine forests and snow-capped peaks, legendary for quiet solitude.",
            highlights: ["Nilnag Lake trek", "Doodh Ganga river walks", "Secluded pine forest camps"],
            details: "Yusmarg offers pristine wilderness untouched by heavy commercial tourism, making it the premier retreat for true slow travel enthusiasts.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a060a"/><stop offset="100%" stop-color="#3d5a50"/></linearGradient></defs><rect width="400" height="250" fill="url(#s7)"/><path d="M0 150 Q 200 120 400 150 L 400 250 L 0 250 Z" fill="#050203"/><path d="M0 140 L 100 95 L 200 130 L 300 85 L 400 110 L 400 150 L 0 150 Z" fill="#120306"/></svg>`
        },
        {
            id: "gurez-valley",
            name: "Gurez Valley",
            region: "Bandipora",
            category: "Mountains",
            altitude: "2,400 m",
            bestTime: "June to September",
            temp: "8°C to 20°C",
            summary: "A remote Himalayan valley guarded by towering peaks, vibrant log-cabin villages and the roaring Kishanganga river.",
            highlights: ["Habba Khatoon peak", "Dard-Shina tribal culture", "Kishanganga river gorges"],
            details: "Cut off by snow for months each year, Gurez is an expedition-grade destination featuring untouched alpine beauty and ancient wooden architecture.",
            svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="s8" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#260a10"/><stop offset="100%" stop-color="#5a454d"/></linearGradient></defs><rect width="400" height="250" fill="url(#s8)"/><path d="M0 160 L 150 70 L 250 110 L 400 50 L 400 250 L 0 250 Z" fill="#050203"/><path d="M140 75 L 150 70 L 160 80 Z" fill="#f4eee8"/></svg>`
        }
    ]
};

// Currency State
let currentCurrency = 'INR';
const currencies = {
    INR: { symbol: '₹', rate: 1 },
    USD: { symbol: '$', rate: 0.012 },
    EUR: { symbol: '€', rate: 0.011 }
};

function cycleCurrency() {
    const keys = Object.keys(currencies);
    const nextKey = keys[(keys.indexOf(currentCurrency) + 1) % keys.length];
    currentCurrency = nextKey;
    document.getElementById('currency-toggle').innerText = `Currency: ${currentCurrency} (${currencies[currentCurrency].symbol})`;
    calculateCost();
}

function formatMoney(amountInINR) {
    const curr = currencies[currentCurrency];
    const converted = Math.round(amountInINR * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
}

// Theme State
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'ember' ? 'frost' : 'ember';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-toggle').innerText = `Theme: ${next.charAt(0).toUpperCase() + next.slice(1)}`;
}

// Itinerary Drawer State
let selectedSanctuaries = [];

function toggleSanctuary(id) {
    const idx = selectedSanctuaries.indexOf(id);
    if (idx > -1) {
        selectedSanctuaries.splice(idx, 1);
    } else {
        selectedSanctuaries.push(id);
    }
    updateDrawer();
    renderDestinations(currentFilter, currentSearch);
}

function updateDrawer() {
    const drawer = document.getElementById('itinerary-drawer');
    document.getElementById('selected-count').innerText = selectedSanctuaries.length;
    document.getElementById('selected-days').innerText = `${selectedSanctuaries.length * 2 || 0} Days`;
    if (selectedSanctuaries.length > 0) {
        drawer.classList.add('active');
    } else {
        drawer.classList.remove('active');
    }
}

function openCheckout() {
    const names = selectedSanctuaries.map(id => CONFIG.destinations.find(d => d.id === id).name).join(', ');
    alert(`Expedition Summary:\nSanctuaries: ${names}\nEstimated Duration: ${selectedSanctuaries.length * 2} Days\n\nRedirecting to secure concierge checkout...`);
    document.getElementById('estimator').scrollIntoView();
}

// Render Destinations with Filtering & Search
let currentFilter = 'all';
let currentSearch = '';

function renderDestinations(filter = 'all', searchQuery = '') {
    const container = document.getElementById('destinations-container');
    let items = CONFIG.destinations;

    if (filter !== 'all') {
        items = items.filter(d => d.category === filter);
    }
    if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        items = items.filter(d => d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q) || d.summary.toLowerCase().includes(q));
    }

    if (items.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--bone-muted); padding: 3rem;">No sanctuaries match your criteria.</div>`;
        return;
    }

    container.innerHTML = items.map(d => {
        const isAdded = selectedSanctuaries.includes(d.id);
        return `
                    <div class="destination-card">
                        <div class="card-img-container">
                            ${d.svg}
                            <span class="card-category-tag">${d.category}</span>
                        </div>
                        <div class="card-content">
                            <div class="card-meta">
                                <span>${d.region}</span>
                                <span>Alt: ${d.altitude}</span>
                            </div>
                            <h3>${d.name}</h3>
                            <p>${d.summary}</p>
                            <div class="card-actions">
                                <button class="details-btn" onclick="openModal('${d.id}')">View Details &rarr;</button>
                                <button class="add-itinerary-btn ${isAdded ? 'added' : ''}" onclick="toggleSanctuary('${d.id}')">
                                    ${isAdded ? '✓ Added' : '+ Add to Route'}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    }).join('');
}

document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderDestinations(currentFilter, currentSearch);
    });
});

document.getElementById('search-input').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderDestinations(currentFilter, currentSearch);
});

renderDestinations();

// Modal Logic
const modal = document.getElementById('destination-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(id) {
    const dest = CONFIG.destinations.find(d => d.id === id);
    if (!dest) return;
    modalTitle.innerText = dest.name;
    modalBody.innerHTML = `
                <div style="width: 100%; height: 200px; border-radius: 6px; overflow: hidden; border: 1px solid var(--border);">
                    ${dest.svg}
                </div>
                <div class="modal-specs">
                    <div><span>Region</span><strong>${dest.region}</strong></div>
                    <div><span>Altitude</span><strong>${dest.altitude}</strong></div>
                    <div><span>Typical Temp</span><strong>${dest.temp}</strong></div>
                </div>
                <p><strong>Overview:</strong> ${dest.details}</p>
                <div>
                    <strong style="color: var(--bone); display: block; margin-bottom: 0.5rem;">Key Highlights:</strong>
                    <ul style="padding-left: 1.25rem; color: var(--bone-muted); display: flex; flex-direction: column; gap: 0.4rem;">
                        ${dest.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
                <div style="border-top: 1px solid var(--border); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.9rem; color: var(--gold);">Recommended Season: ${dest.bestTime}</span>
                    <button class="btn btn-primary" onclick="toggleSanctuary('${dest.id}'); closeModal();">Add to Route</button>
                </div>
            `;
    modal.style.display = 'flex';
}

function closeModal() { modal.style.display = 'none'; }
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Trip Estimator Calculator
const tierSelect = document.getElementById('calc-tier');
const travelersInput = document.getElementById('calc-travelers');
const nightsInput = document.getElementById('calc-nights');
const totalOutput = document.getElementById('calc-total');

function calculateCost() {
    const rate = parseInt(tierSelect.value);
    const travelers = parseInt(travelersInput.value) || 1;
    const nights = parseInt(nightsInput.value) || 1;
    const totalINR = rate * nights * Math.max(1, Math.ceil(travelers / 2));
    totalOutput.innerText = formatMoney(totalINR);
}

tierSelect.addEventListener('change', calculateCost);
travelersInput.addEventListener('input', calculateCost);
nightsInput.addEventListener('input', calculateCost);
calculateCost();

// Canvas Particle Engine
const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const particles = [];
for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.5 + 0.8,
        d: Math.random() * 90,
        speed: Math.random() * 0.8 + 0.5
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    const isFrost = document.documentElement.getAttribute('data-theme') === 'frost';
    ctx.fillStyle = isFrost ? 'rgba(17, 136, 204, 0.5)' : 'rgba(204, 17, 34, 0.5)';
    ctx.beginPath();
    particles.forEach(p => {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        p.y += p.speed;
        p.x += Math.sin(p.d) * 0.3;
        if (p.y > height) {
            p.y = -10;
            p.x = Math.random() * width;
        }
    });
    ctx.fill();
    requestAnimationFrame(drawParticles);
}
drawParticles();

// Reading Progress Bar & Cursor Tracker
window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScroll = window.scrollY;
    document.getElementById('progress-bar').style.width = `${(currentScroll / totalScroll) * 100}%`;
});

const cursor = document.getElementById('custom-cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// =======================================================
// EMOTIONALLY INTELLIGENT CONCIERGE ENGINE ("NOOR")
// =======================================================
const launcher = document.getElementById('chat-launcher');
const windowBox = document.getElementById('chat-window');
const closeBtn = document.getElementById('chat-close');

launcher.addEventListener('click', () => { windowBox.style.display = 'flex'; });
closeBtn.addEventListener('click', () => { windowBox.style.display = 'none'; });

let chatMemory = {
    lastSanctuary: null,
    emotionalState: 'neutral'
};

function sendMsg() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const text = input.value.trim();
    if (!text) return;

    // Append User Message
    body.innerHTML += `<div class="chat-msg user">${escapeHtml(text)}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Show Typing Indicator
    const typingId = 'typing-' + Date.now();
    body.innerHTML += `<div class="chat-typing" id="${typingId}"><span></span><span></span><span></span></div>`;
    body.scrollTop = body.scrollHeight;

    // Human-like response timing simulation
    setTimeout(() => {
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();

        const reply = processEmotionalHumanQuery(text);
        body.innerHTML += `<div class="chat-msg guide">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 850);
}

function sendPreset(text) {
    document.getElementById('chat-input').value = text;
    sendMsg();
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function processEmotionalHumanQuery(query) {
    const q = query.toLowerCase();

    // --- 1. EMOTION DETECTION & EMPATHY MAPPING ---

    // Excitement & Joy
    if (q.match(/excited|cant wait|amazing|wow|awesome|love|thrilled|epic|wonderful/)) {
        chatMemory.emotionalState = 'excited';
        return `I love that energy, Janab! Your excitement is truly contagious. There is nothing quite like the rush of standing before Kashmir's snow-crowned peaks or gliding across Dal Lake at sunrise. Which of our sanctuaries are you most eager to conquer?`;
    }

    // Anxiety, Fear, Safety Concerns
    if (q.match(/safe|scared|worried|danger|fear|cold|altitude|risk|unsure|nervous/)) {
        chatMemory.emotionalState = 'anxious';
        return `I completely understand your hesitation, Janab. Stepping into uncharted alpine territory can feel daunting, but please breathe easy. Our expeditions include private armed and verified mountain guides, seamless transit, and luxury shelter every step of the way. You are in safe, expert hands. What specific worry is on your mind?`;
    }

    // Confusion, Overwhelm, Hesitation
    if (q.match(/confused|overwhelmed|don't know|lost|help me choose|too much|unsure/)) {
        chatMemory.emotionalState = 'confused';
        return `Take a deep breath, Janab. Exploring a valley as majestic as Kashmir can certainly feel overwhelming at first glance. Let's take it one step at a time. Are you looking for quiet seclusion in untouched pine forests like Yusmarg, or the vibrant energy of Dal Lake?`;
    }

    // Romance / Couples Travel
    if (q.match(/romantic|honeymoon|couple|love story|partner|wife|husband|wedding/)) {
        chatMemory.emotionalState = 'romantic';
        return `Ah, romance in the valley... poetry in motion. Imagine waking up inside a cedar houseboat on Dal Lake with morning mist over the water, sipping warm saffron Kahwa by fireside, or watching the golden autumn Chinar leaves fall in the Mughal Gardens. Shall I help you curate a bespoke romantic itinerary?`;
    }

    // Storytelling / Philosophical
    if (q.match(/story|legend|tell me about|history|secret|myth|devil|kashmir/)) {
        chatMemory.emotionalState = 'curious';
        return `The valley whispers ancient legends, Janab. Long before emperors carved pleasure gardens into the Zabarwan foothills, poets called Kashmir *'Heaven on Earth'*—guarded by jagged glacial passes that test the bold. Every lake has a mirror-flat reflection of a forgotten dynasty. What part of our valley's soul would you like to uncover?`;
    }

    // --- 2. SPECIFIC SANCTUARY INQUIRIES ---
    const foundSanctuary = CONFIG.destinations.find(d => q.includes(d.name.toLowerCase()) || q.includes(d.id.replace('-', ' ')));
    if (foundSanctuary) {
        chatMemory.lastSanctuary = foundSanctuary;
        return `Ah, you have selected <strong>${foundSanctuary.name} (${foundSanctuary.region})</strong>! It sits at an altitude of ${foundSanctuary.altitude}.<br><br>${foundSanctuary.summary}<br><br><strong>Best Season:</strong> ${foundSanctuary.bestTime}<br><em>Would you like me to add ${foundSanctuary.name} to your custom expedition route drawer?</em>`;
    }

    // Contextual Follow-up
    if (chatMemory.lastSanctuary && (q.includes('there') || q.includes('reach') || q.includes('how') || q.includes('cold') || q.includes('weather'))) {
        const s = chatMemory.lastSanctuary;
        if (q.includes('cold') || q.includes('weather') || q.includes('temp')) {
            return `At ${s.name}, typical temperatures range around ${s.temp}. Mountain weather can be delightfully crisp, so make sure to pack warm woolens!`;
        }
        return `All expeditions to ${s.name} begin from our Srinagar basecamp with private chauffeured transit. You won't have to lift a finger—just enjoy the view.`;
    }

    // --- 3. FOOD & DRINK ---
    if (q.match(/food|eat|wazwan|kahwa|tea|cuisine|dinner|lunch|drink|dine|hungry/)) {
        if (q.includes('kahwa') || q.includes('tea')) {
            return "There is nothing quite like holding a warm cup of **Kahwa**—infused with cardamom, cinnamon, saffron, and crushed almonds—while watching the crisp mountain mist roll past.";
        }
        return "Our culinary masterpiece is **Wazwan**—a grand multi-course banquet featuring Rogan Josh and Gushtaba, traditionally shared around large copper platters. It is an experience of pure Kashmiri warmth and hospitality.";
    }

    // --- 4. SEASONS & TIMING ---
    if (q.match(/season|time|when|weather|month|spring|summer|autumn|winter|snow|ski/)) {
        return "Every season in Kashmir paints a completely different masterpiece:<br>• **Spring (Mar–May):** Blooming orchards and vibrant green valleys.<br>• **Summer (Jun–Aug):** Alpine wildflowers and cool lake breezes.<br>• **Autumn (Sep–Nov):** Glowing copper Chinar leaves under clear skies.<br>• **Winter (Dec–Feb):** Deep powder snow in Gulmarg for world-class skiing.";
    }

    // --- 5. PRICING & ESTIMATOR ---
    if (q.match(/price|cost|budget|tier|vip|package|money|rate|pay|expedition/)) {
        return `Our packages span from Standard Valley Stays to Deluxe Houseboats and <strong>The Devil's VIP Expedition</strong> (₹50,000/night tier). Your currency is currently set to <strong>${currentCurrency}</strong>. You can fine-tune travelers and nights instantly in our Trip Estimator section on the page!`;
    }

    // --- 6. GREETINGS & SMALL TALK ---
    if (q.match(/hi|hello|hey|salaam|greetings|who are you|noor|help/)) {
        return "Salaam, Janab. I am Noor, your senior concierge. More than just a guide, I am here to listen, converse, and ensure your expedition through Kashmir is entirely flawless. How are you feeling today?";
    }

    // --- 7. HUMAN-LIKE EMPATHETIC FALLBACK ---
    return `I hear you, Janab. Every traveler's journey through Kashmir is entirely unique. Whether you are seeking quiet alpine solitude, rich cultural storytelling, or meticulous route planning, I am right here with you. Tell me a bit more about what you envision!`;
}