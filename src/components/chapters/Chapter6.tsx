
const Chapter6 = () => {
    return (
        <>
            {/* <!-- 
            <div className="bg-slate-200 flex place-content-around border-2 border-blue-500 h-[400px] items-end">
                <div className="card">1</div>
                <div className="card self-center">2</div>
                <div className="card self-start">3</div>
            </div>
            <br />
            <div className="bg-slate-200 flex flex-col-reverse border-2 border-blue-500 items-center">
                <div className="card self-end">1</div>
                <div className="card">2</div>
                <div className="card self-start">3</div>
            </div>
            <br />
             <div className="bg-slate-200 flex flex-wrap gap-2">
                <div className="card grow shrink-0">1</div>
                <div className="card grow shrink-0">2</div>
                <div className="card grow shrink-0">3</div>
                <div className="card grow shrink-0">4</div>
                <div className="card grow shrink-0">5</div>
                <div className="card grow shrink-0">6</div>
            </div>
    --> */}

            <div className="bg-blue-200 flex">
                <div className="card basis-1/4 sm:basis-1/3">1</div>
                <div className="card basis-1/4 sm:basis-1/3">2</div>
                <div className="card basis-1/2 sm:basis-1/3">3</div>

            </div>
        </>
    )
}

export default Chapter6