import * as flsFunction from "./modules/functions.js"

flsFunction.isWebp();


// document.querySelector('.order__wrap-title').addEventListener('click',() => {
//       document.querySelector('.order').classList.toggle('order_open')
//     });

//     document.querySelector('.order__close').addEventListener('click', () => {
//       document.querySelector('.order').classList.toggle('order_open')
//   });

let modalProduct = document.querySelector('.modal_product');
let catalogList = document.querySelector('.catalog__list');

catalogList.addEventListener('click', (event) => {

  const target = event.target;
  console.log(target)

  if (target.closest('.product_detail')) {
    console.log('hi')
    modalProduct.classList.add('modal_open')
  }
});


modalProduct.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.modal__close') || target === modalProduct  ) {
      modalProduct.classList.remove('modal_open')
    }
    // // modalProduct.classList.remove('modal_open')

  })
