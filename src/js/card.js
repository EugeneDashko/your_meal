import { catalogList, countAmount, modalProductBtn } from "./elements.js";

 const getCard = () => {
    const cardList = localStorage.getItem('cart');
    if(cardList) {
        return JSON.parse(cardList)
    } else {
        return [];
    }
};

const renderCardList = async () => { // async потому что делаем запрос к серверу
    const cardList = getCard();
    console.log('cardList: ', cardList);
}

//функция обновления корзины:
const updateCardList = (cardList) => {
    localStorage.setItem('card', JSON.stringify()) // stringify приводим к строке
    renderCardList();
};

const addCard = (id, count = 1) => {
    console.log(id, count);
    const cardList = getCard();
    const product = cardList.find((item) => item.id === id)
    if(product) {
        product.count += count //product.count = product.count + count
    } else {
        cardList.push({id, count})
    }
    updateCardList(cardList)
};

const removeCard = (id) => {

};

const cardController = () => {
    catalogList.addEventListener('click', ({target}) => { //через деструктуризацию вытаскиваем из event  target
        if(target.closest('.product__add')) { // когда кликнули по кнопке - вызываем фу addCard
            addCard(target.closest('.product').dataset.idProduct)
        }
    });
    modalProductBtn.addEventListener('click', () => {
        addCard(modalProductBtn.dataset.idProduct, parseInt(countAmount.textContent)) // parseInt преобразует к целому числу
    } )
};

export const cardInit = () => {
    cardController();
    renderCardList();
}