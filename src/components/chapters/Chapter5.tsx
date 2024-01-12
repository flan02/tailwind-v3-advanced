/* eslint-disable react-hooks/exhaustive-deps */
//TODO Breakpoints en Tailwindcss 
//? Decidimos como queremos que se comporte nuestra pagina depende el ancho de la misma

import { useEffect, useState } from "react"

const Chapter5 = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [breakpoint, setBreakpoint] = useState<string>('mobile first')

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            //console.log(width);

            if (width < 640) setBreakpoint('MOBILE FIRST')
            if (width < 768 && width > 640) setBreakpoint('SMALL')
            if (width < 1024 && width > 768) setBreakpoint('MEDIUM')
            if (width < 1280 && width > 1024) setBreakpoint('LARGE')
            if (width < 1536 && width > 1280) setBreakpoint('XLARGE')
            if (width > 1536) setBreakpoint('2XLARGE')

        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])
    return (
        <div className="h-max bg-amber-100 sm:bg-amber-300 md:bg-amber-500 lg:bg-amber-700 xl:bg-amber-800 2xl:bg-amber-950">
            <aside className="absolute top-0 right-0 w-max bg-black opacity-50 p-2">
                <p className="text-slate-100 lowercase">[{breakpoint}:  {width}]</p>
            </aside>
            <article className="xl:flex">
                <section className="border-2 border-black p-2 w-96 lg:w-[1000px] mx-auto">
                    <h2 className="text-md font-bold text-center sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl">Breakpoints 1</h2>
                    <nav className="flex border-2 border-black w-full justify-between mt-4">
                    </nav>
                    <p className="mt-4 md:text-2xl lg:text-3xl tablet:bg-blue-400 lg:bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem quia reiciendis, laboriosam velit perspiciatis nesciunt sapiente assumenda, itaque soluta fugiat repellendus odio temporibus saepe magnam laudantium! Debitis, itaque qui?</p>
                </section>
                <section className="border-2 border-black p-2 w-96 lg:w-[1000px] mx-auto mt-10">
                    <h2 className="text-md font-bold text-center sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl">Breakpoints 2</h2>
                    <nav className="flex border-2 border-black w-full justify-between mt-4">
                    </nav>
                    <p className="mt-4 md:text-2xl lg:text-3xl tablet:bg-blue-400 lg:bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem quia reiciendis, laboriosam velit perspiciatis nesciunt sapiente assumenda, itaque soluta fugiat repellendus odio temporibus saepe magnam laudantium! Debitis, itaque qui?</p>
                </section>
                <section className="border-2 border-black p-2 w-96 lg:w-[1000px] mx-auto mt-10">
                    <h2 className="text-md font-bold text-center sm:text-xl md:text-3xl lg:text-5xl xl:text-7xl">Breakpoints 3</h2>
                    <nav className="flex border-2 border-black w-full justify-between mt-4">
                    </nav>
                    <p className="mt-4 md:text-2xl lg:text-3xl bg-red-300 tablet:bg-red-100 lg:bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem quia reiciendis, laboriosam velit perspiciatis nesciunt sapiente assumenda, itaque soluta fugiat repellendus odio temporibus saepe magnam laudantium! Debitis, itaque qui?</p>
                </section>
            </article>
        </div>
    )
}

export default Chapter5