export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rVvJiTkZAKfR59bQfY82k8Y1JLTNfLTU&q=${category}&limit=20`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json(); /* l cuadrado despues de la data es para asegurarnos de siempre tener un arreglo  clase 82 min 7*/

    const gifs = data.map( img => ({ /* Se quita el return abriendo llaves para retornar un objeto */
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return(gifs);
}