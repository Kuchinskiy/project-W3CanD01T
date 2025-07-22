document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      text: document.querySelector('[data-modal-text]'),
      price: document.querySelector('[data-modal-price]'),
      input: document.querySelectorAll('.modal-form__input'),
      checkoutBasic: document.querySelector('[data-checkout-basic]'),
      checkoutStandart: document.querySelector('[data-checkout-standart]'),
      checkoutPro: document.querySelector('[data-checkout-pro]'),
    };

    refs.checkoutBasic?.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
      refs.text.textContent = 'One Session';
      refs.price.textContent = '$10';
    });

    refs.checkoutStandart?.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
      refs.text.textContent = '8 Sessions Package';
      refs.price.textContent = '$65';
    });

    refs.checkoutPro?.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
      refs.text.textContent = '12 Sessions Package';
      refs.price.textContent = '$80';
    });

    refs.closeModalBtn?.addEventListener('click', () => {
      refs.modal.classList.add('is-hidden');
    });

    refs.modal?.addEventListener('click', event => {
      if (event.target === refs.modal) {
        refs.modal.classList.add('is-hidden');
      }
    });
  })();
});
