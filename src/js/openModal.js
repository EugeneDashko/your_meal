import { modalProductTitle,
        modalProductImage,
        modalProductDescription,
        ingredientsList,
        ingredientsCalories,
        modalProductPriceCount,
        modalProduct
 } from "./elements.js";
export const openModal = (product) => {


    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
  
    ingredientsList.textContent = '';
  
    // for(let i = 0; i < product.ingredients.length; i++) {
    //   const li = document.createElement('li');
    //   li.classList.add('ingredients__item');
    //   li.textContent = product.ingredients[i];
    //   ingredientsList.append(li);
    // }
  
  //второй способ добавления элементов через map (правильный)
  
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
  
    modalProduct.classList.add('modal_open')
  
  }