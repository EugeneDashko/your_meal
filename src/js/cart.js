import { catalogList, countAmount, modalProductBtn, orderCount, orderList } from "./elements.js";
import { getData } from "./getData.js";
import { API_URL, PREFIX_PRODUCT} from "./const.js";

 const getCart = () => {
    const cartList = localStorage.getItem('cart'); // cart -идентификатор, может быть любым названием
    // в localstorage хронятся только строки (работает только с ними)
    if (!!cartList) {
        return JSON.parse(cartList) // распарсиваем строку JSON в массив при помощи parse
    } else {                     // если в Localstorage ничего небыло, то возвращаем пустой массив:
        return [];
    }
};


const renderCartList = async () => { // async потому что делаем запрос данных к серверу
    const cartList = getCart();
    const allIdProduct = cartList.map(item => item.id) // получаю id всех добавленных в корзину продуктов
    const data = cartList.length
    ? await getData(`${API_URL}${PREFIX_PRODUCT}?list=${allIdProduct}`)//c помощь этих id запрашиваем данные с сервера:
    : [];

    //в cartList есть информация о кол-ве, а в data сами продукты
    const countProduct = cartList.reduce((acc, item) => acc + item.count,0);
    //общее количество товаров в корзине: 
    orderCount.textContent = countProduct;

    orderList.textContent = ''; //предварительно очищаем

    const cartItems = data.map(item => {
        const li = document.createElement('li');
        li.classList.add('order__item');
        li.dataset.idProduct = item.id;

        const product = cartList.find((cartItem => cartItem.id == item.id));


        li.innerHTML = `
            <img class="order__image" src="${API_URL}/${item.image}" alt="${item.title}">
            <div class="order__product">
                <h3 class="order__product-title">${item.title}</h3>
                <p class="order__product-weight">${item.weight}г</p>
                <p class="order__product-price">${item.price}
                    <span class="currency">₽</span>
                </p>
            </div>
            <div class="order__product-count count">
                <button class="count__minus">-</button>
                <p class="count__amount">${product.count}</p>
                <button class="count__plus">+</button>
            </div>
    `;
    return li;
    });

    orderList.append(...cartItems)
   
}

//функция обновления корзины:
const updateCartList = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList)) // stringify приводим к строке объект или массив cartList. cart -идентификатор
    renderCartList();
};

const addCart = (id, count = 1) => {
    const cartList = getCart();
    const product = cartList.find((item) => item.id === id);
    if(product) {
        product.count += count //product.count = product.count + count
    } else {
        cartList.push({id, count})
    }
    updateCartList(cartList)
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
    renderCartList();
}