document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const navigation = {
      menuBtn: document.querySelector('[data-menu-btn]'),
      closeBtn: document.querySelector('[data-menu-close-btn]'),
      menu: document.querySelector('[data-menu]'),
      navLink: document.querySelector('[data-nav-link]'),
      joinBtn: document.querySelector('[data-join-btn]'),
      modalJoinBtn: document.querySelector('[data-modal-join-btn]'),
    };

    navigation.menuBtn?.addEventListener('click', () => {
      navigation.menu.classList.remove('is-hidden');
      navigation.menuBtn.classList.remove('visible');
      navigation.closeBtn.classList.add('visible');
    });

    navigation.closeBtn?.addEventListener('click', () => {
      navigation.menu.classList.add('is-hidden');
      navigation.menuBtn.classList.add('visible');
      navigation.closeBtn.classList.remove('visible');
    });

    navigation.navLink?.addEventListener('click', () => {
      navigation.menu.classList.add('is-hidden');
      navigation.menuBtn.classList.add('visible');
      navigation.closeBtn.classList.remove('visible');
    });

    navigation.joinBtn?.addEventListener('click', () => {
      navigation.menu.classList.add('is-hidden');
      navigation.menuBtn.classList.add('visible');
      navigation.closeBtn.classList.remove('visible');
    });

    navigation.modalJoinBtn?.addEventListener('click', () => {
      navigation.menu.classList.add('is-hidden');
      navigation.menuBtn.classList.add('visible');
      navigation.closeBtn.classList.remove('visible');
    });
  })();
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-nav__link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100; // +100 если фиксированный header

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        const id = section.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
