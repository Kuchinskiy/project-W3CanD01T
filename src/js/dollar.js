'use strict';

  const cards = document.querySelectorAll('.pricing__item-card');

  cards.forEach((card) => {
    const dollarIcon = card.querySelector('.pricing__price-icon');
    let rotationY = 0;

    card.addEventListener('mouseenter', () => {
      rotationY += 360;
      dollarIcon.style.transform = `rotateY(${rotationY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      const extraSpin = 180 + Math.floor(Math.random() * 180);
      rotationY += extraSpin;
      dollarIcon.style.transform = `rotateY(${rotationY}deg)`;

      setTimeout(() => {
        rotationY = 0;
        dollarIcon.style.transform = `rotateY(0deg)`;
      }, 700);
    });
  });
