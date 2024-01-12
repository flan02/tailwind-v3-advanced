//TODO Pseudo clases en tailwindcss 

const Chapter4 = () => {
    return (
        <div className="p-4">
            {/* AFTER */}
            <button type="button" className="relative bg-orange-600 w-32 p-3 rounded-md after:content-[''] after:absolute after:left-32 after:border-8 after:border-l-orange-600 after:border-transparent after:top-4">Haz clic aqui</button>
            {/* PLACEHOLDER */}
            <input className="border ml-2 px-2 placeholder:text-orange-600 placeholder:italic" type="text" name="" id="" placeholder="Nombre: " />
            <br /><br />
            {/* FILE */}
            <input type="file" className="file:bg-violet-100 file:border-0 file:rounded-lg file:text-violet-700 file:font-semibold file:px-3 hover:file:bg-violet-200" />
            <br /><br />
            {/* MARKER (estilos para listas) */}
            {/* list-decimal para listas ordenadas <ol></ol> */}
            <ul className="list-disc ml-6 marker:text-red-500 market:font-bold">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <br /><br />
            { /* SELECTION */}
            <p className="selection:bg-green-500 selection:text-yellow-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum natus, ipsa laboriosam itaque aut sequi nostrum in, odio facilis vel repellendus eum consequatur tempore. Atque error sint repudiandae qui.</p>
            <br /><br />
            { /* FIRST LINE */}
            <p className="first-line:uppercase first-line:tracking-widest first-line:text-4xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum natus, ipsa laboriosam itaque aut sequi nostrum in, odio facilis vel repellendus eum consequatur tempore. Atque error sint repudiandae qui.</p>

        </div>
    )
}

export default Chapter4