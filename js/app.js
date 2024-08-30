/////////////////////////////////////////////////////////////////////////
///////////////////						Mobile nenu					///////////////////////
/////////////////////////////////////////////////////////////////////////

const menuBtn = document.querySelector('.menu-btn');
const headerSection = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
	headerSection.classList.toggle('visible');
});

/////////////////////////////////////////////////////////////////////////
///////////////////		Add current Year on page		///////////////////////
/////////////////////////////////////////////////////////////////////////

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////////////////////
///////////////////		Smooth scrolling on page		///////////////////////
/////////////////////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const href = link.getAttribute('href');
		// Scroll to top
		if (href === '#') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
		// Scroll to other links
		if (href !== '#' && href.startsWith('#')) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({
				behavior: 'smooth'
			});
		}
		// Close mobile menu after click on menu link
		if (link.classList.contains('header__menu-link')) {
			headerSection.classList.toggle('visible');
		}
	});
});

/////////////////////////////////////////////////////////////////////////
///////////////////					Sticky header					///////////////////////
/////////////////////////////////////////////////////////////////////////

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
