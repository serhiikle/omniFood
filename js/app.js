const menuBtn = document.querySelector('.menu-btn');
const headerSection = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
	headerSection.classList.toggle('visible');
});