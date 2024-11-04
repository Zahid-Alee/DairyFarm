import Cart from '@/Homepage/Components/Cart'
import { HomeContext } from '@/Homepage/context/HomeContext'
import { Badge } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { GrCart } from 'react-icons/gr'

function Nav() {

    const { state, methods } = useContext(HomeContext)

    const [open, setOpen] = useState(false)

    useEffect(() => {

        if (state.auth?.user) {
            methods.loadCart();
        }

    }, [state.loadingCart]);




    return (
        <div>

            <div className="container-fluid bg-dark px-0">
                <div className="row g-0 d-none d-lg-flex">
                    <div className="col-lg-6 ps-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center text-light">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
                            <span className="me-2 fw-semi-bold"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                            <span>+012 345 6789</span>
                        </div>
                    </div>
                </div>
            </div>

            <nav style={{ zIndex: 10 }} className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0">Dairy Supply Management System</h1>
                </a>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        {/* <a href="about.html" className="nav-item nav-link">About</a> */}
                        {/* <a href="service.html" className="nav-item nav-link">Services</a> */}
                        <a href="/products/machine" className="nav-item nav-link">Products</a>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <a href="gallery.html" className="dropdown-item">Gallery</a>
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                        {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                        <Toaster position="top-right" />
                        <Cart auth={state.auth} open={open} onClose={() => setOpen(false)} />

                        {
                            state?.auth?.user ?
                                <>


                                    {state?.auth.user.email === "admin@autopulse.com"
                                        && <a href="/dashboard/spare-parts/list" className="nav-item nav-link">Dashboard</a>
                                    }
                                    <a href="/logout" className="nav-item nav-link">Logout</a>


                                </>
                                :
                                <>
                                    <a href="/login" className="nav-item nav-link">Login</a>
                                    <a href="/register" className="nav-item nav-link">Register</a>

                                </>
                        }
                        <Badge count={state?.cart?.cartItems?.length}
                        >
                            <div onClick={() => setOpen(true)} className="flex items-center gap-3 nav-item nav-link">
                                Cart <GrCart />
                            </div>
                        </Badge>
                    </div>
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
