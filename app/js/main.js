/* MOBILE MENU */

const menuBtn = document.querySelector('.menu-btn');
const headerSection = document.querySelector('.header');
const allLinks = document.querySelectorAll('a:link');

menuBtn.addEventListener('click', () => {
	headerSection.classList.toggle('visible');
});

allLinks.forEach(function(link) {
	link.addEventListener('click', function (e) {
		if (e.target.classList.contains('menu__link')) {
			headerSection.classList.toggle('visible');
		}
	});
});

/* Add current Year on page */

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/* Sticky header */

const sectionHeroEl = document.querySelector('.hero');

const obs = new IntersectionObserver(function(entries) {
	const ent = entries[0];

	if (ent.isIntersecting === false) {
		document.querySelector('.header').classList.add('sticky');
		document.querySelector('.hero').classList.add('mt-80');
	}

	if (ent.isIntersecting) {
		document.querySelector('.header').classList.remove('sticky');
		document.querySelector('.hero').classList.remove('mt-80');
	}
}, {
	root: null,
	threshold: 0,
	rootMargin: '-80px'
});

obs.observe(sectionHeroEl);