

const Footer = () => {

    return(
        <footer id='footer' className="bg-blue-900">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"> 
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div>
                        <img src='assets/logo-white.svg' className='h-8' alt=''/>
                    </div>
                    <div className="flex justify-center space-x-4">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;