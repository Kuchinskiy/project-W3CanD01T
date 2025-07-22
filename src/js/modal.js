document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      text: document.querySelector('[data-modal-text]'),
      price: document.querySelector('[data-modal-price]'),
      input: document.querySelectorAll('.modal-form__input'),
    };

    refs.openModalBtn?.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
      refs.text.textContent = '8 Sessions Package';
      refs.price.textContent = '$65';
    });

    refs.closeModalBtn?.addEventListener('click', () => {
      refs.modal.classList.add('is-hidden');
    });
  })();
});
