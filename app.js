const world = document.querySelector('.world');
const theme = document.querySelector('.theme-toggle');
const label = document.querySelector('.theme-label');
const glow = document.querySelector('.ambient-glow');
const panel = document.getElementById('panel');
const title = document.getElementById('panel-title');
const copy = document.getElementById('panel-copy');
const breath = document.querySelector('.breath');
const content = {
  about: { title: 'A little less noise.', copy: 'Nature is a small, imagined space for moments between the busy ones. No feed to catch up on. Just a gentle reminder that you can take your time.' },
  ritual: { title: 'Take your time.', copy: 'Relax your shoulders. Breathe in slowly, then let the breath go. Stay here for a few moments, or return whenever you need a little space.' }
};
theme.addEventListener('click', () => {
  const night = world.classList.toggle('is-night');
  theme.setAttribute('aria-pressed', String(night));
  theme.setAttribute('aria-label', night ? 'Switch to day' : 'Switch to night');
  label.textContent = night ? 'Day' : 'Night';
  document.querySelector('meta[name="theme-color"]').content = night ? '#101d35' : '#cbe1f0';
});
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const item = content[button.dataset.open];
  if (!item) return;
  title.textContent = item.title;
  copy.textContent = item.copy;
  breath.hidden = button.dataset.open !== 'ritual';
  panel.showModal();
}));
document.querySelectorAll('.panel-close,.panel-done').forEach(button => button.addEventListener('click', () => panel.close()));
panel.addEventListener('click', event => { if (event.target === panel) panel.close(); });
if (matchMedia('(pointer:fine)').matches) {
  world.addEventListener('pointermove', event => {
    const bounds = world.getBoundingClientRect();
    world.classList.toggle('meadow-awake', event.clientY - bounds.top > bounds.height * .66);
    glow.style.setProperty('--x', `${event.clientX - bounds.left}px`);
    glow.style.setProperty('--y', `${event.clientY - bounds.top}px`);
    glow.classList.add('is-active');
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      world.style.setProperty('--depth-x', `${x * 14}px`);
      world.style.setProperty('--depth-y', `${y * 8}px`);
    }
  });
  world.addEventListener('pointerleave', () => {
    glow.classList.remove('is-active');
    world.classList.remove('meadow-awake');
    world.style.setProperty('--depth-x', '0px');
    world.style.setProperty('--depth-y', '0px');
  });
}
let touchTimer;
world.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch' || event.target.closest('button')) return;
  const bounds = world.getBoundingClientRect();
  if (event.clientY - bounds.top < bounds.height * .66) return;
  world.classList.add('meadow-awake');
  clearTimeout(touchTimer);
  touchTimer = setTimeout(() => world.classList.remove('meadow-awake'), 6500);
});

// Reveal editorial content once, without hiding it when scripting is unavailable.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), {threshold: .08});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
