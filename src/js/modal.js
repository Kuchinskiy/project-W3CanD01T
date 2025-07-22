document.addEventListener('DOMContentLoaded', () => {
  // Открытие/закрытие модального окна
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn?.addEventListener('click', toggleModal);
    refs.closeModalBtn?.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  })();

  // Добавление .touched при потере фокуса
  document.querySelectorAll('.modal-form__input').forEach(input => {
    input.addEventListener('blur', () => {
      input.classList.add('touched');
    });
  });
});
