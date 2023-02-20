import { modalDeliveryForm } from "./elements.js"

export const orderController = (getCart) => {
    modalDeliveryForm.addEventListener('change', () => {
        if(modalDeliveryForm.format.value === 'pickup') { //name у радиокноков - format
            modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input_hide') // в js нету дефисов , пожтому оборачиваю в квадратные скобки
        }

        if(modalDeliveryForm.format.value === 'delivery') { //name у радиокноков - format
            modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input_hide') // в js нету дефисов , пожтому оборачиваю в квадратные скобки
        }
    })
    //отменяю перезагрузку страницы при нажатии кнопки submit в delivery:
    modalDeliveryForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(modalDeliveryForm);
        // console.log(Object.fromEntries(formData))
        const data = Object.fromEntries(formData);
        data.order = getCart();
        console.log('data.order: ', data.order);

        //отправка заказа на сервер
        fetch('https://reqres.in/api/users')
    })
}