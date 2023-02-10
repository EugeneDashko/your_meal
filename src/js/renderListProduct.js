import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js"
import { getData } from "./getData.js"

export const renderListProduct = async () => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`); //получаю массив данных с сервера
    const listCard = listProduct.map(createCardProduct)// в item попадет product из createCardProduct
    console.log(createCardProduct)
    catalogList.append(...listCard);
}
