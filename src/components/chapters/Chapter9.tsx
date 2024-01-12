//TODO Propiedades 'peer:' y 'accent-color' de Tailwind CSS  
//! [medio trucho es esto!]
/*
Aquí podríamos hablar de la propiedad peer con la que podemos hacer algo dependiendo del estado del elemento hermano (sibling). En este caso fíjate cómo añadimos la negrita al contenido del div si el input está checked. También, es interesante comentar lo que hace la propiedad accent-color para estilar el los input de type="radio" o type="checkbox" por ejemplo.
*/

const Chapter9 = () => {
    return (
        <div className="ml-4">
            <fieldset className="accent-purple-600 my-6">
                <legend className="text-md font-semibold mb-2">¿Conocías esto de Tailwind CSS?</legend>
                <label className="flex gap-2">
                    <input checked type="radio" name="option" id="yes" className="peer" />
                    <div className="peer-checked:font-bold">Sí</div>
                </label>
                <label className="flex gap-2">
                    <input type="radio" name="option" id="no" className="peer" />
                    <div className="peer-checked:font-bold">No</div>
                </label>
                <label className="flex gap-2">
                    <input type="radio" name="option" id="maybe" className="peer" />
                    <div className="peer-checked:font-bold">Me sonaba...</div>
                </label>
            </fieldset>

            <fieldset className="accent-purple-600 my-4">
                <legend className="text-md font-semibold mb-2">Lista de la compra</legend>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" name="coke" id="coke" checked />
                    <label htmlFor="coke">Coca Cola Zero</label>
                </div>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" name="bread" id="bread" checked />
                    <label htmlFor="bread">Pan para el desayuno</label>
                </div>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" name="hummus" id="hummus" />
                    <label htmlFor="hummus">Hummus</label>
                </div>
            </fieldset>
        </div>
    )
}

export default Chapter9