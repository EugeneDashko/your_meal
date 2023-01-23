import * as flsFunction from "./modules/functions.js"

flsFunction.isWebp();

const nav =document.querySelector('#nav');
const navBtn = document.querySelector('#nav__btn');
const navBtnImg = document.querySelector('#nav__btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) { //Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть. 
        navBtnImg.src ='../img/XX.svg'; // toggle возвращает если true
    } else {
        navBtnImg.src ='../img/X.svg'; // toggle возвращает если false
    }
}

AOS.init({
    disable: 'phone', // не работает на мобильных устройствах
    once: true
});