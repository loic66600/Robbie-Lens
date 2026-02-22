document.addEventListener('DOMContentLoaded', () => {
	const currentYear = document.getElementById('current-year');
	if (currentYear) {
		currentYear.textContent = String(new Date().getFullYear());
	}

	const pageFile = window.location.pathname.split('/').pop() || 'index.html';
	const navLinks = document.querySelectorAll('nav a[href$=".html"]');
	navLinks.forEach((link) => {
		const href = link.getAttribute('href');
		if (href === pageFile) {
			link.setAttribute('aria-current', 'page');
		}
	});

	const form = document.querySelector('.section-contact form');
	if (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const nameInput = form.querySelector('#nom');
			const emailInput = form.querySelector('#email');
			const messageInput = form.querySelector('#message');

			const hasRequiredValues =
				nameInput &&
				emailInput &&
				messageInput &&
				nameInput.value.trim() &&
				emailInput.value.trim() &&
				messageInput.value.trim();

			if (!hasRequiredValues) {
				alert('Merci de compléter tous les champs du formulaire.');
				return;
			}

			alert('Merci pour votre message. Je vous réponds rapidement.');
			form.reset();
		});
	}

	const revealElements = document.querySelectorAll('.reveal');
	if (revealElements.length > 0) {
		const revealObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);

		revealElements.forEach((element) => {
			revealObserver.observe(element);
		});
	}

	const toTopButton = document.createElement('button');
	toTopButton.className = 'to-top';
	toTopButton.type = 'button';
	toTopButton.setAttribute('aria-label', 'Remonter en haut de page');
	toTopButton.textContent = '↑';
	document.body.appendChild(toTopButton);

	const toggleToTop = () => {
		if (window.scrollY > 500) {
			toTopButton.classList.add('is-visible');
		} else {
			toTopButton.classList.remove('is-visible');
		}
	};

	window.addEventListener('scroll', toggleToTop, { passive: true });
	toggleToTop();

	toTopButton.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});