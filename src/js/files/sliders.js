/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			slidesPerView: 4,
			spaceBetween: 10,
			simulateTouch: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 20,
				},
				580: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1040: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			
			// События
			on: {

			}
		});
	}


	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.image-swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.image-swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slideClass: 'image-swiper-slide',
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 0,
			nested: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,

			// Пагинация

			pagination: {
				el: '.image-swiper-pagination',
				clickable: true,
			},

		});

		changeImgCardWidth()
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
});

function changeImgCardWidth() {
	let productCardWidth = document.querySelector('.swiper-slide').clientWidth;
	document.querySelector('.image-swiper').setAttribute("style" , "width:" + productCardWidth + "px");
	document.querySelectorAll(".products-swiper__image").forEach((el)=> { el.setAttribute("style" , "width:" + productCardWidth + "px"); });
};

window.addEventListener("resize", changeImgCardWidth);