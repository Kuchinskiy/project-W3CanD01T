document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const navigation = {
      menuBtn: document.querySelector('[data-menu-btn]'),
      closeBtn: document.querySelector('[data-menu-close-btn]'),
      menu: document.querySelector('[data-menu]'),
      navLink: document.querySelector('[data-nav-link]'),
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
  })();
});
