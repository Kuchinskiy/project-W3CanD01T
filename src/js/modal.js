(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    text: document.querySelector('[data-modal-text]'),
    price: document.querySelector('[data-modal-price]'),
    input: document.querySelectorAll('.modal-form__input'),
  };

  const checkoutButtons = document.querySelectorAll('[data-checkout]');

  const openModal = () => {
    refs.modal.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  };

  checkoutButtons.forEach(button => {
    button.addEventListener('click', () => {
      const { title, price } = button.dataset;
      if (title) refs.text.textContent = title;
      if (price) refs.price.textContent = price;
      openModal();
    });
  });

  refs.closeModalBtn?.addEventListener('click', closeModal);

  refs.modal?.addEventListener('click', event => {
    if (event.target === refs.modal) closeModal();
  });
})();
