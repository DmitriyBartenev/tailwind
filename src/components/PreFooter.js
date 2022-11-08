


const PreFooter = () => {
    return(
        <section id = 'preFooter'>
            <div className="bg-orange-500">
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works today
                    </h2>
                    <div>
                        <a className="text-orange-500 bg-white shadow-2xl py-3 px-6 rounded-full font-bold hover:bg-gray-300 cursor-pointer">       
                            Get Started                           
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreFooter;