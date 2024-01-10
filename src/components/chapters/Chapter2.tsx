//TODO Como trabajar con ANCHO y ALTO en TAILDWINDCSS
//? En la hoja de config si uso SPACING como medida, puedo usarlo en el ancho y alto de los elementos
//? Si quiero solo el with, en vez de SPACING uso WIDTH o HEIGHT para la altura

//? h-screen ocupa toda la pantalla
//? h-full ocupa todo el alto del elemento padre (el elem con h-full debe estar dentro de un elem con altura definida que no sea el BODY)

const Chapter2 = () => {
    return (
        <>
            <div className="bg-red-400 w-40">
                Medidas en Tailwind
            </div>
            <div className="bg-red-400 w-96">
                Medidas en Tailwind
            </div>
            <div className="bg-red-400 w-[170px]">
                Medidas en Tailwind personalizadas
            </div>
            <div className="bg-blue-400 w-98 h-98">
                Medidas en Tailwind configuradas
            </div>
            <div className="bg-green-400 w-150">
                Medidas en Tailwind configuradas
            </div>
            <div className="bg-yellow-400 w-1/2">
                Medidas en Tailwind configuradas
            </div>
            <div className="bg-pink-400 h-screen">
                Medidas en Tailwind h-screen = 100vh
            </div>
            <div className="h-[100px]">
                <div className="bg-red-400 h-full">Medidas en Tailwind h-full</div>
            </div>
        </>
    )
}

export default Chapter2