(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-btn]'),
    closeBtn: document.querySelector('[data-menu-close-btn]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('[data-nav-link]'),
    closeTriggers: document.querySelectorAll(
      '[data-menu-close-btn], [data-nav-link], [data-join-btn], [data-modal-join-btn]'
    ),
  };

  refs.menuBtn?.addEventListener('click', () => {
    refs.menu.classList.remove('is-hidden');
    refs.menuBtn.classList.remove('visible');
    refs.closeBtn.classList.add('visible');
  });

  refs.closeTriggers.forEach(el => {
    el?.addEventListener('click', () => {
      refs.menu.classList.add('is-hidden');
      refs.menuBtn.classList.add('visible');
      refs.closeBtn.classList.remove('visible');
    });
  });
})();

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header-nav__link');

let isScrolling = true;
let timeoutId = null;

window.addEventListener('scroll', () => {
  if (!isScrolling) return;

  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    isScrolling = false;
    if (timeoutId) clearTimeout(timeoutId);

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    targetEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    timeoutId = setTimeout(() => {
      isScrolling = true;
    }, 800);
  });
});
