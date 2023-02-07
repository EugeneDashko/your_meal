export const getData = async (url) => {
    const response = await fetch(url)  //.then(response => console.log(response));
    // console.log('responsive', response)
    if (response.ok) {
        return response.json()
    }
}