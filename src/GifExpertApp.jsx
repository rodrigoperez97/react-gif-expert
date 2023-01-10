import { useState } from "React";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        /* otra forma setCategories( cat => [...cat, 'Departamentos']); */
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={e => onAddCategory(e)}
            />

            {/* Listado de GIF */}
                {
                    /* categories.map((category) => (
                            <div key={category}>
                                <h3>{category}</h3>
                                <li>{category}</li>
                            </div>
                        )) ANTESSSSSS*/
                    categories.map((category) => (

                        <GifGrid category={category} key={category}/>

                    ))
                }
        </>
    )
}