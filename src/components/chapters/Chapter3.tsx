//TODO Manejo de estados con tailwind sin usar javascript

//? Vimos focus:ring para cambiar el borde del input seleccionado
//? Podemos validar desde tailwind estilos para inputs invalidos

const Chapter3 = () => {
    return (
        <article className="bg-blue-400 h-screen pt-4">
            <form action="" className="flex flex-col bg-white w-80 mx-auto rounded-lg p-6">
                <input type="text" className="border border-gray-300 px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600" placeholder="Nombre" />

                <input type="email" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 invalid:focus:ring-red-400 peer" placeholder="Correo" />
                <p className="text-red-400 hidden peer-invalid:block">El correo es incorrecto</p>

                <input type="password" className="border border-gray-300 px-3 py-2 my-4 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 disabled:bg-gray-300" placeholder="Contraseña" disabled />

                <input type="submit" className="bg-sea-blue-light hover:bg-sea-blue text-white w-max px-4 py-2 rounded-md mx-auto cursor-pointer" placeholder="Ingresar" />
            </form>
        </article>
    )
}

export default Chapter3