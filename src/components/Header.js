import { useRef } from 'react';

import './style.css';

const Header = () => {

    const burgerRef = useRef(null);
    const menuRef = useRef(null);

    const openMenu = () => {
        const burger = burgerRef.current;
        const menu = menuRef.current;
        burger.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');  
    }

    return(
        <header id = 'header'>
            <nav className="relative container mx-auto p-6 ">
                <div className="flex items-center justify-between">
                    <div className="pt-2 ">
                        <img src = './assets/logo.svg' alt='Manage logo'/>
                    </div>
                    <div className="hidden md:flex space-x-6 font-medium">
                        <a href="#" className="hover:text-orange-600">Pricing</a>
                        <a href="#" className="hover:text-orange-600">Product</a>
                        <a href="#" className="hover:text-orange-600">About Us</a>
                        <a href="#" className="hover:text-orange-600">Careers</a>
                        <a href="#" className="hover:text-orange-600">Community</a>
                    </div>
                    <a className="hidden text-white bg-orange-500 py-3 px-6 rounded-full font-bold hover:bg-orange-600 cursor-pointer md:block">       
                        Get Started                           
                    </a>
                    <button 
                        id="menu-btn" 
                        className="block hamburger md:hidden focus:outline-none"
                        ref={burgerRef}
                        onClick={openMenu}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                <div className="md:hidden">
                    <div 
                        id="menu"
                        ref={menuRef} 
                        className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white 
                        sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                            <a href="#" className="hover:text-orange-600">Pricing</a>
                            <a href="#" className="hover:text-orange-600">Product</a>
                            <a href="#" className="hover:text-orange-600">About Us</a>
                            <a href="#" className="hover:text-orange-600">Careers</a>
                            <a href="#" className="hover:text-orange-600">Community</a>
                    </div>  
                </div>
            </nav>
        </header>
    )
}

export default Header;