function Navbar(){
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 w-full" style={{backgroundColor: '#ffffff', fontFamily: 'Quicksand, sans-serif'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center" style={{height: '48px'}}>
                    {/* Logo/Brand - Left side */}
                    <div className="flex-shrink-0" style={{marginLeft: '2rem'}}>
                        <button 
                            onClick={() => scrollToSection('Hero')}
                            className="text-gray-800 hover:text-pink-500 transition-colors duration-300" 
                            style={{
                                fontSize: '1.8rem', 
                                fontWeight: 'bold', 
                                fontFamily: '"Cedarville Cursive", cursive',
                                fontDisplay: 'swap',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#f9a8d4',
                                height: '1rem',padding:'0.5rem',paddingBottom:'1rem'
                            }}
                        >
                            Sanhitha
                        </button>
                    </div>
                    
                    {/* Desktop Navigation - Center */}
                    <div className="flex items-center">
                        <div className="flex list-none" style={{gap: '3rem'}}>
                            <button onClick={() => scrollToSection('Hero')}>
                                <a 
                                    href="#Hero" 
                                    className="!text-gray-700 hover:!text-pink-500 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-pink-100 hover:shadow-lg transform hover:scale-105"
                                >
                                    Home
                                </a>
                            </button>
                            <button onClick={() => scrollToSection('About')}>
                                <a 
                                    href="#About" 
                                    className="!text-gray-700 hover:!text-pink-500 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-pink-100 hover:shadow-lg transform hover:scale-105"
                                >
                                    About
                                </a>
                            </button>
                            <button onClick={() => scrollToSection('Education')}>
                                <a 
                                    href="#Education" 
                                    className="!text-gray-700 hover:!text-pink-500 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-pink-100 hover:shadow-lg transform hover:scale-105"
                                >
                                    Education
                                </a>
                            </button>
                            <button onClick={() => scrollToSection('Projects')}>
                                <a 
                                    href="#Projects" 
                                    className="!text-gray-700 hover:!text-pink-500 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-pink-100 hover:shadow-lg transform hover:scale-105"
                                >
                                    Projects
                                </a>
                            </button>
                            <button onClick={() => scrollToSection('contact')}>
                                <a 
                                    href="#contact" 
                                    className="!text-gray-700 hover:!text-pink-500 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-pink-100 hover:shadow-lg transform hover:scale-105"
                                >
                                    Contact
                                </a>
                            </button>
                        </div>
                    </div>
                    
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-pink-500 focus:outline-none focus:text-pink-500 transition-colors duration-300 p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;