//TODO Grid
//? grid-cols-n: divide la pantalla en n columnas aunque no se creen elementos queda el espacio reservado
const Chapter7 = () => {
    return (
        <>
            { /* 
        <div className="grid grid-cols-4 gap-2">
            <div className="card2 col-span-2">1</div>
            <div className="card2">2</div>
            <div className="card2">3</div>
            <div className="card2 row-span-3">4</div>
            <div className="card2 col-span-2">5</div>
            <div className="card2">6</div>
            <div className="card2 col-start-2 col-end-4">7</div>
            <div className="card2">8</div>
            <div className="card2 col-[2/4]">9</div>
        </div>
       */}
            <div className="grid grid-cols-2 gap-1 h-screen">
                <div className="card2 col-span-2">header</div>
                <div className="card2 col-span-2">nav</div>
                <div className="card2">section</div>
                <div className="card2">article</div>
                <div className="card2 row-[3/5] col-start-2">aside</div>
                <div className="card2 col-span-2">footer</div>
            </div>
        </>
    )
}

export default Chapter7