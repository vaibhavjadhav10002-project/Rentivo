// Rentivo — shared site behavior. No framework needed for a marketing site
// this size; kept dependency-free on purpose.

async function includePartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url);
    el.innerHTML = await res.text();
  } catch (e) { /* if opened via file://, partials won't load — serve over http instead */ }
}

function initTheme() {
  const saved = localStorage.getItem('rentivo-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateToggleIcon(theme);
}
function updateToggleIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('rentivo-theme', next);
  updateToggleIcon(next);
}

function initMobileMenu() {
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('closeMenuBtn');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.add('open'));
  if (close && menu) close.addEventListener('click', () => menu.classList.remove('open'));
  if (menu) menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

function initThemeToggleListener() {
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'themeToggle') toggleTheme();
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (target % 1 === 0 ? Math.floor(value).toLocaleString() : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) { counters.forEach(animate); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animate(entry.target); io.unobserve(entry.target); } });
  }, { threshold: 0.4 });
  counters.forEach(el => io.observe(el));
}

function markActiveNav() {
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.nav === page || (page === 'index' && a.dataset.nav === 'home')) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  await includePartial('#site-header', '/partials/header.html');
  await includePartial('#site-footer', '/partials/footer.html');
  initMobileMenu();
  initThemeToggleListener();
  initReveal();
  initCounters();
  markActiveNav();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
