


const Testimonials = () => {

    return(
        <section id = 'testimonials'>
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    What's different About Manage? 
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
                        <img src='assets/avatar-anisha.png' alt='' className="w-16 -mt-14"/>
                        <h5 className="text-lg font-bold ">
                            Anisha Li
                        </h5>
                        <p className="text-sm text-gray-400">
                            "Manage has supercharged our team's workflow. The ability to
                            maintain visibility on larger milestones at all times keeps everyone motivated."
                        </p>
                    </div>  
                
               
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3 md:flex">
                        <img src='assets/avatar-ali.png' alt='' className="w-16 -mt-14"/>
                        <h5 className="text-lg font-bold ">
                            Ali
                        </h5>
                        <p className="text-sm text-gray-400">
                            "Manage has supercharged our team's workflow. The ability to
                            maintain visibility on larger milestones at all times keeps everyone motivated."
                        </p>
                    </div>  

                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3 md:flex">
                        <img src='assets/avatar-richard.png' alt='' className="w-16 -mt-14"/>
                        <h5 className="text-lg font-bold ">
                            Richard 
                        </h5>
                        <p className="text-sm text-gray-400">
                            "Manage has supercharged our team's workflow. The ability to
                            maintain visibility on larger milestones at all times keeps everyone motivated."
                        </p>
                    </div>  
                </div>
                <div className="my-16">
                    <a className="text-white bg-orange-500 py-3 px-6 rounded-full font-bold hover:bg-orange-600 cursor-pointer">       
                        Get Started                           
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;