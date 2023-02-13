import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js"
import { getData } from "./getData.js"

export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`); //получаю массив данных с сервера
    const listCard = listProduct.map(createCardProduct)// в item попадет product из createCardProduct. Создаю li элементы и наполяню их данными с сервера
    catalogList.append(...listCard);
}
