import React from 'react';
import HomeLayout from '@/Layouts/HomeLayout';
// import '../../css/style.css';
// import '../Homepage/assets/main';
// import '../Homepage/style.scss';
import HomeContextProvider from '@/Homepage/context/HomeContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Track from '@/Homepage/Pages/Track';
import HomePage from '@/Homepage/Pages/HomePage';
import AllProducts from '@/Homepage/Pages/AllProducts';
import OrderSuccess from './OrderSuccess';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ProductType from '@/Homepage/Pages/ProductType';
import AboutPage from '@/Homepage/Pages/About';
import ContactPage from '@/Homepage/Pages/ContactUsPage';
import PrivacyPolicy from '@/Homepage/Pages/PrivacyPolicy';
import AllBlogs from '@/Homepage/Pages/blogs/AllBlogs';
import SingleBlog from '@/Homepage/Pages/blogs/SingleBlog';
import App from '@/Homepage/Pages/Product';
import Preloader from './Preloader';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <HomeContextProvider auth={auth}>   
            <HomeLayout auth={auth}>
                <BrowserRouter basename=''>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/track' element={<Track />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/products' element={<AllProducts />} />
                        <Route path='/product/:slug' element={< App />} />
                        <Route path='/products/:slug/search' element={< AllProducts />} />
                        <Route path='/products/:slug' element={< ProductType />} />
                        <Route path='/blogs/:slug' element={< SingleBlog />} />
                        <Route path='/blogs' element={< AllBlogs />} />
                        <Route path='/payment/successfull' element={< OrderSuccess />} />
                        <Route path='/privacy-policy' element={< PrivacyPolicy />} />
                        <Route path='/login' element={< Login />} />
                        <Route path='/register' element={< Register />} />
                    </Routes>
                </BrowserRouter>
            </HomeLayout>
            <Preloader />
        </HomeContextProvider>
    );
}
