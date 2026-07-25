/* ==========================================================================
   FINISHER TECHNOLOGIES - CORE APPLICATION CONTROLLER
   Motto: "Building Tomorrow's Technology"
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Data Store (Services, Brand Tokens, Kenya Timeline, Portfolio, Jobs)
// --------------------------------------------------------------------------

const SERVICES_DATA = [
    {
        id: 'web',
        icon: '🌐',
        title: 'Web Development',
        desc: 'Next-generation web applications built with React, WebGL, high-performance API layers, and responsive glassmorphism designs.',
        tags: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'PWA']
    },
    {
        id: 'mobile',
        icon: '📱',
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile apps delivering zero-lag user experiences for iOS and Android platforms.',
        tags: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Offline-First']
    },
    {
        id: 'software',
        icon: '💻',
        title: 'Custom Software Development',
        desc: 'Enterprise software architecture, microservices engines, bespoke ERPs, and high-concurrency transaction processing.',
        tags: ['Node.js', 'Go', 'Python', 'Microservices', 'GraphQL']
    },
    {
        id: 'database',
        icon: '🗄️',
        title: 'Database Solutions',
        desc: 'Distributed database design, data warehousing, high-availability replication, and sub-millisecond query optimization.',
        tags: ['PostgreSQL', 'MongoDB', 'Redis', 'TimescaleDB', 'ETL']
    },
    {
        id: 'cloud',
        icon: '☁️',
        title: 'Cloud Solutions & DevOps',
        desc: 'Architecting resilient cloud ecosystems on AWS, GCP, and Azure with automated CI/CD and zero-downtime deployments.',
        tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Serverless']
    },
    {
        id: 'ai',
        icon: '🤖',
        title: 'AI & Automation',
        desc: 'Deploying autonomous AI agents, fine-tuned LLMs, predictive intelligence, and Robotic Process Automation (RPA).',
        tags: ['OpenAI / Gemini', 'LangChain', 'Python', 'Vector DB', 'RPA']
    },
    {
        id: 'cybersecurity',
        icon: '🔒',
        title: 'Cybersecurity Solutions',
        desc: 'Zero-trust architecture, automated threat scanning, penetration testing, compliance audits, and security hardening.',
        tags: ['SOC Compliance', 'Pen-Testing', 'Zero-Trust', 'WAF', 'Encryption']
    },
    {
        id: 'consulting',
        icon: '🛠️',
        title: 'IT Support & Consulting',
        desc: '24/7 managed infrastructure support, CTO-as-a-Service, legacy system modernization, and tech stack strategy.',
        tags: ['CTO Advisory', '24/7 SLA', 'Legacy Migration', 'Audit']
    }
];

const BRAND_COLORS = [
    { name: 'Deep Obsidian', hex: '#0B0F17', role: 'Primary Dark Background' },
    { name: 'Electric Cyan', hex: '#00F0FF', role: 'Primary Accent & Glow' },
    { name: 'Neon Purple', hex: '#8B5CF6', role: 'Secondary Futuristic Gradient' },
    { name: 'Cyber Emerald', hex: '#10B981', role: 'Success & System Status' },
    { name: 'Titanium Slate', hex: '#94A3B8', role: 'Body Text & Subtitles' }
];

const KENYA_TIMELINE = [
    { step: '01', title: 'Name Search & Reservation', desc: 'eCitizen BRS name application for "Finisher Technologies Limited". (Cost: KES 150, 24h approval).' },
    { step: '02', title: 'Statutory Incorporation (Form CR1, CR2, CR8)', desc: 'Upload Director IDs, Passport photos, KRA PINs, and Memorandum of Association. (Cost: KES 10,650, 3-5 days).' },
    { step: '03', title: 'Certificate of Incorporation & CR12', desc: 'Official issuance of Company Registration Number (CRN) and official CR12 listing beneficial ownership.' },
    { step: '04', title: 'KRA Company PIN & Obligation Setup', desc: 'iTax entity PIN registration and setup for Corporate Income Tax, PAYE, and VAT.' },
    { step: '05', title: 'Corporate Bank Account Opening', desc: 'Account opening at NCBA/KCB with certified CR12, IDs, board resolutions, and tax PIN.' },
    { step: '06', title: 'Statutory Employer Setup (NSSF & SHIF)', desc: 'Registration on NSSF and SHIF SHA employer portals for employee monthly contributions.' },
    { step: '07', title: 'County Single Business Permit', desc: 'Nairobi City County unified business permit application for IT & Software Consultancy.' }
];

const PORTFOLIO_DATA = [
    {
        category: 'web',
        title: 'ApexPay Fintech Gateway',
        desc: 'High-throughput payment gateway processing 50,000+ daily MPESA & card transactions with sub-100ms latency.',
        tech: ['Next.js', 'Go', 'PostgreSQL', 'Redis']
    },
    {
        category: 'mobile',
        title: 'AgriPulse Logistics App',
        desc: 'Offline-first mobile application tracking farm-to-market logistics across East Africa.',
        tech: ['Flutter', 'SQLite', 'GraphQL']
    },
    {
        category: 'ai',
        title: 'CyberShield AI Agent',
        desc: 'Autonomous security agent analyzing cloud infrastructure logs for real-time anomaly detection.',
        tech: ['Python', 'Vector DB', 'LangChain', 'AWS']
    },
    {
        category: 'web',
        title: 'CloudScale Enterprise Portal',
        desc: 'Global SaaS management console for monitoring multi-region Kubernetes clusters.',
        tech: ['React', 'TypeScript', 'Docker', 'Kubernetes']
    }
];

const JOBS_DATA = [
    { title: 'Senior Cloud & DevOps Engineer', type: 'Full-time • Remote / Nairobi', stack: 'AWS, Kubernetes, Terraform, Go' },
    { title: 'Full Stack Software Engineer (React/Node)', type: 'Full-time • Remote', stack: 'React, TypeScript, Node.js, PostgreSQL' },
    { title: 'AI & Automation Solutions Architect', type: 'Full-time • Hybrid', stack: 'Python, LangChain, Vector Databases, Fast API' }
];

const PRICING_PACKAGES = [
    { title: 'Startup MVP', price: '$2,500', desc: 'Ideal for early-stage founders launching scalable web/mobile products with 30-day SLA support.' },
    { title: 'Business Growth', desc: 'Full-stack enterprise application, API integrations, payment gateways, admin dashboard, 60-day SLA.' },
    { title: 'Enterprise Suite',  desc: 'Dedicated microservices engine, high-availability cluster, zero-trust security audit, 24/7 SOC SLA.' }
];

// --------------------------------------------------------------------------
// 2. Application Initializer & Router
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    renderPillarsPreview();
    renderFullServices();
    renderBrandSwatches();
    renderKenyaTimeline();
    renderPortfolio();
    renderJobs();
    renderPricing();
    renderContractsView();

    // Check hash route or default to home
    const hash = window.location.hash.replace('#', '');
    navigateTo(hash || 'home');

    // Mobile nav toggle
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

function navigateTo(pageId) {
    const validPages = ['home', 'about', 'services', 'solutions', 'portfolio', 'brandkit', 'portal', 'careers', 'contact'];
    const target = validPages.includes(pageId) ? pageId : 'home';

    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });
    const targetView = document.getElementById(`page-${target}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === target);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// 3. Render Functions
// --------------------------------------------------------------------------

function renderPillarsPreview() {
    const grid = document.getElementById('pillars-preview-grid');
    if (!grid) return;

    grid.innerHTML = SERVICES_DATA.slice(0, 4).map(s => `
        <div class="card pillar-card">
            <div class="pillar-icon">${s.icon}</div>
            <h3 class="pillar-title">${s.title}</h3>
            <p class="pillar-desc">${s.desc}</p>
            <div class="pillar-tags">
                ${s.tags.slice(0, 3).map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderFullServices() {
    const grid = document.getElementById('full-services-grid');
    if (!grid) return;

    grid.innerHTML = SERVICES_DATA.map(s => `
        <div class="card pillar-card">
            <div class="pillar-icon">${s.icon}</div>
            <h3 class="pillar-title text-cyan">${s.title}</h3>
            <p class="pillar-desc">${s.desc}</p>
            <div class="pillar-tags">
                ${s.tags.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
            <button class="btn btn-outline btn-sm mt-3" onclick="openQuoteForService('${s.title}')">Inquire for Service &rarr;</button>
        </div>
    `).join('');
}

function renderBrandSwatches() {
    const grid = document.getElementById('color-swatches');
    if (!grid) return;

    grid.innerHTML = BRAND_COLORS.map(c => `
        <div class="glass-card swatch-card" onclick="copyToClipboard('${c.hex}')">
            <div class="swatch-color" style="background-color: ${c.hex}; border: 1px solid rgba(255,255,255,0.2);"></div>
            <div class="font-bold text-sm">${c.name}</div>
            <div class="font-mono text-xs text-cyan">${c.hex}</div>
            <div class="text-xs text-muted mt-1">${c.role}</div>
        </div>
    `).join('');
}

function renderKenyaTimeline() {
    const container = document.getElementById('kenya-timeline');
    if (!container) return;

    container.innerHTML = KENYA_TIMELINE.map(item => `
        <div class="glass-card p-3 mb-2 flex-gap">
            <span class="badge font-mono text-cyan">${item.step}</span>
            <div>
                <strong>${item.title}</strong>
                <p class="text-sm text-muted mt-1">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_DATA.map(p => `
        <div class="glass-card p-4 portfolio-item" data-category="${p.category}">
            <span class="badge">${p.category.toUpperCase()}</span>
            <h4 class="mt-2 text-cyan">${p.title}</h4>
            <p class="text-sm text-muted mt-2">${p.desc}</p>
            <div class="pillar-tags mt-3">
                ${p.tech.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderJobs() {
    const container = document.getElementById('jobs-list');
    if (!container) return;

    container.innerHTML = JOBS_DATA.map(j => `
        <div class="glass-card p-3 flex-between">
            <div>
                <h4 class="text-cyan">${j.title}</h4>
                <p class="text-sm text-muted">${j.type}</p>
                <div class="pillar-tags mt-2">
                    <span class="badge">${j.stack}</span>
                </div>
            </div>
            <button class="btn btn-outline btn-sm" onclick="openApplyModal('${j.title}')">Apply</button>
        </div>
    `).join('');
}

function renderPricing() {
    const grid = document.getElementById('pricing-grid');
    if (!grid) return;

    grid.innerHTML = PRICING_PACKAGES.map(p => `
        <div class="glass-card p-4 text-center">
            <h4>${p.title}</h4>
            <div class="estimate-price text-cyan mt-2">${p.price}</div>
            <p class="text-sm text-muted mt-2">${p.desc}</p>
            <button class="btn btn-primary btn-sm mt-3" onclick="openQuoteModal()">Choose Plan</button>
        </div>
    `).join('');
}

function renderContractsView() {
    const view = document.getElementById('contracts-view');
    if (!view) return;

    view.innerText = `MASTER SERVICE AGREEMENT (MSA) - FINISHER TECHNOLOGIES
-----------------------------------------------------------------
1. INTELLECTUAL PROPERTY: 100% Client code ownership upon full invoice settlement.
2. DEFECT WARRANTY: 90 days bug resolution warranty post production live deployment.
3. GOVERNING LAW: Laws of Republic of Kenya (Nairobi Centre for International Arbitration).
4. CONFIDENTIALITY: Standard 3-year mutual Non-Disclosure Agreement (NDA) clause.`;
}

// --------------------------------------------------------------------------
// 4. Portal Tabs & Generator Logic
// --------------------------------------------------------------------------

function switchPortalTab(tabName) {
    document.querySelectorAll('.portal-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.portal-pane').forEach(p => p.classList.remove('active'));

    event.target.classList.add('active');
    const pane = document.getElementById(`tab-${tabName}`);
    if (pane) pane.classList.add('active');
}

function generateProposal(e) {
    e.preventDefault();
    const client = document.getElementById('prop-client').value;
    const email = document.getElementById('prop-email').value;
    const title = document.getElementById('prop-title').value;
    const budget = document.getElementById('prop-budget').value;

    const output = document.getElementById('proposal-output');
    output.classList.remove('hidden');
    output.innerText = `================================================================
PROJECT PROPOSAL — FINISHER TECHNOLOGIES
Ref: FT-PROP-2026-${Math.floor(1000 + Math.random() * 9000)}
================================================================
PREPARED FOR: ${client} (${email})
PROJECT TITLE: ${title}
TOTAL PROPOSED BUDGET: $${Number(budget).toLocaleString()}KSH

SCOPE & DELIVERABLES:
- Phase 1: Architecture, Wireframing & Glassmorphism Design
- Phase 2: Core Engineering & Security Infrastructure
- Phase 3: QA Testing & Automated Cloud Deployment

FINISHER TECHNOLOGIES GUARANTEE:
100% IP Code Transfer | 90-Day SLA Warranty | Zero-Trust Security`;
}

function generateInvoice(e) {
    e.preventDefault();
    const client = document.getElementById('inv-client').value;
    const pin = document.getElementById('inv-pin').value;
    const item = document.getElementById('inv-item').value;
    const amount = Number(document.getElementById('inv-amount').value);
    const vat = amount * 0.16;
    const total = amount + vat;

    const output = document.getElementById('invoice-output');
    output.classList.remove('hidden');
    output.innerText = `================================================================
OFFICIAL TAX INVOICE — FINISHER TECHNOLOGIES LTD
Invoice No: FT-INV-2026-${Math.floor(1000 + Math.random() * 9000)}
Company KRA PIN: P000000000X
================================================================
BILLED TO: ${client} (KRA PIN: ${pin})
DATE: ${new Date().toLocaleDateString()}

ITEM: ${item}
SUBTOTAL: $${amount.toLocaleString()} KSH
VAT (16%): $${vat.toLocaleString()} KSH
----------------------------------------------------------------
TOTAL AMOUNT DUE: $${total.toLocaleString()} KSH

BANK: KCB Bank Kenya Plc | Acc No: 1337861928
PAYBILL: 522522 (Acc: FT-INV)`;
}

// --------------------------------------------------------------------------
// 5. Quote Calculator Modal Logic
// --------------------------------------------------------------------------

function openQuoteModal() {
    document.getElementById('quote-modal').classList.add('active');
    calculateEstimate();
}

function closeQuoteModal() {
    document.getElementById('quote-modal').classList.remove('active');
}

function openQuoteForService(serviceName) {
    openQuoteModal();
}

function calculateEstimate() {
    const base = Number(document.getElementById('est-service').value);
    let extra = 0;
    document.querySelectorAll('.est-feature:checked').forEach(c => {
        extra += Number(c.value);
    });

    const total = base + extra;
    document.getElementById('est-total').innerText = `$${total.toLocaleString()}`;

    let weeks = '3 to 4 Weeks';
    if (total > 8000) weeks = '7 to 10 Weeks';
    else if (total > 4500) weeks = '5 to 7 Weeks';
    document.getElementById('est-timeline').innerText = weeks;
}

function submitQuoteRequest() {
    alert('Thank you! Your custom estimate request has been logged. Our engineering desk will send your formal proposal shortly.');
    closeQuoteModal();
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting Finisher Technologies! We have received your inquiry.');
}

function openApplyModal(title) {
    alert(`Application portal opened for: ${title}. Please send your CV/GitHub profile to dev@finishertechnologies.com`);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert(`Copied color token ${text} to clipboard!`);
}

function filterPortfolio(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.portfolio-item').forEach(item => {
        if (cat === 'all' || item.getAttribute('data-category') === cat) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// --------------------------------------------------------------------------
// 6. Background Particle & Cyber Canvas Engine
// --------------------------------------------------------------------------

function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 60;
        for (let x = 0; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw particles & connections
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 130)})`;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}
