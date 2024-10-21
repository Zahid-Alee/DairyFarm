import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../context/HomeContext';
import { Toaster } from 'react-hot-toast';
import Cart from '../Components/Cart';
import ProductSearch from './ProductSearch';
import { GrCart, GrLocation, GrMail, GrMenu, GrUserAdd } from 'react-icons/gr';
import ProfileDropdown from '../Components/ProfileDropdown';
import ProdDropdown from './ProdDropdown';
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6';
import { MdOutlineLocationOn } from "react-icons/md";
import { Badge, Button, Dropdown, Space, Tooltip } from 'antd';
import { FaFacebookSquare, FaWhatsapp, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

import './nav.scss'
import App from '../Components/Menubar';

const Navbar = ({ auth }) => {


    const [open, setOpen] = useState(false);
    const context = useContext(HomeContext);
    const { state, dispatch, methods } = context;

    const [scrollY, setScrollY] = useState(window.scrollY);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const navFixElement = document.getElementById('nav-fix');
            if (navFixElement) {
                if (window.scrollY >= 40) {
                    navFixElement.style.position = 'fixed';
                    navFixElement.style.top = '0';
                    navFixElement.style.width = '100%';
                    navFixElement.style.background = 'transparent';
                    navFixElement.style.borderRadius = '0px';
                    navFixElement.classList.remove('container');
                } else {
                    navFixElement.style.position = 'static';
                    navFixElement.style.background = '';
                    navFixElement.classList.add('container');
                    navFixElement.style.borderRadius = '30px';

                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

        if (auth?.user) {
            methods.loadCart();
        }

    }, [state.loadingCart]);


    const menuItems = [

        { key: '3', label: <a href={`${location.pathname.split('/')[1]=='parts' ? '/parts':''}/blogs`}>Blogs</a> },
        { key: '4', label: <a href={`${location.pathname.split('/')[1]=='parts' ? '/parts':''}/about`}>About Us</a> },
        { key: '5', label: <a href={`${location.pathname.split('/')[1]=='parts' ? '/parts':''}/contact`}>Contact</a> },
    ];

    const socialIcons = (
        <div className="flex gap-4">
            <a href="https://www.facebook.com/autopulseglobaltrading/"><FaFacebookSquare size={20} className="text-light-500" /></a>
            <a href=""><FaSquareWhatsapp size={20} className="text-ligt-500" /></a>
            <a href="https://www.linkedin.com/company/autopulseglobaltrading/"><FaLinkedin size={20} className="text-light-500" /></a>
            <a href="https://www.instagram.com/autopulseglobaltradingg/"><FaSquareInstagram size={20} className="text-light-500" /></a>
            <a href="https://www.youtube.com/@autopulseglobaltrading/"><FaYoutubeSquare size={20} className="text-light-500" /></a>
        </div>
    );


    return (
        <div className="bg-gray-800 p-0 relative z-50 pb-1">
            <a href='https://wa.me/3072950382' className="" style={{ position: 'fixed', bottom: "2vw", left: '2vw' }}>
                <Tooltip title={'Contact US'} className='stick-whatsapp animate-bounce' >
                    <svg color='#25D366' stroke="currentColor" style={{ fontSize: '60px' }} fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path>
                    </svg>
                </Tooltip>
            </a>
            <Toaster position="top-right" />
            <Cart auth={auth} open={open} onClose={() => setOpen(false)} />
            <div className="nav-up flex justify-between items-center  text-white" style={{ padding: '0.5vw' }}>
                <div style={{ gap: '3vw' }} className="hidden flex items-center  unhide-750 mt-2 mx-1">
                    <App />
                    <a href="/" className="">
                        <img loading="lazy" width={80} src="/images/final_logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="flex items-center gap-4 hide-1200">
                    <Tooltip title={'Phone number'} className="text-sm flex items-center gap-1">
                        <FaWhatsapp size={20} />
                        <a href={`https://wa.me/13072950382?`} style={{ fontWeight: '500' }}>
                            +1307 2950382                        </a>
                    </Tooltip>
                    <Tooltip title={'Email Us'} className="text-sm flex items-center gap-1">
                        <GrMail size={20} />
                        <a style={{ fontWeight: '500' }} href="mailto:autopulsetrading@gmail.com">
                            info@autopulsetrading.com
                        </a>
                    </Tooltip>
                </div>
                <div className="px-4 py-2 lg:flex justify-center d-none">
                    <ProductSearch />
                </div>
                <div id='home-nav-top' className="px-4 py-2  lg:flex justify-center">
                    <nav>
                        <ul className="flex gap-8 text-white">
                            <li >
                                <a className='text-light' style={{ fontWeight: "500" }} href="/">Home</a>
                            </li>
                            <li >
                                <ProdDropdown />
                            </li>
                            {menuItems?.map((item) => (
                                <li key={item.key}>
                                    <a style={{ fontWeight: "500" }} className='text-light' href={item.label.props.href}>{item.label.props.children}</a>
                                </li>
                            ))}

                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4 hide-750">
                    {socialIcons}
                </div>

                <div className=" unhide-1200 flex items-center gap-4 ">
                    <div style={{ gap: '3vw' }} className="hidden flex items-center  icons-container unhide-750 hide-1200 mx-1">

                         <Badge count={state?.cart?.cartItems?.length}
                            className='flex items-center gap-3 hide-750'
                        >
                            <a className='icon-container' onClick={() => setOpen(true)}>
                                <GrCart className="text-xl cursor-pointer" onClick={() => setOpen(true)} />
                                <span>Cart</span>
                            </a>

                        </Badge>
                        
                        {
                            location.pathname.split('/')[1] === 'parts' && <a href="/track" className="text-gray-800 flex icon-container hide-1200 items-center gap-1">
                                <MdOutlineLocationOn size={20} className="text-lg" />
                                <span>Track</span>
                            </a>
                        }

                        {!auth.user ? (
                            <a href="/login" className="text-light-800 icon-container flex items-center gap-1">
                                <span className='text-light'> Login</span>
                            </a>
                        ) : (
                            <a href="/logout" className="text-light-800 icon-container flex items-center gap-1">
                                <span className='text-light'> Logout</span>
                            </a>
                        )}
                        {!auth.user && (
                            <a href="/register" className="text-gray icon-container flex items-center gap-1">
                                <span className='text-light'>Register</span>
                            </a>
                        )}
                        <div className="hide-1200">
                            <ProfileDropdown auth={auth} />
                        </div>
                    </div>
                    <div className="hidden unhide-1200 hide-750 flex gap-3 items-center">
                        <App position='right' />
                        <ProfileDropdown auth={auth} />

                    </div>

                </div>

            </div>
            <div id='nav-fix' className="container nav-down flex justify-between items-center gap-3 bg-white" style={{ borderRadius: "30px", padding: "1.5vw" }}>
                <a href="/" className='hide-750'>
                    <img loading="lazy" width={150} src="/images/final_logo.png" alt="" />
                </a>


                <div className="flex gap-4 items-center justify-between sm-gap-3" style={{ width: "100%" }}>
                    <div className="w-full flex items-center justify-center">
                        <ProductSearch />
                    </div>
                    <div style={{ marginRight: "3vw" }} className="d-none unhide-750 sm-gap-3 flex gap-4 items-center hide-1200">
                        {location.pathname.split('/')[1] === 'parts' && <Badge count={state?.cart?.cartItems?.length}
                            className='flex items-center gap-3'
                        >
                            <Button className='primary-btn' icon={<GrCart className="text-xl cursor-pointer" />} onClick={() => setOpen(true)}>

                            </Button>

                        </Badge>}

                        <div className="unhide-1200 unhide-750">
                            <ProfileDropdown auth={auth} />
                        </div>

                    </div>

                    <div className="flex items-center gap-4 icons-container hide-750 ">

                        {location.pathname.split('/')[1] === 'parts' && <Badge count={state?.cart?.cartItems?.length}
                            className='flex items-center gap-3'
                        >
                            <a className='icon-container' onClick={() => setOpen(true)}>
                                <GrCart className="text-xl cursor-pointer" onClick={() => setOpen(true)} />
                                <span>Cart</span>
                            </a>

                        </Badge>}

                        {location.pathname.split('/')[1] === 'parts' && <a href="/track" className="text-gray-800 flex icon-container hide-1200 items-center gap-1">
                            <MdOutlineLocationOn size={20} className="text-lg" />
                            <span>Track</span>
                        </a>}


                        {!auth.user ? (
                            <a href="/login" className="text-gray-800 primary-btn icon-container flex items-center gap-1">
                                Login
                            </a>
                        ) : (
                            <a href="/logout" className="primary-btn icon-container flex items-center gap-1">
                                Logout
                            </a>
                        )}
                        {!auth.user && (
                            <a href="/register" className=" primary-btn 
                        text-gray icon-container flex items-center gap-1">
                                Register
                            </a>
                        )}
                        <div className="hide-1200">
                            <ProfileDropdown auth={auth} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;
