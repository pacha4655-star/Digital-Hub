
// Toast helper — defined here (not solely reliant on auth.js) so any part of
// this page can surface a confirmation message even if auth.js fails to load.
if(typeof window.dhToast !== 'function'){
  window.dhToast = function(message){
    const el = document.getElementById('toast');
    if(!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(window.__dhToastTimer);
    window.__dhToastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  };
}

// ---- Data ----
// Neutral on-brand placeholder used if an external photo ever fails to load,
// so a broken/blocked image never collapses a card's layout. Referenced from
// inline onerror="...FALLBACK_IMG..." attributes inside template strings
// below, which static analysis can't trace.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23EEF1F8'/%3E%3Cstop offset='1' stop-color='%23F6F7FB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3C/svg%3E";

const services = [
  ["Website Development","Fast, conversion-focused sites built to turn visitors into leads.","M8 4L3 12l5 8M16 4l5 8-5 8M13 3l-2 18","https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Landing Pages","High-converting single-purpose pages for campaigns and launches.","M4 4h16v16H4z","https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["SEO","Rank higher and earn organic traffic that compounds over time.","M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35","https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Local SEO","Dominate local search and Google Maps in your service area.","M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","https://images.pexels.com/photos/7663519/pexels-photo-7663519.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Google Ads","Paid search campaigns engineered for cost-efficient lead flow.","M3 3v18h18M8 17V9M13 17V5M18 17v-7","https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Meta Ads","Facebook &amp; Instagram campaigns that reach the right buyers.","M22 12a10 10 0 1 0-11.5 9.87v-6.99H8v-2.88h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.24c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.88h-2.3V21.9A10 10 0 0 0 22 12z","https://images.pexels.com/photos/18610082/pexels-photo-18610082.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Social Media Marketing","Consistent, on-brand content that builds real audiences.","M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z","https://images.pexels.com/photos/33206676/pexels-photo-33206676.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Google Business Profile","Optimized listings that win the map pack and local trust.","M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 21v-2a4 4 0 0 0-3-3.87","https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Graphic Design","Visual assets that make your brand instantly recognizable.","M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z","https://images.pexels.com/photos/16313504/pexels-photo-16313504.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Branding","A cohesive identity that builds trust before the first sale.","M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z","https://images.pexels.com/photos/16698508/pexels-photo-16698508.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Content Marketing","Strategic content that educates, ranks, and converts.","M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z","https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["Lead Generation","Full-funnel systems built to fill your pipeline predictably.","M22 12h-6l-2 3h-4l-2-3H2","https://images.pexels.com/photos/5398881/pexels-photo-5398881.jpeg?auto=compress&cs=tinysrgb&w=600"]
];

const industries = [
  ["Startups","Move fast without breaking your budget","https://images.pexels.com/photos/12903342/pexels-photo-12903342.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Small Business","Local visibility that drives foot traffic","https://images.pexels.com/photos/36729529/pexels-photo-36729529.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Medium Business","Scalable systems for growing teams","https://images.pexels.com/photos/5466238/pexels-photo-5466238.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Construction","Lead gen for high-value project bids","https://images.pexels.com/photos/8961064/pexels-photo-8961064.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Real Estate","Listings and lead capture that convert","https://images.pexels.com/photos/7937748/pexels-photo-7937748.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Healthcare","Trust-building content and local SEO","https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Restaurants","Reservations and delivery order growth","https://images.pexels.com/photos/19119736/pexels-photo-19119736.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Hotels","Direct bookings over OTA dependency","https://images.pexels.com/photos/18426842/pexels-photo-18426842.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Education","Enrollment funnels that fill seats","https://images.pexels.com/photos/8617971/pexels-photo-8617971.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Retail","Omnichannel campaigns that drive sales","https://images.pexels.com/photos/5424922/pexels-photo-5424922.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["Manufacturers","B2B lead gen for long sales cycles","https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=400"],
  ["E-commerce","Paid + organic growth for online stores","https://images.pexels.com/photos/7857523/pexels-photo-7857523.jpeg?auto=compress&cs=tinysrgb&w=400"]
];

const portfolio = [
  ["Regional Healthcare Network","Website + Local SEO","https://images.pexels.com/photos/4266947/pexels-photo-4266947.jpeg?auto=compress&cs=tinysrgb&w=700"],
  ["Summit Construction Co.","Lead Generation","https://images.pexels.com/photos/8482865/pexels-photo-8482865.jpeg?auto=compress&cs=tinysrgb&w=700"],
  ["Cedarwood Hospitality Group","Branding + Website","https://images.pexels.com/photos/19689233/pexels-photo-19689233.jpeg?auto=compress&cs=tinysrgb&w=700"],
  ["Harvest Table Restaurants","Social Media + Ads","https://images.pexels.com/photos/18337050/pexels-photo-18337050.jpeg?auto=compress&cs=tinysrgb&w=700"],
  ["Northline Realty Partners","SEO + Landing Pages","https://images.pexels.com/photos/5502228/pexels-photo-5502228.jpeg?auto=compress&cs=tinysrgb&w=700"],
  ["Aurora Retail Collective","Google Ads + Meta Ads","https://images.pexels.com/photos/18699686/pexels-photo-18699686.jpeg?auto=compress&cs=tinysrgb&w=700"]
];

const caseStudies = [
  ["3.2x","Organic traffic growth in 6 months for a regional healthcare network through technical SEO and local content.","https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["214%","Increase in qualified leads for a construction firm via a rebuilt site and targeted Google Ads campaigns.","https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=600"],
  ["68%","Lower cost-per-lead for a restaurant group after consolidating social and paid media strategy.","https://images.pexels.com/photos/19553654/pexels-photo-19553654.jpeg?auto=compress&cs=tinysrgb&w=600"]
];

const testimonials = [
  ["Digital Hub didn't just build us a website — they rebuilt how we think about our funnel. Leads are up and so is quality.","Marcus Alden","Founder, Northline Realty Partners","https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&w=200"],
  ["Finally, one team that owns SEO and ads together instead of pointing fingers. Our reporting is actually useful now.","Priya Raman","Marketing Director, Aurora Retail Collective","https://images.pexels.com/photos/34381970/pexels-photo-34381970.jpeg?auto=compress&cs=tinysrgb&w=200"],
  ["They understood our industry from day one. Bookings jumped within the first quarter of working together.","David Chen","GM, Cedarwood Hospitality Group","https://images.pexels.com/photos/10029839/pexels-photo-10029839.jpeg?auto=compress&cs=tinysrgb&w=200"]
];

const faqs = [
  ["How long until we see results?","SEO typically shows meaningful movement in 3–6 months, while paid ads and landing pages can generate leads within the first few weeks. We set expectations clearly during onboarding based on your specific channels."],
  ["Do you work with businesses outside these listed industries?","Yes — the industries listed are where we have the deepest playbooks, but our process adapts to most B2B and local B2C business models."],
  ["Can I start with just one service?","Absolutely. Most clients start with one service and expand as they see results. Our strategy is built to scale with you, not lock you into a bundle."],
  ["What's included in the free consultation?","A full audit of your current website, SEO, and ad performance, plus a prioritized action plan — no obligation to continue."],
  ["Do you sign long-term contracts?","We offer month-to-month engagements after an initial 3-month minimum, which is the timeframe needed to properly test and optimize a strategy."],
  ["Will I have direct access to my strategist?","Yes — every client has a named point of contact and a live reporting dashboard, not just a monthly recap call."]
];

// ---- Render ----
const iconWrap = (path) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="${path}"/></svg>`;

// Robot icon "chassis" — a shared bot head/visor/antenna frame around each
// service's existing pictogram, rendered like a display the robot is
// reading. One consistent template keeps the whole set feeling like a
// single premium AI character system rather than a grab-bag of glyphs.
let rbUid = 0;
const robotIcon = (glyphPath) => {
  const id = 'rbClip' + (rbUid++);
  return `<svg class="robot-icon" width="28" height="28" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}"><rect x="10" y="14" width="24" height="14" rx="5"/></clipPath></defs>
    <g class="rb-body">
      <line class="rb-antenna" x1="22" y1="3" x2="22" y2="8"/>
      <circle class="rb-antenna-dot" cx="22" cy="3" r="1.7"/>
      <rect class="rb-head" x="6" y="8" width="32" height="26" rx="10"/>
      <circle class="rb-ear" cx="6" cy="21" r="1.6"/>
      <circle class="rb-ear" cx="38" cy="21" r="1.6"/>
      <rect class="rb-visor" x="11" y="14" width="22" height="14" rx="5"/>
      <g class="rb-glyph" transform="translate(22,21) scale(.56) translate(-12,-12)"><path d="${glyphPath}"/></g>
      <g clip-path="url(#${id})"><rect class="rb-scanline" x="9" y="20" width="26" height="2"/></g>
    </g>
  </svg>`;
};


document.getElementById('servicesGrid').innerHTML = services.map(([t,d,icon,img]) => `
  <div class="service-card reveal">
    <div class="service-thumb"><img src="${img}" alt="${t}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=FALLBACK_IMG;"></div>
    <div class="service-body">
      <div class="icon-box">${robotIcon(icon)}</div>
      <h3>${t}</h3>
      <p>${d}</p>
      <a href="#contact" class="link">Learn more →</a>
    </div>
  </div>`).join('');

// Click / tap interaction: a quick attentive "blink" plays independently of
// the continuous idle motion, so the bot visibly reacts to being tapped —
// works identically for mouse clicks and touch taps via pointerdown.
document.querySelectorAll('#servicesGrid .icon-box').forEach(box => {
  box.addEventListener('pointerdown', () => {
    box.classList.remove('rb-blink');
    void box.offsetWidth; // restart animation if tapped again mid-cycle
    box.classList.add('rb-blink');
    setTimeout(() => box.classList.remove('rb-blink'), 600);
  });
});

document.getElementById('industryScroll').innerHTML = industries.map(([t,d,img]) => `
  <div class="industry-chip reveal">
    <div class="industry-thumb"><img src="${img}" alt="${t}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=FALLBACK_IMG;"></div>
    <div class="industry-body"><b>${t}</b><span>${d}</span></div>
  </div>`).join('');

document.getElementById('portfolioGrid').innerHTML = portfolio.map(([t,tag,img]) => `
  <div class="port-card reveal">
    <div class="port-thumb">
      <img src="${img}" alt="${t}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=FALLBACK_IMG;">
      <span class="tag">${tag}</span>
    </div>
    <div class="port-body"><h4>${t}</h4><span>Case study available</span></div>
  </div>`).join('');

document.getElementById('caseGrid').innerHTML = caseStudies.map(([m,d,img]) => `
  <div class="case-card reveal">
    <div class="case-thumb"><img src="${img}" alt="Growth result ${m}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=FALLBACK_IMG;"></div>
    <div class="case-body">
      <div class="case-metric">${m}</div>
      <h4>Result achieved</h4>
      <p>${d}</p>
      <a href="#contact">Read the full story →</a>
    </div>
  </div>`).join('');

document.getElementById('testiSlides').innerHTML = testimonials.map(([q,n,r,img],i) => `
  <div class="testi-slide ${i===0?'active':''}" data-i="${i}">
    <p class="testi-quote">"${q}"</p>
    <div class="testi-person"><div class="testi-avatar"><img src="${img}" alt="${n}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=FALLBACK_IMG;"></div><div style="text-align:left;"><b style="display:block; font-size:14.5px;">${n}</b><span style="font-size:13px; color:var(--gray-500);">${r}</span></div></div>
  </div>`).join('');
document.getElementById('testiDots').innerHTML = testimonials.map((_,i) => `<button class="${i===0?'active':''}" data-i="${i}" aria-label="Testimonial ${i+1}"></button>`).join('');

document.getElementById('faqList').innerHTML = faqs.map(([q,a],i) => `
  <div class="faq-item reveal" data-i="${i}">
    <div class="faq-q" role="button" tabindex="0" aria-expanded="false" aria-controls="faqA${i}">${q}<span class="faq-icon">${iconWrap("M12 5v14M5 12h14")}</span></div>
    <div class="faq-a" id="faqA${i}"><p>${a}</p></div>
  </div>`).join('');

// ---- Interactions ----
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (!input.checkValidity()) { input.reportValidity(); return; }
  dhToast(`Subscribed! We'll send updates to ${input.value}.`);
  newsletterForm.reset();
});

const mobileToggle = document.getElementById('mobileToggle');
const mobileMenuEl = document.getElementById('mobileMenu');
mobileToggle.addEventListener('click', () => {
  const isOpen = mobileMenuEl.classList.toggle('open');
  mobileToggle.classList.toggle('open', isOpen);
  mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
mobileMenuEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenuEl.classList.remove('open');
  mobileToggle.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
}));

// Sticky nav scrolled state + scroll progress bar
const navbar = document.getElementById('navbar');
const navProgress = document.getElementById('navProgress');
function onScroll(){
  navbar.classList.toggle('scrolled', window.scrollY > 12);
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  navProgress.style.width = pct + '%';
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// Liquid "goo" highlight: a leading blob snaps toward the hovered link
// while a slightly slower trailing blob is still catching up — the SVG
// goo filter fuses the two into one stretchy, molten shape mid-transit.
const navLinksEl = document.getElementById('navLinks');
const blobLead = document.getElementById('navBlobLead');
const blobTrail = document.getElementById('navBlobTrail');
function moveBlob(el){
  const wrapRect = navLinksEl.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  const left = r.left - wrapRect.left;
  const width = r.width;
  blobLead.style.transform = `translateX(${left}px)`;
  blobLead.style.width = width + 'px';
  // trail follows on a longer transition (set above in CSS), so during
  // fast moves it lags behind and the goo filter melts it into a streak
  blobTrail.style.transform = `translateX(${left}px)`;
  blobTrail.style.width = width + 'px';
  navLinksEl.classList.add('active');
}
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('mouseenter', () => moveBlob(a));
  a.addEventListener('focus', () => moveBlob(a));
});
navLinksEl.addEventListener('mouseleave', () => navLinksEl.classList.remove('active'));
navLinksEl.addEventListener('focusout', (e) => {
  if(!navLinksEl.contains(e.relatedTarget)) navLinksEl.classList.remove('active');
});

// Subtle magnetic pull: nav link labels drift a couple of px toward the
// cursor as it passes, then settle back — a quiet, tactile, high-end touch.
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('mousemove', (e) => {
      const r = a.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width/2)) * 0.18;
      const dy = (e.clientY - (r.top + r.height/2)) * 0.18;
      a.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    a.addEventListener('mouseleave', () => { a.style.transform = ''; });
  });
}

// FAQ accordion (mouse + keyboard accessible)
function toggleFaq(item){
  const q = item.querySelector('.faq-q');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight = null;
    i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if(!open){
    item.classList.add('open');
    const a = item.querySelector('.faq-a');
    a.style.maxHeight = a.scrollHeight + 'px';
    q.setAttribute('aria-expanded', 'true');
  }
}
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => toggleFaq(item));
  q.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleFaq(item); }
  });
});

// Testimonial carousel
let testiIndex = 0;
function showTesti(i){
  document.querySelectorAll('.testi-slide').forEach(s => s.classList.toggle('active', +s.dataset.i === i));
  document.querySelectorAll('.testi-dots button').forEach(b => b.classList.toggle('active', +b.dataset.i === i));
  testiIndex = i;
}
document.querySelectorAll('.testi-dots button').forEach(b => b.addEventListener('click', () => showTesti(+b.dataset.i)));
setInterval(() => showTesti((testiIndex+1) % testimonials.length), 6000);

// Note: cascading scroll-reveal animation removed — content displays immediately.
// Motion is now scoped to the navigation bar and the ambient background only.

// Animated counters
const counters = document.querySelectorAll('.stat-num');
const cio = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, Math.round(target/40));
      const timer = setInterval(() => {
        cur += step;
        if(cur >= target){ cur = target; clearInterval(timer); }
        el.textContent = cur + suffix;
      }, 30);
      cio.unobserve(el);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => cio.observe(c));

// ============================================================
// HERO INTERACTIVE ANIMATION — "Circuit Grid"
// A faint architectural grid sits behind the headline like a PCB
// silkscreen, with a handful of right-angled "trace" paths snapped to
// that grid — no floating nodes drifting through open space, only
// fixed geometry. Small points of light travel continuously along
// each trace like current flowing through a circuit. Moving the
// cursor brightens whichever grid lines and traces pass nearby;
// clicking or tapping finds the closest trace and fires a bright
// surge of current racing outward from that exact point in both
// directions, plus a quick radial flash at the tap location. The grid
// and traces are static geometry recomputed only on resize, so every
// frame just redraws a small fixed set of line segments and a few
// moving dots — cheaper than either of the previous two hero
// backgrounds. Reduced-motion visitors get one static frame of the
// grid and traces with no listeners attached.
// ============================================================
(function(){
  const heroSection = document.querySelector('.hero');
  const canvas = document.getElementById('heroAurora');
  if(!heroSection || !canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  const GRID_COLOR  = [96, 165, 250];  // soft sky blue — base grid
  const TRACE_COLOR = [124, 58, 237];  // purple-500 — circuit traces
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;
  const rand = (a,b) => a + Math.random()*(b-a);
  const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
  const easeOutCubic = t => 1 - Math.pow(1-t, 3);

  let W = 0, H = 0, dpr = 1;
  let spacing = 72, cols = 0, rows = 0;
  let traces = [];
  let surges = [];
  let flashes = [];
  let raf = null, lastT = null;
  const pointer = { x:0, y:0, active:false, alpha:0, fadeTimer:null };

  const gridPt = (gx, gy) => ({ x: gx*spacing, y: gy*spacing });

  function buildTraces(){
    cols = Math.max(2, Math.round(W/spacing));
    rows = Math.max(2, Math.round(H/spacing));
    const count = clamp(Math.round((W*H)/62000), isCoarsePointer ? 7 : 10, isCoarsePointer ? 13 : 20);
    traces = new Array(count).fill(0).map(() => {
      let gx = Math.round(rand(0,cols)), gy = Math.round(rand(0,rows));
      const pts = [gridPt(gx,gy)];
      const hops = Math.round(rand(2,4));
      let horizontal = Math.random() < 0.5;
      for(let h=0; h<hops; h++){
        const delta = Math.round(rand(1,3)) * (Math.random() < 0.5 ? -1 : 1);
        if(horizontal) gx = clamp(gx+delta, 0, cols); else gy = clamp(gy+delta, 0, rows);
        pts.push(gridPt(gx,gy));
        horizontal = !horizontal;
      }
      const segLens = [];
      let total = 0;
      for(let i=1; i<pts.length; i++){
        const d = Math.hypot(pts[i].x-pts[i-1].x, pts[i].y-pts[i-1].y);
        segLens.push(d); total += d;
      }
      return { pts, segLens, total: Math.max(total,1), pulseT: rand(0,1), speed: rand(0.09,0.16) };
    });
  }

  function resize(){
    const rect = heroSection.getBoundingClientRect();
    W = Math.max(1, rect.width);
    H = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W*dpr);
    canvas.height = Math.round(H*dpr);
    canvas.style.width = W+'px';
    canvas.style.height = H+'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    spacing = clamp(Math.round(W/16), 46, 84);
    buildTraces();
  }

  function localXY(clientX, clientY){
    const rect = canvas.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function pointOnTrace(trace, t){
    const target = clamp(t,0,1) * trace.total;
    let acc = 0;
    for(let i=0; i<trace.segLens.length; i++){
      const segLen = trace.segLens[i];
      if(target <= acc+segLen || i === trace.segLens.length-1){
        const localT = segLen > 0 ? clamp((target-acc)/segLen, 0, 1) : 0;
        const a = trace.pts[i], b = trace.pts[i+1];
        return { x: a.x + (b.x-a.x)*localT, y: a.y + (b.y-a.y)*localT };
      }
      acc += segLen;
    }
    return trace.pts[trace.pts.length-1];
  }

  function distToSeg(px,py, ax,ay, bx,by){
    const dx = bx-ax, dy = by-ay;
    const lenSq = dx*dx + dy*dy;
    let t = lenSq > 0 ? ((px-ax)*dx + (py-ay)*dy) / lenSq : 0;
    t = clamp(t, 0, 1);
    return Math.hypot(px - (ax+dx*t), py - (ay+dy*t));
  }

  function traceProximity(trace, px, py){
    let best = Infinity, bestT = 0, acc = 0;
    for(let i=0; i<trace.segLens.length; i++){
      const a = trace.pts[i], b = trace.pts[i+1];
      const d = distToSeg(px,py, a.x,a.y, b.x,b.y);
      if(d < best){
        best = d;
        const dx = b.x-a.x, dy = b.y-a.y, lenSq = dx*dx+dy*dy;
        const segT = lenSq > 0 ? clamp(((px-a.x)*dx + (py-a.y)*dy)/lenSq, 0, 1) : 0;
        bestT = (acc + segT*trace.segLens[i]) / trace.total;
      }
      acc += trace.segLens[i];
    }
    return { dist: best, t: bestT };
  }

  function spawnClick(x, y){
    if(flashes.length >= 2) flashes.shift();
    flashes.push({ x, y, birth: performance.now(), duration: 650 });
    let nearest = null, best = Infinity, bestT = 0;
    traces.forEach(tr => {
      const { dist, t } = traceProximity(tr, x, y);
      if(dist < best){ best = dist; nearest = tr; bestT = t; }
    });
    if(nearest){
      if(surges.length >= 8) surges.splice(0, surges.length-7);
      surges.push({ trace: nearest, t: bestT, dir: 1, speed: rand(0.9,1.3) });
      surges.push({ trace: nearest, t: bestT, dir: -1, speed: rand(0.9,1.3) });
    }
  }

  function update(dt, now){
    pointer.alpha += ((pointer.active ? 1 : 0) - pointer.alpha) * Math.min(1, dt*5);

    traces.forEach(tr => {
      tr.pulseT += tr.speed*dt;
      if(tr.pulseT > 1) tr.pulseT -= 1;
    });

    surges.forEach(s => { s.t += s.dir*s.speed*dt; });
    surges = surges.filter(s => s.t > -0.02 && s.t < 1.02);

    flashes = flashes.filter(f => now - f.birth < f.duration);
  }

  function draw(now){
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;

    // base grid — brightens near the cursor and near a fresh click
    for(let gx=0; gx<=cols; gx++){
      const x = gx*spacing;
      let a = 0.05;
      if(pointer.alpha > 0.01) a += (1 - clamp(Math.abs(x-pointer.x)/150,0,1)) * 0.16 * pointer.alpha;
      flashes.forEach(f => { const tt = clamp((now-f.birth)/f.duration,0,1); a += (1-clamp(Math.abs(x-f.x)/220,0,1)) * (1-tt) * 0.18; });
      ctx.strokeStyle = rgba(GRID_COLOR, Math.min(a, 0.32));
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
    }
    for(let gy=0; gy<=rows; gy++){
      const y = gy*spacing;
      let a = 0.05;
      if(pointer.alpha > 0.01) a += (1 - clamp(Math.abs(y-pointer.y)/150,0,1)) * 0.16 * pointer.alpha;
      flashes.forEach(f => { const tt = clamp((now-f.birth)/f.duration,0,1); a += (1-clamp(Math.abs(y-f.y)/220,0,1)) * (1-tt) * 0.18; });
      ctx.strokeStyle = rgba(GRID_COLOR, Math.min(a, 0.32));
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
    }

    // circuit traces + their traveling current
    ctx.lineWidth = 1.4;
    traces.forEach(tr => {
      let boost = 0;
      if(pointer.alpha > 0.01){
        const { dist } = traceProximity(tr, pointer.x, pointer.y);
        boost = Math.max(boost, (1 - clamp(dist/120,0,1)) * 0.4 * pointer.alpha);
      }
      ctx.strokeStyle = rgba(TRACE_COLOR, 0.16 + boost);
      ctx.beginPath();
      tr.pts.forEach((p,i) => i===0 ? ctx.moveTo(p.x,p.y) : ctx.lineTo(p.x,p.y));
      ctx.stroke();

      const pt = pointOnTrace(tr, tr.pulseT);
      const grad = ctx.createRadialGradient(pt.x,pt.y,0,pt.x,pt.y,7);
      grad.addColorStop(0, rgba([255,255,255], 0.85));
      grad.addColorStop(0.5, rgba(TRACE_COLOR, 0.55));
      grad.addColorStop(1, rgba(TRACE_COLOR, 0));
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(pt.x,pt.y,7,0,Math.PI*2); ctx.fill();
    });

    // click-triggered current surges racing along a trace
    surges.forEach(s => {
      const fade = 1 - Math.abs(s.t - clamp(s.t,0,1)) * 40;
      const pt = pointOnTrace(s.trace, s.t);
      const grad = ctx.createRadialGradient(pt.x,pt.y,0,pt.x,pt.y,10);
      grad.addColorStop(0, rgba([255,255,255], 0.95*Math.max(0,fade)));
      grad.addColorStop(0.5, rgba(TRACE_COLOR, 0.7*Math.max(0,fade)));
      grad.addColorStop(1, rgba(TRACE_COLOR, 0));
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(pt.x,pt.y,10,0,Math.PI*2); ctx.fill();
    });

    // radial flash at the tap point
    flashes.forEach(f => {
      const tt = clamp((now-f.birth)/f.duration, 0, 1);
      const r = easeOutCubic(tt) * 70;
      const grad = ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,Math.max(1,r));
      grad.addColorStop(0, rgba([255,255,255], (1-tt)*0.5));
      grad.addColorStop(1, rgba(TRACE_COLOR, 0));
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(f.x,f.y,Math.max(1,r),0,Math.PI*2); ctx.fill();
    });

    // soft cursor glow
    if(pointer.alpha > 0.01){
      const grad = ctx.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,100);
      grad.addColorStop(0, rgba([255,255,255], 0.1*pointer.alpha));
      grad.addColorStop(1, rgba(GRID_COLOR, 0));
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(pointer.x,pointer.y,100,0,Math.PI*2); ctx.fill();
    }
  }

  function frame(now){
    if(lastT === null) lastT = now;
    const dt = Math.min(0.05, (now - lastT)/1000);
    lastT = now;
    update(dt, now);
    draw(now);
    raf = requestAnimationFrame(frame);
  }

  function drawStaticFrame(){
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    for(let gx=0; gx<=cols; gx++){ ctx.strokeStyle = rgba(GRID_COLOR,0.06); ctx.beginPath(); ctx.moveTo(gx*spacing,0); ctx.lineTo(gx*spacing,H); ctx.stroke(); }
    for(let gy=0; gy<=rows; gy++){ ctx.strokeStyle = rgba(GRID_COLOR,0.06); ctx.beginPath(); ctx.moveTo(0,gy*spacing); ctx.lineTo(W,gy*spacing); ctx.stroke(); }
    ctx.lineWidth = 1.4;
    traces.forEach(tr => {
      ctx.strokeStyle = rgba(TRACE_COLOR, 0.18);
      ctx.beginPath();
      tr.pts.forEach((p,i) => i===0 ? ctx.moveTo(p.x,p.y) : ctx.lineTo(p.x,p.y));
      ctx.stroke();
    });
  }

  resize();

  if(reduceMotion){
    drawStaticFrame();
  } else {
    // Listeners live on the whole hero section, not just the canvas —
    // the headline, paragraph, buttons, and badge all sit visually above
    // the canvas, so binding only to the canvas would miss clicks/moves
    // over most of the section. Pointer events bubble up through those
    // elements to the section itself, so this reaches every pixel of the
    // hero without stealing normal button/link behavior.
    heroSection.addEventListener('pointerdown', (e) => {
      const { x, y } = localXY(e.clientX, e.clientY);
      spawnClick(x, y);
    }, { passive:true });

    heroSection.addEventListener('pointermove', (e) => {
      const { x, y } = localXY(e.clientX, e.clientY);
      pointer.x = x; pointer.y = y; pointer.active = true;
      if(pointer.fadeTimer) clearTimeout(pointer.fadeTimer);
      pointer.fadeTimer = setTimeout(() => { pointer.active = false; }, 900);
    }, { passive:true });

    heroSection.addEventListener('pointerleave', () => { pointer.active = false; }, { passive:true });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    document.addEventListener('visibilitychange', () => {
      if(document.hidden){ if(raf) cancelAnimationFrame(raf); raf = null; lastT = null; }
      else if(!raf){ raf = requestAnimationFrame(frame); }
    });

    raf = requestAnimationFrame(frame);
  }
})();

// ============================================================
// SERVICES MARQUEE — continuous right-to-left logo strip below
// the Hero. Built on native horizontal scrolling (so touch drag,
// trackpad, and momentum scrolling all work for free) with a
// requestAnimationFrame loop that auto-advances scrollLeft and
// silently wraps once a full duplicate set has scrolled past —
// giving a seamless infinite loop with no visible jump. Eases to
// a slower speed on hover (desktop) and yields entirely to the
// user the moment they touch or drag it.
// ============================================================
(function(){
  const viewport = document.getElementById('marqueeViewport');
  const track = document.getElementById('marqueeTrack');
  if(!viewport || !track) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MARQUEE_SERVICES = [
    { label:'Google Ads', fill:true, bg:'#fff', icon:`
      <svg viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>` },
    { label:'Meta Ads', fill:false, bg:'linear-gradient(135deg,#0064E0,#0081FB)', icon:`
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round">
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.229-8-5.096 0-5.096 8 0 8 5.096 0 7.133-8 12.229-8z"/>
      </svg>` },
    { label:'SEO', fill:false, bg:'rgba(37,99,235,0.08)', icon:`
      <svg viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5"/>
        <path d="M20 20l-4.35-4.35"/>
        <path d="M7 11.6l2-2 1.8 1.6L13.6 8"/>
      </svg>` },
    { label:'Canva', fill:true, bg:'transparent', icon:`
      <svg viewBox="0 0 32 32">
        <defs><linearGradient id="canvaGradMq" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#00C4CC"/><stop offset="0.5" stop-color="#7D2AE8"/><stop offset="1" stop-color="#EE2A7B"/>
        </linearGradient></defs>
        <rect width="32" height="32" rx="9" fill="url(#canvaGradMq)"/>
        <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.7 0 3.2-.5 4.5-1.4.4-.3.4-.9 0-1.2-.3-.2-.6-.2-.9 0-1 .7-2.3 1.1-3.6 1.1-3.6 0-6.5-2.9-6.5-6.5S12.4 9.5 16 9.5c2.9 0 5.4 1.9 6.2 4.5.1.4.5.6.9.5.4-.1.6-.5.5-.9C22.6 10.2 19.6 8 16 8z" fill="#fff"/>
      </svg>` },
    { label:'Website Development', fill:false, bg:'rgba(37,99,235,0.08)', icon:`
      <svg viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2.5"/>
        <path d="M3 9h18"/>
        <path d="M9.5 13.2l-1.8 1.8 1.8 1.8M14.5 13.2l1.8 1.8-1.8 1.8"/>
      </svg>` }
  ];

  function pillHtml(s){
    const iconClass = s.fill ? 'pill-icon icon-fill' : 'pill-icon';
    const bgStyle = s.bg && s.bg !== 'transparent' ? ` style="background:${s.bg};"` : '';
    return `<div class="service-pill"><span class="${iconClass}"${bgStyle}>${s.icon}</span><span class="pill-label">${s.label}</span></div>`;
  }

  // Each "set" repeats the 5 services twice so a single set is comfortably
  // wider than any viewport; two identical sets back-to-back let the loop
  // wrap by subtracting exactly one set's width with no visible seam.
  const oneSet = MARQUEE_SERVICES.concat(MARQUEE_SERVICES).map(pillHtml).join('');
  track.innerHTML = `
    <div class="marquee-group">${oneSet}</div>
    <div class="marquee-group" aria-hidden="true">${oneSet}</div>`;

  if(reduceMotion) return; // native overflow-x scroll still works without the auto-advance loop

  let setWidth = 0;
  function measure(){
    const firstSet = track.querySelector('.marquee-group');
    setWidth = firstSet ? firstSet.getBoundingClientRect().width : 0;
  }
  measure();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 200);
  });

  const BASE_SPEED = 42; // px/second
  const HOVER_SPEED = 11; // slowed, not fully stopped, on desktop hover
  let speed = BASE_SPEED;
  let targetSpeed = BASE_SPEED;
  let userActive = false;
  let idleTimer = null;
  let lastT = null;
  let raf = null;

  function markUserActive(){
    userActive = true;
    if(idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { userActive = false; }, 700);
  }

  viewport.addEventListener('pointerdown', () => { userActive = true; viewport.classList.add('dragging'); if(idleTimer) clearTimeout(idleTimer); });
  viewport.addEventListener('pointerup', () => { viewport.classList.remove('dragging'); markUserActive(); });
  viewport.addEventListener('pointercancel', () => { viewport.classList.remove('dragging'); markUserActive(); });
  viewport.addEventListener('touchstart', () => { userActive = true; if(idleTimer) clearTimeout(idleTimer); }, { passive:true });
  viewport.addEventListener('touchend', markUserActive, { passive:true });
  viewport.addEventListener('wheel', markUserActive, { passive:true });
  viewport.addEventListener('mouseenter', () => { targetSpeed = HOVER_SPEED; });
  viewport.addEventListener('mouseleave', () => { targetSpeed = BASE_SPEED; });

  function frame(now){
    if(lastT === null) lastT = now;
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    speed += (targetSpeed - speed) * Math.min(1, dt * 4);
    if(!userActive){ viewport.scrollLeft += speed * dt; }
    if(setWidth > 0){
      if(viewport.scrollLeft >= setWidth) viewport.scrollLeft -= setWidth;
      else if(viewport.scrollLeft < 0) viewport.scrollLeft += setWidth;
    }
    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  document.addEventListener('visibilitychange', () => {
    if(document.hidden){ if(raf) cancelAnimationFrame(raf); raf = null; lastT = null; }
    else if(!raf){ raf = requestAnimationFrame(frame); }
  });
})();

// ============================================================
// AI CHAT WIDGET — "Digital Hub Assistant"
// A self-contained, rule-based conversational engine: no external
// API calls (so no key ever ships in page source), just a fast,
// keyword/intent matcher layered over the same services/FAQ data
// already rendered on the page. It handles greetings, service
// questions, FAQs, pricing deflection, a guided lead-capture flow
// (name → email → phone → goal) that quietly pre-fills the real
// contact form, and human hand-off with direct contact details.
// ============================================================
(function(){
  const widget = document.getElementById('chatWidget');
  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const messagesEl = document.getElementById('chatMessages');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const minimizeBtn = document.getElementById('chatMinimize');
  const badge = document.getElementById('chatBadge');
  const teaser = document.getElementById('chatTeaser');
  const teaserClose = document.getElementById('teaserClose');
  if(!widget || typeof services === 'undefined' || typeof faqs === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BIZ = { phone:'+91 96296 32897', phoneHref:'tel:+919629632897', email:'hello@digitalhub.agency' };

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // Maps free-text keywords to an index in the existing `services` array.
  // Order matters — more specific phrases (e.g. "local seo") are checked
  // before their broader parent ("seo") so they win the match.
  const SERVICE_KEYWORDS = [
    { idx:1,  keys:['landing page'] },
    { idx:3,  keys:['local seo','map pack','google maps ranking','near me search'] },
    { idx:0,  keys:['website','web dev','web design','new site','site redesign'] },
    { idx:2,  keys:['seo','search engine','organic traffic','rank higher','ranking'] },
    { idx:5,  keys:['meta ads','facebook ads','instagram ads','fb ads','ig ads'] },
    { idx:4,  keys:['google ads','ppc','adwords','paid search','search ads'] },
    { idx:6,  keys:['social media','social posts','content calendar','instagram management'] },
    { idx:7,  keys:['google business profile','gbp','google my business','gmb','map listing'] },
    { idx:9,  keys:['branding','brand identity','logo design','brand strategy'] },
    { idx:10, keys:['content marketing','blog','content strategy','copywriting'] },
    { idx:8,  keys:['graphic design','design assets','visual design'] },
    { idx:11, keys:['lead generation','more leads','fill my pipeline','sales pipeline'] }
  ];
  const SERVICE_ORDER = [0,1,2,3,4,5,6,9,10,7]; // the 10 core services, in requirement order
  const SERVICE_LIST_HTML = '<ul>' + SERVICE_ORDER.map(i => `<li>${escapeHtml(services[i][0])}</li>`).join('') + '</ul>';

  // Lightweight keyword → FAQ index map, reusing the copy already in `faqs`.
  const FAQ_KEYWORDS = [
    [/how (long|soon)|when will i see|results? timeline/],
    [/industries? (outside|not listed)|other industr|different industry/],
    [/start with (just )?one|single service|just one service/],
    [/what.?s included|consultation include|what happens (in|during) the consultation|free audit/],
    [/contract|long.?term|lock.?in|commitment|month.to.month/],
    [/direct access|strategist|point of contact|dashboard|reporting access/]
  ];
  function matchFaq(text){
    for(let i=0;i<FAQ_KEYWORDS.length;i++){
      if(FAQ_KEYWORDS[i].some(re => re.test(text))) return i;
    }
    return -1;
  }
  function matchService(text){
    for(const s of SERVICE_KEYWORDS){
      if(s.keys.some(k => text.includes(k))) return s.idx;
    }
    return -1;
  }
  function serviceAnswer(idx){
    const [title, desc] = services[idx];
    return `<b>${escapeHtml(title)}</b> — ${escapeHtml(desc)} Want details on approach or timelines? I can set up a free consultation with our team.`;
  }

  const DEFAULT_QUICK_REPLIES = [
    { label:'Our Services', value:'what services do you offer' },
    { label:'Book Free Consultation', value:'book a free consultation' },
    { label:'Pricing', value:'how much does it cost' },
    { label:'Talk to a Human', value:'talk to a human' }
  ];

  const FALLBACKS = [
    `I'm not 100% sure I followed that — could you rephrase? I'm best with questions about our services, pricing, or booking a consultation.`,
    `Good question — I don't have a specific answer for that one, but I can connect you with our team, or you can ask about any of our services.`,
    `I want to get this right for you. Could you tell me a bit more, or pick one of the options below?`
  ];
  let lastFallback = -1;
  function pickFallback(){
    if(FALLBACKS.length === 1) return FALLBACKS[0];
    let i = Math.floor(Math.random()*FALLBACKS.length);
    while(i === lastFallback) i = Math.floor(Math.random()*FALLBACKS.length);
    lastFallback = i;
    return FALLBACKS[i];
  }

  // ---- Guided lead-capture state machine ----
  let convState = null; // null | 'name' | 'email' | 'phone' | 'requirements'
  let lead = {};

  function fillContactForm(l){
    try{
      const parts = (l.name || '').trim().split(/\s+/);
      const first = parts.shift() || '';
      const last = parts.join(' ');
      const set = (id, val) => { const el = document.getElementById(id); if(el && val) el.value = val; };
      set('fname', first); set('lname', last); set('email', l.email); set('phone', l.phone); set('msg', l.requirements);
    }catch{ /* non-critical — chat still works without the form pre-fill */ }
  }
  function scrollToContact(){
    closePanel();
    const el = document.getElementById('contact');
    if(el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'start' });
  }

  function getResponse(rawText){
    const text = rawText.trim();
    const norm = text.toLowerCase();

    // Active lead-capture flow takes priority over general NLU
    if(convState === 'name'){
      lead.name = text;
      convState = 'email';
      return { html:`Nice to meet you, ${escapeHtml(text.split(/\s+/)[0])}! What's the best email to reach you at?` };
    }
    if(convState === 'email'){
      const m = DigitalHubValidators.extractEmail(text);
      if(!m) return { html:`That doesn't quite look like an email address — mind double-checking it? (e.g. name@company.com)` };
      lead.email = m;
      convState = 'phone';
      return { html:`Got it. And a phone number where we can reach you? (Type "skip" if you'd rather we just email.)` };
    }
    if(convState === 'phone'){
      if(!/^skip$/i.test(text)) lead.phone = text;
      convState = 'requirements';
      return { html:`Last thing — in a sentence, what are you hoping to achieve? (e.g. "more local leads", "a new website", "better ad performance")` };
    }
    if(convState === 'requirements'){
      lead.requirements = text;
      convState = null;
      fillContactForm(lead);
      return {
        html:`Perfect, thank you! Here's what I've got:<br><br>`
          + `<b>Email:</b> ${escapeHtml(lead.email || '—')}<br>`
          + (lead.phone ? `<b>Phone:</b> ${escapeHtml(lead.phone)}<br>` : '')
          + `<b>Goal:</b> ${escapeHtml(lead.requirements)}<br><br>`
          + `I've pre-filled our contact form with these details — just hit "Book Free Consultation" to confirm, and our team will follow up within one business day. 🎉`,
        quickReplies:[
          { label:'Take me to the form', value:'__scroll_contact__' },
          { label:'Ask something else', value:'__reset_topic__' }
        ]
      };
    }

    // Quick-reply-only control tokens
    if(rawText === '__scroll_contact__'){
      scrollToContact();
      return { html:`Scrolled you right to it — your details should already be filled in. 👇` };
    }
    if(rawText === '__reset_topic__'){
      return { html:`Sure thing — what else can I help with?`, quickReplies: DEFAULT_QUICK_REPLIES };
    }

    if(/^(hi|hello|hey|yo|sup|good (morning|afternoon|evening))\b/.test(norm)){
      return { html:`Hey there! 👋 I'm the Digital Hub assistant. I can walk you through our services, answer common questions, or set up a free consultation. What would you like to know?`, quickReplies: DEFAULT_QUICK_REPLIES };
    }
    if(/\b(thanks|thank you|thx|appreciate)\b/.test(norm)){
      return { html:`You're very welcome! Anything else I can help with?`, quickReplies: DEFAULT_QUICK_REPLIES };
    }
    if(/\b(human|real person|representative|an agent|speak to (someone|somebody)|talk to (someone|somebody)|not helpful|frustrat|complain|manager)\b/.test(norm)){
      return {
        html:`Of course — I'll loop in our team. You can reach a real person right away:<br><br>`
          + `📞 <a href="${BIZ.phoneHref}">${BIZ.phone}</a><br>`
          + `✉️ <a href="mailto:${BIZ.email}">${BIZ.email}</a><br><br>`
          + `Or share your details here and we'll call you back.`,
        quickReplies:[{ label:'Have someone call me', value:'book a free consultation' }]
      };
    }
    if(/\b(book|schedule|consult|appointment|free consultation|get started|sign me up|talk to sales|get a quote)\b/.test(norm)){
      convState = 'name';
      lead = {};
      return { html:`I'd love to set that up! It only takes a few seconds — what's your name?` };
    }
    if(/\b(price|pricing|cost|how much|budget|fee|rates?)\b/.test(norm)){
      return {
        html:`Great question — pricing depends on your goals, channels, and scope, so we don't publish flat rates. The good news: our free consultation includes a full audit and a clear proposal, no obligation. Want me to set that up?`,
        quickReplies:[{ label:'Yes, book a consultation', value:'book a free consultation' }, { label:'See our services first', value:'what services do you offer' }]
      };
    }
    if(/\b(services|what do you (do|offer)|what can you (do|help)|help with)\b/.test(norm)){
      return { html:`We're a full-service digital marketing agency. Here's what we cover:${SERVICE_LIST_HTML}Ask me about any of these, or I can set up a free consultation to map out the right mix for you.`, quickReplies: DEFAULT_QUICK_REPLIES };
    }
    const sIdx = matchService(norm);
    if(sIdx > -1){
      return { html: serviceAnswer(sIdx), quickReplies:[{ label:'Book a free consultation', value:'book a free consultation' }, { label:'See other services', value:'what services do you offer' }] };
    }
    const fIdx = matchFaq(norm);
    if(fIdx > -1){
      return { html: escapeHtml(faqs[fIdx][1]), quickReplies: DEFAULT_QUICK_REPLIES };
    }
    if(/\b(phone|call|number|email|contact|address|located|location|office)\b/.test(norm)){
      return {
        html:`You can reach us at:<br>📞 <a href="${BIZ.phoneHref}">${BIZ.phone}</a><br>✉️ <a href="mailto:${BIZ.email}">${BIZ.email}</a><br>📍 100 Market Street, Suite 400<br><br>Or I can set up a free consultation directly.`,
        quickReplies:[{ label:'Book a free consultation', value:'book a free consultation' }]
      };
    }

    return { html: pickFallback(), quickReplies: DEFAULT_QUICK_REPLIES };
  }

  // ---- Rendering ----
  function scrollToBottom(){ messagesEl.scrollTop = messagesEl.scrollHeight; }

  const BOT_AVATAR = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.3"><path d="M12 2a4 4 0 0 1 4 4v1h.5A2.5 2.5 0 0 1 19 9.5v6A2.5 2.5 0 0 1 16.5 18h-9A2.5 2.5 0 0 1 5 15.5v-6A2.5 2.5 0 0 1 7.5 7H8V6a4 4 0 0 1 4-4z"/><circle cx="9" cy="12" r="1" fill="#fff"/><circle cx="15" cy="12" r="1" fill="#fff"/></svg>`;

  function addBotMessage(html, quickReplies){
    const wrap = document.createElement('div');
    wrap.className = 'msg msg-bot';
    wrap.innerHTML = `<div class="msg-avatar">${BOT_AVATAR}</div><div class="msg-col"><div class="msg-bubble">${html}</div>${quickReplies && quickReplies.length ? renderQuickReplies(quickReplies) : ''}</div>`;
    messagesEl.appendChild(wrap);
    if(quickReplies && quickReplies.length){
      wrap.querySelectorAll('.quick-reply-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          wrap.querySelectorAll('.quick-reply-btn').forEach(b => b.disabled = true);
          handleSend(btn.dataset.value, btn.textContent);
        }, { once:true });
      });
    }
    scrollToBottom();
  }
  function renderQuickReplies(list){
    return `<div class="quick-replies">${list.map(q => `<button type="button" class="quick-reply-btn" data-value="${escapeHtml(q.value)}">${escapeHtml(q.label)}</button>`).join('')}</div>`;
  }
  function addUserMessage(text){
    const wrap = document.createElement('div');
    wrap.className = 'msg msg-user';
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = text;
    wrap.appendChild(bubble);
    messagesEl.appendChild(wrap);
    scrollToBottom();
  }
  function showTyping(){
    const wrap = document.createElement('div');
    wrap.className = 'msg msg-bot';
    wrap.id = 'chatTypingIndicator';
    wrap.innerHTML = `<div class="msg-avatar">${BOT_AVATAR}</div><div class="msg-col"><div class="msg-bubble typing-bubble"><span></span><span></span><span></span></div></div>`;
    messagesEl.appendChild(wrap);
    scrollToBottom();
  }
  function hideTyping(){
    const el = document.getElementById('chatTypingIndicator');
    if(el) el.remove();
  }

  function botReply(userRawText){
    showTyping();
    const delay = reduceMotion ? 120 : Math.min(1500, 480 + userRawText.length * 10);
    setTimeout(() => {
      hideTyping();
      const res = getResponse(userRawText);
      addBotMessage(res.html, res.quickReplies);
    }, delay);
  }

  function updateSendState(){ sendBtn.disabled = !input.value.trim(); }

  function handleSend(rawValue, displayLabel){
    const value = (rawValue || '').trim();
    if(!value) return;
    addUserMessage(displayLabel || value);
    input.value = '';
    input.style.height = 'auto';
    updateSendState();
    botReply(value);
  }

  form.addEventListener('submit', (e) => { e.preventDefault(); handleSend(input.value); });
  input.addEventListener('input', () => {
    updateSendState();
    input.style.height = 'auto';
    input.style.height = Math.min(90, input.scrollHeight) + 'px';
  });
  input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      if(input.value.trim()) handleSend(input.value);
    }
  });
  updateSendState();

  // ---- Open / close ----
  let chatStarted = false;
  function openPanel(){
    widget.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    hideTeaser();
    badge.classList.add('hide');
    if(!chatStarted){
      chatStarted = true;
      addBotMessage(`Hi! 👋 I'm the Digital Hub assistant. I can walk you through our services, answer questions, or set up a free consultation — what can I help with?`, DEFAULT_QUICK_REPLIES);
    }
    if(!reduceMotion) setTimeout(() => input.focus(), 350); else input.focus();
  }
  function closePanel(){
    widget.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  }
  toggle.addEventListener('click', () => {
    if (widget.classList.contains('open')) { closePanel(); } else { openPanel(); }
  });
  toggle.addEventListener('pointerdown', () => {
    toggle.classList.remove('rb-blink');
    void toggle.offsetWidth;
    toggle.classList.add('rb-blink');
    setTimeout(() => toggle.classList.remove('rb-blink'), 600);
  });
  minimizeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && widget.classList.contains('open')){ closePanel(); toggle.focus(); }
  });

  // ---- Proactive teaser bubble (shown once, dismissible) ----
  function hideTeaser(){ teaser.classList.remove('show'); }
  teaserClose.addEventListener('click', (e) => { e.stopPropagation(); hideTeaser(); });
  teaser.addEventListener('click', () => openPanel());
  if(!reduceMotion){
    setTimeout(() => { if(!widget.classList.contains('open')) teaser.classList.add('show'); }, 5000);
    setTimeout(hideTeaser, 14000);
  }
})();
