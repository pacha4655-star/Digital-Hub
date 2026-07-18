// Shared client-side validation helpers.
//
// These mirror the server-side rules in lib/validation.ts (Zod). They exist
// purely for instant UX feedback — the API route always re-validates with
// Zod server-side, so these are never a security boundary on their own.
//
// Previously this logic (email regex, phone regex, first-name check) was
// copy-pasted independently in home-forms.js (contact form + newsletter
// form) and again in home-widgets.js (chat widget lead capture). It now
// lives in one place and every script loads this file first.
window.DigitalHubValidators = (() => {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const EMAIL_EXTRACT_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/;
  const PHONE_RE = /^[0-9+\-()\s]{7,20}$/;

  function isValidEmail(value) {
    return EMAIL_RE.test(String(value || '').trim());
  }

  // Finds an email-looking substring inside free-form text (used by the
  // chat widget's conversational lead-capture flow).
  function extractEmail(value) {
    const match = String(value || '').match(EMAIL_EXTRACT_RE);
    return match ? match[0] : null;
  }

  function isValidPhone(value) {
    const trimmed = String(value || '').trim();
    return trimmed === '' || PHONE_RE.test(trimmed);
  }

  function isNonEmpty(value) {
    return String(value || '').trim().length > 0;
  }

  return { isValidEmail, extractEmail, isValidPhone, isNonEmpty };
})();
