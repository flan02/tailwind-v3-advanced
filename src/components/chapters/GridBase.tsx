//TODO standard grid base component for most of the incoming projects

const GridBase = () => {
    return (
        <div className="h-screen grid grid-cols-1 sm:grid-cols-3 grid-rows-7 text-white text-center gap-1">
            <header className="sm:col-span-3 bg-blue-400 flex items-center justify-center"><p>HEADER</p></header>
            <aside className="sm:row-[2/6] xl:col-span-3 xl:row-[2/3] bg-red-800 flex items-center justify-center"><p>ASIDE</p></aside>
            <section className="row-span-3 sm:row-[2/6] sm:col-[2/4] xl:col-span-3 xl:row-[3/7] bg-green-700">
                <div className="flex flex-col md:flex-row md:flex-wrap h-full w-[80%] ml-14 md:ml-5 md:w-[90%] gap-2 lg:gap-0 py-8 lg:h-[40vh] lg:w-[95%] xl:h-full xl:m-0 xl:w-[100vw]">
                    <article className="bg-orange-400 basis-1/3 md:basis-1/2 lg:basis-1/3 border-4 border-orange-700 2xl:grow"><div className="flex h-full justify-center items-center"><p>ARTICLE 1</p></div></article>
                    <article className="bg-orange-400 basis-1/3 md:grow lg:basis-1/3 border-4 border-orange-700"><div className="flex h-full justify-center items-center"><p>ARTICLE 2</p></div></article>
                    <article className="bg-orange-400 basis-1/3 md:basis-1/2 lg:basis-1/3 2xl:hidden border-4 border-orange-700"><div className="flex h-full justify-center items-center"><p>ARTICLE 3</p></div></article>
                </div>
            </section>
            <footer className="row-span-2 sm:col-span-3 xl:row-[7/8] bg-purple-700 flex items-center justify-center"><p>FOOTER</p></footer>
        </div>
    )
}

export default GridBase