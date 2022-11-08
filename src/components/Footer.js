

const Footer = () => {

    return(
        <footer id='footer' className="bg-blue-900">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"> 
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    <div>
                        <img src='assets/logo-white.svg' className='h-8' alt=''/>
                    </div>
                    <div className="flex justify-center space-x-4 sm:flex-wrap">
                        <a href="#"> 
                            <img src='assets/icon-facebook.svg' className="h-8" alt =''/>
                        </a>
                        <a href="#"> 
                            <img src='assets/icon-youtube.svg' className="h-8" alt =''/>
                        </a>
                        <a href="#"> 
                            <img src='assets/icon-twitter.svg' className="h-8" alt =''/>
                        </a>
                        <a href="#"> 
                            <img src='assets/icon-pinterest.svg' className="h-8" alt =''/>
                        </a>
                        <a href="#"> 
                            <img src='assets/icon-instagram.svg' className="h-8" alt =''/>
                        </a>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white ">
                        <a href="#" className="hover:text-orange-500">Home</a>
                        <a href="#" className="hover:text-orange-500">Pricing</a>
                        <a href="#" className="hover:text-orange-500">Products</a>
                        <a href="#" className="hover:text-orange-500">About</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white ">
                        <a href="#" className="hover:text-orange-500">Careers</a>
                        <a href="#" className="hover:text-orange-500">Community</a>
                        <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input 
                                type='text'
                                placeholder='Update in your inbox'
                                className="flex-1 px-4 rounded-full focus:outline-none"/>
                            <button className="px-6 py-2 text-white rounded-full bg-orange-500 hover:bg-orange-600 focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;