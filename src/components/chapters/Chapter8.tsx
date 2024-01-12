//TODO Dark mode Tailwind


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
const Chapter8 = () => {

    return (
        <div className="bg-pink-50 dark:bg-slate-800 h-screen">
            <button type="button" onClick={handleClick} className="w-max p-2 bg-green-500 text-white">Change Mode (Dark/Light)</button>
            <h1 className="text-black dark:text-white text-4xl text-center">TITLE</h1>
        </div>
    )
}

export default Chapter8