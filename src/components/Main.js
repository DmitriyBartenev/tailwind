

const Main = () => {

    return(
        <main id="hero">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">    
                <div className="flex flex-col mb-32 space-y-12 items-center md:w-1/2 md:items-start">
                    <h1 
                        className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
                        >Bring everyone together to build better products.
                    </h1>
                    <p 
                        className="max-w-sm text-center text-gray-400 md:text-left"
                        >Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <div className="flex justify-center md:justify-start">
                        <a className="text-white bg-orange-500 py-3 px-6 rounded-full font-bold hover:bg-orange-600 cursor-pointer">       
                            Get Started                           
                        </a>
                    </div>
                </div>
                <div>
                    <img src = './assets/illustration-intro.svg' alt = ''/>
                </div>
            </div>
        </main>
    )
}

export default Main;