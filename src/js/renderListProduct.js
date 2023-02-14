import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCartProduct } from "./createCartProduct.js";
import { catalogList } from "./elements.js"
import { getData } from "./getData.js"



// Создаю лист продуктов категории (например бургер)
export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
    //получаю все элементы категории бургер (category)
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`); //получаю массив данных с сервера
    const listCard = listProduct.map(createCartProduct)// в item попадет product из createCartProduct. Создаю li элементы и наполяню их данными с сервера
    catalogList.append(...listCard);
}
