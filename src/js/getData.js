export const getData = async (url) => { // в modalOpen вызываем
    const response = await fetch(url)  //.then (если не использовать async/await)
    console.log('response: ', response);
    if (response.ok) {
        return response.json() // json тоже асинхронный и  там куда мы его возвращаем (renderListProduct) нужно использовать then или await
    }
}