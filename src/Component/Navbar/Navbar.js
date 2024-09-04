import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 p-3 transition-colors duration-300 ease-in-out ${scrolled ? 'bg-white' : 'bg-[#E6F0FD]'} flex items-center justify-center lg:px-14`}
        >
            <div className="container flex justify-between items-center">
                <Link to="/" id="brand">
                    <img src="img/logo.svg" alt="Logo" />
                </Link>

                <div id="nav-menu" className="hidden md:flex gap-7">
                    <Link to="/" className="text-[18px] font-normal hover:text-[#0666EB]">Home</Link>
                    <Link to="/services" className="text-[18px] font-normal hover:text-[#0666EB]">Services</Link>
                    <Link to="/pricing" className="text-[18px] font-normal hover:text-[#0666EB]">Pricing</Link>
                    <Link to="/about" className="text-[18px] font-normal hover:text-[#0666EB]">About Us</Link>
                    <Link to="/contact" className="text-[18px] font-normal hover:text-[#0666EB]">Contact</Link>
                </div>

                <div id="login" className="hidden md:flex gap-3 items-center">
                    <div id="logi">
                        <Link to="/login">
                            <p className="text-[14px] font-semibold hover:text-[#1A78F0]">Log In</p>
                        </Link>
                    </div>
                    <div id="regi"
                        className="bg-[#0666EB] hover:bg-[#1A78F0] flex gap-2 px-[16px] py-[9px] text-white rounded-full">
                        <Link to="/regi">
                            <p className="text-[14px] font-semibold">Sign Up</p>
                        </Link>
                        <img src="img/users-plus.svg" alt="Sign Up Icon" className="bg-black-700" />
                    </div>
                </div>

                <button className="p-2 md:hidden" onClick={handleMenu}>
                    <i className="fa-solid fa-bars text-gray-600"></i>
                </button>

                {menuOpen && (
                    <div id="nav-dialog" className="fixed z-50 md:hidden bg-white inset-0 p-3 max-h-max drop-shadow-xl">
                        <div id="nav-bar" className="flex justify-between">
                            <Link to="/index" id="brand">
                                <img src="img/logo.svg" alt="Logo" />
                            </Link>
                            <button className="p-2 md:hidden" onClick={handleMenu}>
                                <i className="fa-solid fa-xmark text-gray-600"></i>
                            </button>
                        </div>
                        <div className="mt-6">
                            <Link to="/" className="text-[18px] font-normal p-3 block rounded-lg hover:bg-[#C4D9F3]">Home</Link>
                            <Link to="/services" className="text-[18px] font-normal p-3 block rounded-lg hover:bg-[#C4D9F3]">Services</Link>
                            <Link to="/pricing" className="text-[18px] font-normal p-3 block rounded-lg hover:bg-[#C4D9F3]">Pricing</Link>
                            <Link to="/about" className="text-[18px] font-normal p-3 block rounded-lg hover:bg-[#C4D9F3]">About Us</Link>
                            <Link to="/contact" className="text-[18px] font-normal p-3 block rounded-lg hover:bg-[#C4D9F3]">Contact</Link>
                        </div>
                        <div className="h-[1px] bg-gray-200"></div>
                        <div id="login" className="mt-3 gap-3 items-center">
                            <div id="logi">
                                <Link to="/login">
                                    <p className="text-[14px] font-semibold text-center">Log In</p>
                                </Link>
                            </div>
                            <div id="regi" className="bg-[#0666EB] mt-3 flex justify-center gap-2 px-[16px] py-[9px] text-white rounded-full">
                                <Link to="/regi">
                                    <p className="text-[14px] font-semibold">Sign Up</p>
                                </Link>
                                <img src="img/users-plus.svg" alt="Sign Up Icon" className="bg-black-700" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
