
const Header = () => {
    return(
        <header id = 'header'>
            <nav className="relative container mx-auto p-6 ">
                <div className="flex items-center justify-between">
                    <div className="pt-2 ">
                        <img src = './assets/logo.svg' alt='Manage logo'/>
                    </div>
                    <div className="hidden md:flex space-x-6 font-medium">
                        <a href="#" className="hover:text-zinc-700">Pricing</a>
                        <a href="#" className="hover:text-zinc-700">Product</a>
                        <a href="#" className="hover:text-zinc-700">About Us</a>
                        <a href="#" className="hover:text-zinc-700">Careers</a>
                        <a href="#" className="hover:text-zinc-700">Community</a>
                    </div>
                    <a className="text-white bg-orange-500 py-3 px-6 rounded-full font-bold hover:bg-orange-600 cursor-pointer">       
                        Get Started                           
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;