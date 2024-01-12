//TODO Dark mode Tailwind funciona en VITE hay qe ver si sirve asi para Nextjs


function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        //add class=dark in html element
        document.documentElement.classList.add("dark");
    } else {
        //remove class=dark in html element
        document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    } else {
        localStorage.theme = "dark";
    }
}
const DarkMode = () => {
    return (
        <div className="bg-pink-50 dark:bg-slate-800 h-screen">
            <button type="button" onClick={handleClick} className="w-max p-2 bg-green-500 text-white">Change Mode (Dark/Light)</button>

        </div>
    )
}


export default DarkMode