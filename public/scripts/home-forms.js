
(() => {
  // If the API is hosted on a different domain than this site, change
  // this to the full API URL, e.g. 'https://api.digitalhub.agency/api'.
  const API_BASE = '/api';

  function showStatus(el, message, type){
    el.textContent = message;
    el.style.display = 'block';
    el.style.background = type === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
    el.style.color = type === 'success' ? '#047857' : '#B91C1C';
    el.style.border = `1px solid ${type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`;
  }

  function setLoading(btn, loading, loadingLabel, defaultLabel){
    btn.disabled = loading;
    btn.textContent = loading ? loadingLabel : defaultLabel;
  }

  // ---- Contact / booking form ----
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    const statusEl = document.getElementById('formStatus');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusEl.style.display = 'none';

      const fname = contactForm.fname.value.trim();
      const lname = contactForm.lname.value.trim();
      const email = contactForm.email.value.trim();
      const phone = contactForm.phone.value.trim();
      const company = contactForm.company.value.trim();
      const service = contactForm.service.value;
      const msg = contactForm.msg.value.trim();
      const website = contactForm.website.value; // honeypot

      // Client-side validation (mirrors the server-side rules via the
      // shared DigitalHubValidators helper; the server always re-validates).
      if(!DigitalHubValidators.isNonEmpty(fname)){
        showStatus(statusEl, 'Please enter your first name.', 'error');
        contactForm.fname.focus();
        return;
      }
      if(!DigitalHubValidators.isValidEmail(email)){
        showStatus(statusEl, 'Please enter a valid email address.', 'error');
        contactForm.email.focus();
        return;
      }
      if(phone && !DigitalHubValidators.isValidPhone(phone)){
        showStatus(statusEl, 'Please enter a valid phone number, or leave it blank.', 'error');
        contactForm.phone.focus();
        return;
      }

      setLoading(submitBtn, true, 'Sending…', 'Book Free Consultation');
      try{
        const res = await fetch(`${API_BASE}/submissions`, {
          method:'POST',
          headers:{ 'Content-Type':'application/json' },
          body: JSON.stringify({
            type:'booking',
            firstName:fname, lastName:lname, email, phone, company, service, message:msg,
            source:'contact-form', website
          })
        });
        const body = await res.json().catch(() => ({}));
        if(!res.ok){
          throw new Error(body.error || 'Something went wrong. Please try again.');
        }
        showStatus(statusEl, body.message || "Thanks — we'll be in touch within one business day!", 'success');
        contactForm.reset();
      }catch(err){
        showStatus(statusEl, err.message || 'Could not send your request. Please try again in a moment, or call us directly.', 'error');
      }finally{
        setLoading(submitBtn, false, 'Sending…', 'Book Free Consultation');
      }
    });
  }

  // ---- Newsletter signup ----
  const newsletterForm = document.getElementById('newsletterForm');
  if(newsletterForm){
    const statusEl = document.getElementById('newsletterStatus');
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value.trim();
      const btn = newsletterForm.querySelector('button[type="submit"]');
      if(!DigitalHubValidators.isValidEmail(email)){
        statusEl.style.color = '#FCA5A5';
        statusEl.textContent = 'Please enter a valid email address.';
        return;
      }
      setLoading(btn, true, '…', 'Subscribe');
      try{
        const res = await fetch(`${API_BASE}/submissions`, {
          method:'POST',
          headers:{ 'Content-Type':'application/json' },
          body: JSON.stringify({ type:'newsletter', firstName:'Subscriber', email, source:'newsletter-footer' })
        });
        const body = await res.json().catch(() => ({}));
        if(!res.ok) throw new Error(body.error || 'Subscription failed.');
        statusEl.style.color = '#6EE7B7';
        statusEl.textContent = "You're subscribed! 🎉";
        newsletterForm.reset();
      }catch(err){
        statusEl.style.color = '#FCA5A5';
        statusEl.textContent = err.message || 'Could not subscribe. Please try again.';
      }finally{
        setLoading(btn, false, '…', 'Subscribe');
      }
    });
  }
})();
