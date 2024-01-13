

const GridBase3 = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-9 h-screen">
            <header className="col-span-12 row-span-1 sm:col-span-4 sm:row-span-2 bg-blue-500 flex justify-center items-center"><p className="text-white">HEADER</p></header>
            <nav className="col-span-12 row-span-2 sm:col-span-8 bg-yellow-400 flex justify-center items-center"><p className="text-white">NAV</p></nav>
            <section className="col-span-12 row-span-3 sm:row-[3/6] md:col-span-8 md:row-[3/6] bg-orange-500 flex justify-center items-center"><p className="text-white">SECTION</p></section>
            <aside className="col-span-12 row-span-2 sm:row-[6/7] md:col-[9/13] md:row-span-2 bg-green-100 flex justify-center items-center"><p className="text-black">AD 1</p></aside>
            <aside className="hidden col-span-12 row-span-2 sm:row-[9/10] md:col-span-8 md:row-[6/8] bg-green-100 sm:flex justify-center items-center"><p className="text-black">AD 2</p></aside>

            <aside className="hidden sm:hidden md:col-[9/13] md:row-[3/4] bg-green-100 md:flex justify-center items-center"><p className="text-black">AD 3</p></aside>

            <footer className="col-span-12 sm:row-[7/9] md:col-[9/13] md:row-[4/8] bg-pink-300 flex justify-center items-center"><p className="text-white">FOOTER</p></footer>
            <article className="hidden sm:hidden md:flex md:col-[1/5] md:row-[8/10] bg-purple-300 justify-center items-center"><p className="text-white">ARTICLE MD</p></article>
            <article className="hidden sm:hidden md:flex md:col-[5/9] md:row-[8/10] bg-purple-500 justify-center items-center"><p className="text-white">ARTICLE MD</p></article>
        </div>
    )
}

export default GridBase3