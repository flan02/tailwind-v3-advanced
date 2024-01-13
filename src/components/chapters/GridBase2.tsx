
const GridBase2 = () => {
    return (
        <div className="h-screen grid grid-cols-1 grid-rows-9 md:grid-cols-2 gap-2">
            <header className="md:row-span-2 flex justify-center items-center bg-blue-500"><p className="text-white">HEADER</p></header>
            <nav className="md:row-span-2 flex justify-center items-center bg-blue-500"><p className="text-white">NAV</p></nav>
            <aside className="md:col-span-2 md:row-span-3 flex justify-center items-center row-span-2 bg-yellow-500"><p className="text-white">ASIDE</p></aside>
            <section className="md:row-span-2 flex justify-center items-center bg-green-500"><p className="text-white">SECTION 1</p></section>
            <section className="md:row-span-2 flex justify-center items-center bg-green-500"><p className="text-white">SECTION 2</p></section>
            <section className="md:col-span-2 flex justify-center items-center bg-green-500"><p className="text-white">SECTION 3</p></section>
            <article className="row-span-2 md:col-span-2 bg-orange-300">
                <div className="flex flex-col h-[20vh] gap-2 py-2 sm:flex-row sm:h-[20vh] sm:flex-wrap sm:gap-0 sm:px-2 md:row-span-1 md:flex-nowrap md:h-[10vh]">
                    <aside className="sm:basis-1/2 bg-red-500 grow flex justify-center items-center"><p className="text-white">FOOTER 1</p></aside>
                    <footer className="sm:basis-1/2 bg-red-300 grow  flex justify-center items-center"><p className="text-white">FOOTER 2</p></footer>
                    <div className="hidden sm:basis-1/2 bg-red-800 grow sm:flex justify-center items-center"><p className="text-white">FOOTER 3</p></div>
                    <div className="hidden sm:basis-1/2 bg-red-600 grow sm:flex justify-center items-center"><p className="text-white">FOOTER 4</p></div>
                </div>
            </article>
        </div>
    )
}

export default GridBase2