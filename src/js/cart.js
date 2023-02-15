import { catalogList, countAmount, modalProductBtn } from "./elements.js";

 const getCart = () => {
    const cartList = localStorage.getItem('cart'); // cart -идентификатор, может быть любым названием
    // в localstorage хронятся только строки (работает только с ними)
    if (cartList) {
        return JSON.parse(cartList) // распарсиваем строку JSON в массив при помощи parse
    } else {                     // если в Localstorage ничего небыло, то возвращаем пустой массив:
        return [];
    }
};


// const renderCartList = async () => { // async потому что делаем запрос к серверу
//     const cartList = getCart();
// }

//функция обновления корзины:
const updateCartList = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList)) // stringify приводим к строке объект или массив cartList. cart -идентификатор
    // renderCartList();
};

const addCart = (id, count = 1) => {
    console.log(id, count);
    // const cartList = getCart();
    // const product = cartList.find((item) => item.id === id)
    // if(product) {
    //     product.count += count //product.count = product.count + count
    // } else {
    //     cartList.push({id, count})
    // }
    // updateCartList(cartList)
};



const removeCart = (id) => {

};


const cartController = () => {
    catalogList.addEventListener('click', ({target}) => { //через деструктуризацию вытаскиваем из event  target
        if(target.closest('.product__add')) { // когда кликнули по кнопке - вызываем фу addCart
            addCart(target.closest('.product').dataset.idProduct)
        }
    });
    modalProductBtn.addEventListener('click', () => {
        addCart(modalProductBtn.dataset.idProduct, parseInt(countAmount.textContent)) // parseInt преобразует к целому числу
    })
};

export const cartInit = () => {
    cartController();
    // renderCartList();
}