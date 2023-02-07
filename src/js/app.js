import * as flsFunction from "./modules/functions.js"

flsFunction.isWebp();

import {modalProduct,
  catalogList,
} from "./elements.js";

import { createCardProduct } from "./createCardProduct.js";
import { openModal } from "./openModal.js";
import {  } from "./elements.js";


  const burgerMax = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 5000,
    calories: 15000,
    description: 'Огромный бургер, съешь сам или поделись с компанией',
    image: '/img/megaburger.jpg',
    ingredients: ['Пшеничная булочка','Мега котлета из говядины', 'Много сыра', 'Листья салата', 'Чипотл']
  }


catalogList.textContent = '';


const card =  [
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
]

catalogList.append(...card)

catalogList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.product_detail') || target.closest('.product__image')) {
    openModal(burgerMax);
  }
});


modalProduct.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.modal__close') || target === modalProduct  ) {
      modalProduct.classList.remove('modal_open')
    }
  })