import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { getData } from "./getData.js";
import { modalProductTitle,
        modalProductImage,
        modalProductDescription,
        ingredientsList,
        ingredientsCalories,
        modalProductPriceCount,
        modalProduct,
        modalProductBtn
 } from "./elements.js";


export const openModal = async (id) => {
  const product =  await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`) //получаю товар
//заполняю карточку продукта:
  modalProductTitle.textContent = product.title;
  modalProductImage.src = `${API_URL}/${product.image}`; // .src - обращаюсь к src атрибуту

  ingredientsList.textContent = ''; //опустошаем состав

  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');
    li.textContent = item;
    return li;
  })
  ingredientsList.append(...ingredientsListItems);

  modalProductDescription.textContent = product.description;
  ingredientsCalories.textContent = `${product.weight}г ккал ${product.calories}`;
  modalProductPriceCount.textContent = product.price;
  modalProductBtn.dataset.idProduct = product.id
  
 //и открываю заполненное модальное окно
  modalProduct.classList.add('modal_open')
}