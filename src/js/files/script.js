import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";




window.addEventListener("load", function (e) {
	const photoBlock = document.querySelectorAll('.products-card__item-image-ibg').forEach((el)=> {
        if (!el.children.length > 0) {
            el.insertAdjacentHTML('afterbegin', '<img src="img/product-card/no-photo.jpg" alt="Нет фото">'); 
        }
    });
});
