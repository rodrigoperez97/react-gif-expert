import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

    /* const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    } otra forma de hacerlo asincrono */

    useEffect(() => { /* No se puede usar el async por que se debe retornar una función en los useEffect y el async retorna un promesa */
        getGifs(category)
            .then(newImages => setImages(newImages));
    }, []); 

  return {
    images: images,
    isLoading: isLoading
  }
}
