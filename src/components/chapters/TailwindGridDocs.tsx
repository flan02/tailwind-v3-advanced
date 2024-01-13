

const TailwindGridDocs = () => {
    return (
        <>
            { /* <!--
           //* SUBGRID 
            <div className="grid grid-cols-4 gap-4">
                <div className="border-2 border-purple-500 bg-purple-300">01</div>
                <div className="border-2 border-purple-500 bg-purple-300">02</div>
                <div className="border-2 border-purple-500 bg-purple-300">03</div>
                <div className="border-2 border-purple-500 bg-purple-300">04</div>
                <div className="border-2 border-purple-500 bg-purple-300">05</div>
                <div className="grid grid-cols-subgrid gap-4 col-span-3 border-2 border-pink-500 bg-pink-300">
                    <div className="col-start-2 border-2 border-blue-500 bg-blue-300">06</div>
                </div>
            </div>
           -->*/}
            {
                /* <!--
                //* GRID-FLOW
                 <div className="grid grid-rows-4 grid-flow-row sm:grid-flow-col gap-4">
                    <div className="border-2 border-yellow-600 bg-yellow-300">01</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">02</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">03</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">04</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">05</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">06</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">07</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">08</div>
                    <div className="border-2 border-yellow-600 bg-yellow-300">09</div>
                    <div className="hidden border-2 border-yellow-600 bg-yellow-300">10</div>
                </div>
                -->*/
                <div className="grid grid-flow-col auto-cols-fr">
                    <div className="border-2 border-pink-500 bg-pink-300">01</div>
                    <div className="border-2 border-pink-500 bg-pink-300">02</div>
                    <div className="border-2 border-pink-500 bg-pink-300">03</div>
                    <div className="border-2 border-pink-500 bg-pink-300">04</div>
                </div>
            }
        </>

    )
}

export default TailwindGridDocs