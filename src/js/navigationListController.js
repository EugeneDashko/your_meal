import { navigationList, navigationListItems, catalogTitle } from "./elements.js";

//фу, которая будет управлять нашим списком:
export const navigationListController = () => {
    navigationList.addEventListener('click', (e) => { //делигирование
        const categoryItem = e.target.closest('.navigation__button');

        if(!categoryItem) return;

        navigationListItems.forEach((item) => {
            if(item === categoryItem) {
                item.classList.add('navigation__button_active');
                catalogTitle.textContent = item.textContent
            } else {
                item.classList.remove('navigation__button_active')
            }
        })
    })
}