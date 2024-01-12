import { useEffect, useState } from "react"


const DevelopTools = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [breakpoint, setBreakpoint] = useState<string>('mobile first')

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            //console.log(width);

            if (width < 640) setBreakpoint('MOBILE FIRST')
            if (width < 768 && width > 640) setBreakpoint('SMALL')
            if (width < 1024 && width > 768) setBreakpoint('MEDIUM')
            if (width < 1280 && width > 1024) setBreakpoint('LARGE')
            if (width < 1536 && width > 1280) setBreakpoint('XLARGE')
            if (width > 1536) setBreakpoint('2XLARGE')

        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])
    return (
        <>
            <aside className="absolute top-6 right-0 w-max bg-black opacity-60 p-2">
                <p className="text-slate-300 lowercase">[ {breakpoint} :  {width}px ]</p>
            </aside>
            <div className="absolute top-0 left-0 w-full flex text-white h-screen text-center">
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">1</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">2</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">3</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">4</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">5</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">6</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">7</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">8</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">9</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">10</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">11</p></div>
                <div className="border-r border-black basis-1/12"><p className="bg-black w-full opacity-40">12</p></div>
            </div>
        </>
    )
}

export default DevelopTools