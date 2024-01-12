

const ButtonHoverShining = () => {
    return (
        <div className="h-screen bg-slate-900">
            <h1 className="text-white">Boton brillante</h1>
            <br /> <br />
            <button type="button" className="ml-4 bg-green-400 w-max text-xl border rounded-full p-2 hover:drop-shadow-[0_0_12px_hsl(150,100%,66%)]">button</button>
        </div>
    )
}

export default ButtonHoverShining