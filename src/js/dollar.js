'use strict';

  const cards = document.querySelectorAll('.pricing__item-card');

  cards.forEach((card) => {
    const dollarIcon = card.querySelector('.pricing__price-icon');
    let rotationY = 0;

    card.addEventListener('mouseenter', () => {
      rotationY += 360;
      dollarIcon.style.transform = `rotateY(${rotationY}deg)`;

      setTimeout(() => {
        rotationY += 360;
        dollarIcon.style.transform = `rotateY(${rotationY}deg)`;
      }, 500);
    });
  });
