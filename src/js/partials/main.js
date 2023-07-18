document.addEventListener('DOMContentLoaded', function () {
	const prevBtn = document.querySelector('.js-prev');
	const nextBtn = document.querySelector('.js-next');
	const slides = document.querySelectorAll('.hero__slide');
	let pos;

	let checkActiveIndex = () => {
		slides.forEach((elem, index) => {
			if (elem.classList.contains('active')) {
				pos = index;
			}
		});

		return pos;
	}

	nextBtn.addEventListener('click', () => {
		const slideActive = document.querySelector('.hero__slide.active');

		checkActiveIndex();

		if (pos !== 2) {
			switch (pos) {
				case 0:
					slideActive.style.transform = 'translate3d(0, 0, -10px)';
					slideActive.nextElementSibling.style.transform = 'translate3d(38%, 28%, 10px)';
					break;
				case 1:
					slideActive.style.transform = 'translate3d(87%, 0%, -20px)';
					slideActive.nextElementSibling.style.transform = 'translate3d(73%, 23%, -10px)';
					break;
			}

			slideActive.nextElementSibling.classList.add('active');
			slideActive.classList.remove('active');
			pos++;
		}
	});

	prevBtn.addEventListener('click', () => {
		const slideActive = document.querySelector('.hero__slide.active');

		checkActiveIndex();

		if (pos !== 0) {
			switch (pos) {
				case 1:
					slideActive.style.transform = 'translate3d(0, 0, 10px)';
					slideActive.previousElementSibling.style.transform = 'translate3d(43%, 24%, -10px)';
					break;
				case 2:
					slideActive.style.transform = 'translate3d(138%, -3%, -10px)';
					slideActive.previousElementSibling.style.transform = 'translate3d(47%, 24%, -10px)';
					break;
			}

			slideActive.previousElementSibling.classList.add('active');
			slideActive.classList.remove('active');
			pos--;
		}
	});

	/* Close button */
	document.querySelector('.hero__caption-close').addEventListener('click', (e) => {
		e.currentTarget.parentElement.remove();
	});

	/* Menu */
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.menu');
	const headerLink = document.querySelector('.header__link');

	burger.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('active');
		headerLink.classList.toggle('d-none');
		document.querySelector('body').classList.toggle('body-scroll-lock');
		menu.classList.toggle('open');
	});

	/* Header */
	const header = document.querySelector('.header');
	let headerHeight = header.clientHeight;
	let scroll = $(window).scrollTop();
	let lengthScrolled = 0;

	if (window.matchMedia('(min-width: 750px)').matches) {
		$(window).on('scroll', function () {
			scroll = $(window).scrollTop();

			/* Hide on reverse direction */
			if (scroll < headerHeight) {
				header.removeAttribute('style');
			} else if (scroll < lengthScrolled) {
				header.removeAttribute('style');
			} else {
				header.style.transform =  `translateY(${-headerHeight}px)`;
			}
			lengthScrolled = scroll;
		});
	}
});