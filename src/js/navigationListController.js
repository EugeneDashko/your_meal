import { navigationList, navigationListItems, catalogTitle } from "./elements.js";
import { renderListProduct } from "./renderListProduct.js";

//фу, которая будет управлять нашим списком:
export const navigationListController = () => { // cd - функция renderListProduct(), которую взовем ниже в функции navigationListController
    navigationList.addEventListener('click', (e) => { //делигирование
        const categoryItem = e.target.closest('.navigation__button'); // получаю кнопку меню (десерты, закуски снэки ...)

        if(!categoryItem) return ; //console.log("mi i tak tut") если мы уже находися в этой кнопке или categoryItems === undefined, то ничего не делаем, если не, то формеруем каталок продуктов:

        //берем все кнопки из меню, ищем на которую нажали и добавляеим ей активный класс:
        navigationListItems.forEach((item) => {
            if(item === categoryItem) { // ищем кнопку из меню и сравниваем с нажатой кнопкой
                item.classList.add('navigation__button_active'); // находим и добавляем ей класс active
                catalogTitle.textContent = item.textContent; // меняем на новое название заголовка каталога

                // и начинаю формировать новый каталок под выбранную категорию меню:
                renderListProduct(item.dataset.category); // вызываю функцию renderListProduct(item.dataset.category).   item.dataset - прописано в верстке: data-category="snack"
            } else {
                item.classList.remove('navigation__button_active')// удаляю активный класс у все item которые не совпали с categoryItem
            }
        })
    })
}