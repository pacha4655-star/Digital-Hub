export const homeMarkup = `

<svg width="0" height="0" style="position:absolute;" aria-hidden="true">
  <defs>
    <filter id="navGooFilter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"/>
      <feColorMatrix in="blur" type="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="goo"/>
      <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
    </filter>
  </defs>
</svg>
<a href="#main" class="skip-link">Skip to content</a>
<div id="toast" role="status" aria-live="polite"></div>

<!-- NAVBAR -->
<header id="navbar">
  <div id="navProgress"></div>
  <div class="wrap nav-inner">
    <a href="#" class="logo">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="9" cy="9" r="6" fill="#6D28D9"/>
        <path d="M4 22c0-6 4-9 9-9 6 0 12 3 13-4-1 9-7 15-13 15-5 0-9-1-9-2z" fill="url(#g1)"/>
        <defs><linearGradient id="g1" x1="4" y1="9" x2="26" y2="28"><stop stop-color="#2563EB"/><stop offset="1" stop-color="#6D28D9"/></linearGradient></defs>
      </svg>
      Digital Hub
    </a>
    <nav class="nav-links" id="navLinks">
      <div class="nav-goo" id="navGoo">
        <div class="nav-blob nav-blob-trail" id="navBlobTrail"></div>
        <div class="nav-blob nav-blob-lead" id="navBlobLead"></div>
      </div>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#industries">Industries</a>
      <a href="#case-studies">Case Studies</a>
      <a href="/blog">Blog</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-cta" id="navAuthSlot">
      <a href="/login" class="btn-login">
        <span class="lock-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="10.5" width="16" height="10" rx="2.5"/><path class="lock-shackle" d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3"/></svg></span>
        Log In
      </a>
      <a href="#contact" class="btn btn-primary btn-pill" style="padding:12px 24px; font-size:14px;">
        Book Free Consultation
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
    <button id="mobileToggle" aria-label="Toggle menu" aria-expanded="false">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1F2430" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
  <div id="mobileMenu">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#industries">Industries</a>
    <a href="#case-studies">Case Studies</a>
    <a href="/blog">Blog</a>
    <a href="#faq">FAQ</a>
    <div id="mobileAuthSlot" style="margin-top:6px;">
      <a href="/login" class="btn btn-outline" style="width:100%; margin-bottom:10px; border:none; border-bottom:1px solid var(--gray-100); border-radius:0; justify-content:flex-start; padding-left:4px;">
        <span class="lock-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="10.5" width="16" height="10" rx="2.5"/><path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3"/></svg></span>
        Log In
      </a>
    </div>
    <a href="#contact" class="btn btn-primary" style="width:100%;">Book Free Consultation</a>
  </div>
</header>

<main id="main">

<!-- HERO -->
<section class="hero">
  <div id="bgSheen" aria-hidden="true"></div>
  <div class="hero-bg"></div>
  <canvas class="hero-aurora" id="heroAurora" aria-hidden="true"></canvas>
  <div class="hero-grain" aria-hidden="true"></div>
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow load-in d1"><span class="dot"></span>Full-Service Digital Growth Partner</span>
      <h1 class="load-in d2">One hub for every <span class="grad">growth channel</span> you need.</h1>
      <p class="lead load-in d3">Digital Hub brings web development, SEO, paid ads, and brand strategy together under one accountable team — so your marketing compounds instead of competing with itself.</p>
      <div class="hero-ctas load-in d4">
        <a href="#contact" class="btn btn-primary">Book Your Free Consultation</a>
        <a href="#portfolio" class="btn btn-outline">See Our Work</a>
      </div>
      <div class="hero-trustline load-in d5">
        <div class="avatars"><span></span><span></span><span></span><span></span></div>
        Trusted by 250+ growing businesses across 12 industries
      </div>
    </div>
  </div>
</section>


<!-- SERVICES MARQUEE -->
<section class="marquee-section" aria-label="Services we specialize in">
  <div class="marquee-viewport" id="marqueeViewport" tabindex="0" aria-label="Scrollable list of our core services: Google Ads, Meta Ads, SEO, Canva, and Website Development">
    <div class="marquee-track" id="marqueeTrack"></div>
  </div>
</section>

<!-- ABOUT -->
<section class="section" id="about">
  <div class="wrap about-grid">
    <div class="reveal">
      <div class="about-visual"><img src="https://images.pexels.com/photos/7414106/pexels-photo-7414106.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000" alt="Digital Hub team collaborating in a modern office" loading="lazy"></div>
    </div>
    <div class="reveal">
      <span class="eyebrow"><span class="dot"></span>About Digital Hub</span>
      <h2 class="section-title">A marketing team that acts like your marketing department.</h2>
      <p class="section-sub">We started Digital Hub because growing businesses were tired of piecing together five different vendors for web, SEO, and ads — each with their own reports and none with real accountability. We consolidate the whole growth stack under one strategy and one team you can actually reach.</p>
      <div class="about-stats-row">
        <div class="about-stat"><b>250+</b><span>Projects delivered</span></div>
        <div class="about-stat"><b>98%</b><span>Client retention</span></div>
        <div class="about-stat"><b>12</b><span>Industries served</span></div>
      </div>
    </div>
  </div>

  <div class="wrap" id="portfolio" style="margin-top:64px;">
    <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px; margin-bottom:36px;">
      <div>
        <span class="eyebrow reveal"><span class="dot"></span>Portfolio</span>
        <h2 class="section-title reveal" style="margin-bottom:0;">Recent work across industries.</h2>
      </div>
      <a href="/portfolio" class="btn btn-outline reveal">View All Projects</a>
    </div>
    <div class="grid-3" id="portfolioGrid"></div>
  </div>
</section>

<!-- SERVICES -->
<section class="section" id="services" style="background:var(--surface-veil-2);">
  <div class="wrap">
    <span class="eyebrow reveal"><span class="dot"></span>What We Do</span>
    <h2 class="section-title reveal">Every channel your growth strategy needs.</h2>
    <p class="section-sub reveal" style="margin-bottom:40px;">From first click to closed deal, our services are built to work together — not as isolated line items.</p>
    <div class="grid-3" id="servicesGrid"></div>
  </div>
</section>

<!-- INDUSTRIES -->
<section class="section" id="industries">
  <div class="wrap">
    <span class="eyebrow reveal"><span class="dot"></span>Who We Serve</span>
    <h2 class="section-title reveal">Built for the way your industry actually sells.</h2>
    <p class="section-sub reveal" style="margin-bottom:36px;">We tailor strategy to how your customers actually search, compare, and buy — not a one-size-fits-all playbook.</p>
    <div class="industry-grid reveal" id="industryScroll"></div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="section" style="background:var(--surface-veil-2);">
  <div class="wrap">
    <span class="eyebrow reveal"><span class="dot"></span>Why Digital Hub</span>
    <h2 class="section-title reveal">The difference is accountability.</h2>
    <p class="section-sub reveal" style="margin-bottom:36px;">Most agencies optimize their own retainer. We optimize your pipeline.</p>
    <div class="why-grid">
      <div class="why-card reveal"><b>One accountable team</b><p>A single strategist owns your account end-to-end — no hand-offs, no dropped context between channels.</p></div>
      <div class="why-card reveal"><b>Data-backed decisions</b><p>Every recommendation ties back to a number: cost per lead, close rate, or revenue — not vanity metrics.</p></div>
      <div class="why-card reveal"><b>Transparent reporting</b><p>You see the same live dashboard we do. No sanitized monthly PDF, no guessing what's working.</p></div>
      <div class="why-card reveal"><b>Scales with you</b><p>Start with one service, add channels as you grow — the strategy is built to expand, not restart.</p></div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="section">
  <div class="wrap">
    <span class="eyebrow reveal"><span class="dot"></span>Our Process</span>
    <h2 class="section-title reveal">From first call to compounding growth.</h2>
    <p class="section-sub reveal" style="margin-bottom:44px;">A clear, sequential process — so you always know what happens next.</p>
    <div class="process-line">
      <div class="process-step reveal"><div class="step-num">1</div><h4>Discover</h4><p>We audit your current channels, competitors, and customer journey.</p></div>
      <div class="process-step reveal"><div class="step-num">2</div><h4>Strategy</h4><p>A prioritized growth plan mapped to your actual revenue goals.</p></div>
      <div class="process-step reveal"><div class="step-num">3</div><h4>Build</h4><p>Web, creative, and campaign infrastructure built or optimized.</p></div>
      <div class="process-step reveal"><div class="step-num">4</div><h4>Launch</h4><p>Coordinated go-live across every channel in the plan.</p></div>
      <div class="process-step reveal"><div class="step-num">5</div><h4>Optimize</h4><p>Weekly data reviews and continuous testing to compound results.</p></div>
    </div>
  </div>
</section>

<!-- CASE STUDIES -->
<section class="section" id="case-studies">
  <div class="wrap">
    <span class="eyebrow reveal"><span class="dot"></span>Case Studies</span>
    <h2 class="section-title reveal">Results, not just deliverables.</h2>
    <p class="section-sub reveal" style="margin-bottom:36px;">A sample of outcomes we've driven for clients across our core industries.</p>
    <div class="grid-3" id="caseGrid"></div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="section" style="background:var(--surface-veil-2);">
  <div class="wrap">
    <span class="eyebrow reveal" style="display:flex; justify-content:center; width:fit-content; margin:0 auto 16px;"><span class="dot"></span>Testimonials</span>
    <h2 class="section-title reveal" style="text-align:center;">What our clients say.</h2>
    <div class="testi-wrap reveal" style="margin-top:36px;">
      <div id="testiSlides"></div>
      <div class="testi-dots" id="testiDots"></div>
    </div>
  </div>
</section>

<!-- STATISTICS -->
<section class="section">
  <div class="wrap">
    <div class="stats-band reveal">
      <div class="stats-line"></div>
      <div class="stats-grid">
        <div class="stat-item"><div class="stat-node-dot"></div><div class="stat-num" data-count="250">0</div><div class="stat-label">Projects Delivered</div></div>
        <div class="stat-item"><div class="stat-node-dot"></div><div class="stat-num" data-count="98" data-suffix="%">0</div><div class="stat-label">Client Retention</div></div>
        <div class="stat-item"><div class="stat-node-dot"></div><div class="stat-num" data-count="12" data-suffix="Yrs">0</div><div class="stat-label">Team Experience</div></div>
        <div class="stat-item"><div class="stat-node-dot"></div><div class="stat-num" data-count="40" data-suffix="+">0</div><div class="stat-label">Industries Served</div></div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section" id="faq">
  <div class="wrap" style="max-width:820px;">
    <span class="eyebrow reveal"><span class="dot"></span>FAQ</span>
    <h2 class="section-title reveal">Common questions.</h2>
    <div id="faqList" style="margin-top:24px;"></div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="section" style="padding-top:20px;">
  <div class="wrap">
    <div class="cta-banner reveal">
      <h2 class="font-display" style="font-size:clamp(24px,3.5vw,34px); font-weight:700;">Ready to turn your marketing into a growth engine?</h2>
      <p>Book a free, no-pressure consultation. We'll audit your current channels and show you exactly where the opportunity is.</p>
      <a href="#contact" class="btn btn-white">Book Your Free Consultation</a>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="section" id="contact">
  <div class="wrap contact-grid">
    <div class="reveal">
      <div style="border-radius:20px; overflow:hidden; margin-bottom:28px; height:220px;">
        <img src="https://images.pexels.com/photos/7046168/pexels-photo-7046168.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000" alt="Modern office consultation space" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block;">
      </div>
      <span class="eyebrow"><span class="dot"></span>Get In Touch</span>
      <h2 class="section-title">Let's talk about your growth.</h2>
      <p class="section-sub" style="margin-bottom:30px;">Tell us a bit about your business and we'll follow up within one business day to schedule your free consultation.</p>
      <div class="contact-info-item">
        <div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        <div><b>Call us</b><br><a href="tel:+919629632897" style="color:var(--gray-500); font-size:14px; text-decoration:none; transition:color .25s ease;" onmouseover="this.style.color='var(--blue-600)'" onmouseout="this.style.color='var(--gray-500)'">+91 96296 32897</a></div>
      </div>
      <div class="contact-info-item">
        <div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m4 4 8 9 8-9"/></svg></div>
        <div><b>Email us</b><br><a href="mailto:hello@digitalhub.agency" style="color:var(--gray-500); font-size:14px; text-decoration:none; transition:color .25s ease;" onmouseover="this.style.color='var(--blue-600)'" onmouseout="this.style.color='var(--gray-500)'">hello@digitalhub.agency</a></div>
      </div>
      <div class="contact-info-item">
        <div class="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div><b>Visit us</b><br><span style="color:var(--gray-500); font-size:14px;">100 Market Street, Suite 400</span></div>
      </div>
    </div>
    <div class="reveal">
      <form class="form-card" id="contactForm" novalidate>
        <div class="form-row">
          <div class="field"><label for="fname">First name</label><input id="fname" name="fname" type="text" autocomplete="given-name" required></div>
          <div class="field"><label for="lname">Last name</label><input id="lname" name="lname" type="text" autocomplete="family-name" required></div>
        </div>
        <div class="form-row">
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div>
        </div>
        <div class="field" style="margin-bottom:16px;">
          <label for="company">Company name</label>
          <input id="company" name="company" type="text" autocomplete="organization">
        </div>
        <div class="field" style="margin-bottom:16px;">
          <label for="service">Service of interest</label>
          <select id="service" name="service">
            <option>Website Development</option><option>SEO</option><option>Google Ads</option>
            <option>Meta Ads</option><option>Branding</option><option>Not sure yet</option>
          </select>
        </div>
        <div class="field" style="margin-bottom:22px;">
          <label for="msg">Tell us about your goals</label>
          <textarea id="msg" name="msg" rows="4"></textarea>
        </div>
        <!-- Honeypot: real visitors never see this field. Bots that
             auto-fill every input on the page will fill it, and the
             backend silently discards anything submitted with it set. -->
        <div class="field" aria-hidden="true" style="position:absolute; left:-9999px; top:-9999px; height:0; overflow:hidden;">
          <label for="website">Leave this field empty</label>
          <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
        </div>
        <div id="formStatus" role="status" style="display:none; margin-bottom:16px; padding:12px 14px; border-radius:10px; font-size:14px; line-height:1.5;"></div>
        <button class="btn btn-primary" type="submit" style="width:100%;">Book Free Consultation</button>
      </form>
    </div>
  </div>
</section>

<div class="map-box">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579488.9057068515!2d79.91383845654097!3d13.039060141105539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1784396191929!5m2!1sen!2sin"
    width="100%"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>
</div>

</main>

<!-- FOOTER -->
<footer>
  <div class="wrap footer-grid">
    <div>
      <div class="logo" style="color:#fff;">
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
          <circle cx="9" cy="9" r="6" fill="#A78BFA"/>
          <path d="M4 22c0-6 4-9 9-9 6 0 12 3 13-4-1 9-7 15-13 15-5 0-9-1-9-2z" fill="url(#g2)"/>
          <defs><linearGradient id="g2" x1="4" y1="9" x2="26" y2="28"><stop stop-color="#60A5FA"/><stop offset="1" stop-color="#A78BFA"/></linearGradient></defs>
        </svg>
        Digital Hub
      </div>
      <p style="font-size:13.5px; line-height:1.7; margin:16px 0 0; max-width:260px;">A full-service digital marketing agency helping ambitious businesses grow across every channel.</p>
      <form class="newsletter" id="newsletterForm">
        <label for="newsletterEmail" class="sr-only">Email address</label>
        <input type="email" placeholder="Your email" id="newsletterEmail" name="email" autocomplete="email" required>
        <button class="btn btn-primary" style="padding:11px 18px; font-size:13.5px;" type="submit">Subscribe</button>
      </form>
      <p id="newsletterStatus" style="font-size:12.5px; margin:8px 0 0; min-height:16px;"></p>
    </div>
    <div>
      <h5>Services</h5>
      <ul>
        <li><a href="#services">Website Development</a></li>
        <li><a href="#services">SEO &amp; Local SEO</a></li>
        <li><a href="#services">Google Ads</a></li>
        <li><a href="#services">Meta Ads</a></li>
        <li><a href="#services">Branding</a></li>
      </ul>
    </div>
    <div>
      <h5>Company</h5>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#case-studies">Case Studies</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div>
      <h5>Industries</h5>
      <ul>
        <li><a href="#industries">Real Estate</a></li>
        <li><a href="#industries">Healthcare</a></li>
        <li><a href="#industries">Hospitality</a></li>
        <li><a href="#industries">E-commerce</a></li>
        <li><a href="#industries">Construction</a></li>
      </ul>
    </div>
    <div>
      <h5>Legal</h5>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms &amp; Conditions</a></li>
        <li><a href="/disclaimer">Disclaimer</a></li>
        <li><a href="/cookies">Cookie Policy</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <span>© 2026 Digital Hub. All rights reserved.</span>
    <span>Made with strategy, not templates.</span>
  </div>
</footer>

<!-- AI CHAT WIDGET -->
<div id="chatWidget">
  <div id="chatTeaser">
    <button type="button" class="teaser-close" id="teaserClose" aria-label="Dismiss message">✕</button>
    <span id="teaserText">👋 Have a question about growing your business? I'm here to help.</span>
  </div>

  <div id="chatPanel" role="dialog" aria-modal="false" aria-label="Digital Hub AI Assistant" aria-hidden="true">
    <div class="chat-header">
      <div class="chat-header-avatar">
        <svg class="robot-icon" width="22" height="22" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <g class="rb-body">
            <line class="rb-antenna" x1="22" y1="3" x2="22" y2="8"/>
            <circle class="rb-antenna-dot" cx="22" cy="3" r="1.8"/>
            <rect class="rb-head" x="6" y="8" width="32" height="26" rx="10"/>
            <circle class="rb-ear" cx="6" cy="21" r="1.7"/>
            <circle class="rb-ear" cx="38" cy="21" r="1.7"/>
            <rect class="rb-visor" x="11" y="15" width="22" height="12" rx="5"/>
            <circle class="rb-eye rb-eye-a" cx="18.5" cy="21" r="2.1"/>
            <circle class="rb-eye rb-eye-b" cx="25.5" cy="21" r="2.1"/>
          </g>
        </svg>
      </div>
      <div class="chat-header-info">
        <b>Digital Hub Assistant</b>
        <div class="chat-header-status"><span class="dot"></span>Online — usually replies instantly</div>
      </div>
      <button type="button" class="chat-minimize" id="chatMinimize" aria-label="Minimize chat">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>
    <div id="chatMessages" role="log" aria-live="polite" aria-label="Conversation"></div>
    <form class="chat-input-row" id="chatForm">
      <textarea id="chatInput" rows="1" placeholder="Type your message…" aria-label="Type your message" autocomplete="off"></textarea>
      <button type="submit" id="chatSend" aria-label="Send message" disabled>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
      </button>
    </form>
    <div class="chat-powered">Powered by Digital Hub AI</div>
  </div>

  <button id="chatToggle" aria-label="Open chat assistant" aria-expanded="false" aria-controls="chatPanel">
    <span class="bot-ring" aria-hidden="true"></span>
    <span class="bot-ring bot-ring-2" aria-hidden="true"></span>
    <span class="pulse-ring" aria-hidden="true"></span>
    <span class="chat-scan" aria-hidden="true"></span>
    <span id="chatBadge">1</span>
    <svg class="ic ic-chat robot-icon" width="30" height="30" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <g class="rb-body">
        <line class="rb-antenna" x1="22" y1="3" x2="22" y2="8"/>
        <circle class="rb-antenna-dot" cx="22" cy="3" r="1.8"/>
        <rect class="rb-head" x="6" y="8" width="32" height="26" rx="10"/>
        <circle class="rb-ear" cx="6" cy="21" r="1.7"/>
        <circle class="rb-ear" cx="38" cy="21" r="1.7"/>
        <rect class="rb-visor" x="11" y="15" width="22" height="12" rx="5"/>
        <circle class="rb-eye rb-eye-a" cx="18.5" cy="21" r="2.1"/>
        <circle class="rb-eye rb-eye-b" cx="25.5" cy="21" r="2.1"/>
      </g>
    </svg>
    <svg class="ic ic-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>
  </button>
</div>

<script src="auth.js"></script>


<!-- ===== Backend integration: contact/booking form + newsletter signup ===== -->

`;
