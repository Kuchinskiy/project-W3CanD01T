document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const navigation = {
      menuBtn: document.querySelector('[data-menu-btn]'),
      closeBtn: document.querySelector('[data-menu-close-btn]'),
      menu: document.querySelector('[data-menu]'),
    };

    navigation.menuBtn?.addEventListener('click', () => {
      navigation.menu.classList.remove('is-hidden');
    });

    navigation.closeBtn?.addEventListener('click', () => {
      navigation.menu.classList.add('is-hidden');
    });
  })();
});
