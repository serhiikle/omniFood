const menuBtn = document.querySelector('.menu-btn');
const headerSection = document.querySelector('.header');

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
	headerSection.classList.toggle('visible');
});

yearEl.textContent = currentYear;