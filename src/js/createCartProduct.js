import { API_URL } from "./const.js";


//создаем карточки из базы данных:
export const createCartProduct = (product) => { // в product попадет массив listProduct

    const li = document.createElement('li'); // создаю li элмент
    li.classList.add('catalog__item');// добавляю класс li элементу

    li.innerHTML = `
      <article class="product" data-id-product=${product.id}>
        <img class="product__image" src="${API_URL}/${product.image}" alt="${product.title}">
        <p class="product__price">${product.price}<span class="currency">₽</span></p>
        <h3 class="product__title">
            <button class="product_detail">${product.title}</button>
        </h3>
        <p class="product__weight">${product.weight}</p>
        <button class="product__add" type="button">Добавить</button>
      </article>
    `;
    return li
  }
//сформированный список отправляю в renderListProduct, где затем добавляю на страницу