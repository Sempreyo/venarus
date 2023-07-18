document.addEventListener('DOMContentLoaded', function() {
	let heroSlider;

	const initSliders = () => {
		const heroSliders = document.querySelectorAll('.js-hero-slider');
		const heroPrev = document.querySelectorAll('.hero__nav .js-swiper-prev');
		const heroNext = document.querySelectorAll('.hero__nav .js-swiper-next');

		heroSliders.forEach((slider, index) => {
			heroSlider = new Swiper(slider, {
				slidesPerView: 1,
				navigation: {
					nextEl: heroNext[index],
					prevEl: heroPrev[index]
				}
			});
		});
	};

	initSliders();
});