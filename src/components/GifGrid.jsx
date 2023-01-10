import { getGifs } from "../helpers/getGifs.js";
import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
import { GifItem } from "../components/GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    /* const [images, setImages] = useState([])

    /* const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    } otra forma de hacerlo asincrono 

    useEffect(() => { /* No se puede usar el async por que se debe retornar una función en los useEffect y el async retorna un promesa 
        getGifs(category)
            .then(newImages => setImages(newImages));
    }, []); */

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <ol>
                <div className="card-grid">
                    {
                        images.map((image) => (
                            <GifItem key={image.id} {...image} />/* podemos mandar todas las propiedades "esparcidas" con el spread operator asi: {...image} y evitar escribirlas todas */
                        ))
                    }
                </div>
            </ol>

        </>
        /* 6 clases al terminar primera leccion */
    )
}
