import * as flsFunction from "./modules/functions.js"
flsFunction.isWebp();

import {modalProduct,catalogList} from "./elements.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListController } from "./navigationListController.js";

  const burgerMax = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 5000,
    calories: 15000,
    description: 'Огромный бургер, съешь сам или поделись с компанией',
    image: '/img/megaburger.jpg',
    ingredients: ['Пшеничная булочка','Мега котлета из говядины', 'Много сыра', 'Листья салата', 'Чипотл']
  }
  const closeModal = (e) => {
    if(e.key == 'Escape') {
    modalProduct.classList.remove('modal_open');
    document.removeEventListener('keydown', closeModal);
    }
  }
 
  
catalogList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.product_detail') || target.closest('.product__image')) {
    openModal(burgerMax);
    document.addEventListener('keydown', closeModal)
  }
});

modalProduct.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.modal__close') || target === modalProduct  ) {
      modalProduct.classList.remove('modal_open')
    }
  })

  const init = () => {
    renderListProduct();
    navigationListController();
  };
  init();

