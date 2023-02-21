import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCartProduct } from "./createCartProduct.js";
import { catalogList } from "./elements.js"
import { getData } from "./getData.js"



// Создаю лист продуктов категории (например бургер)
export const renderListProduct = async (category = 'burger') => { // в категорию попадает из navigationListController
    
     catalogList.textContent = ''; // опустошаю каталог  бургеров и заполняю новым разделом

    //получаю все элементы категории бургер (category) с сервера
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`); //получаю массив данных с сервера // если не async/await, тогда getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`)then(data => console.log(data))

    const listCard = listProduct.map(createCartProduct)// в item попадет product из createCartProduct. Создаю li элементы и наполяню их данными с сервера
    //createCartProduct бедет вызвана мапом столько раз, колько элемнтов в массиве listProduct
    catalogList.append(...listCard);
}
