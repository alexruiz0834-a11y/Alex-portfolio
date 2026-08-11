// Set the footer copyright year automatically.
const contactYearEl = document.getElementById('contactYear');
if (contactYearEl) {
  contactYearEl.textContent = new Date().getFullYear();
}

// Clicking the scroll cue (or the ember it turns into) jumps to the About section.
const heroScrollCue = document.getElementById('heroScrollCue');
if (heroScrollCue) {
  heroScrollCue.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
}
