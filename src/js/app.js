import * as flsFunction from "./modules/functions.js"
flsFunction.isWebp();
//============================================================================================

import {modalProduct,catalogList} from "./elements.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListController } from "./navigationListController.js";
import { cartInit } from "./cart.js";



// добавляю закрытие модального по клавиши Escape
  const closeModal = (e) => {
    if(e.key == 'Escape') {
    modalProduct.classList.remove('modal_open');
    document.removeEventListener('keydown', closeModal);// после события удаляю слушателя на клавиатуре
    }
  }


// навешваем слушателя на каталог
catalogList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.product_detail') || target.closest('.product__image')) { // если  картинка или детали
    const id= target.closest('.product').dataset.idProduct; // получаю id по кликнутому элемету (читать про dataset)
    openModal(id);
    document.addEventListener('keydown', closeModal) // добавляю слушатель на клавиатуру
  }
});

modalProduct.addEventListener('click', (e) => {
    const target = e.target
    if (target.closest('.modal__close') || target === modalProduct  ) {
      modalProduct.classList.remove('modal_open')
    }
  })

  const init = () => {
    renderListProduct();
    navigationListController();
    cartInit();
  };
  init();

