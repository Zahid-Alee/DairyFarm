import React, { useContext, useEffect, useState } from 'react'
import OurProds from './OurProds'
import { HomeContext } from '@/Homepage/context/HomeContext'
import Latest from '@/Homepage/Components/Latest';
import Cart from '@/Homepage/Components/Cart';
import { Toaster } from 'react-hot-toast';
import { Badge } from 'antd';
import { GrCart } from 'react-icons/gr';
import Nav from './Nav';

export default function Home({ auth }) {



    return (
        <div className=''>
            <div className="container-fluid px-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8 text-start">
                                            <p className="fs-4 text-white">Welcome to our dairy farm</p>
                                            <h1 className="display-1 text-white mb-5 animated slideInRight">The Farm of Dairy products</h1>
                                            <a href="" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-8 text-end">
                                            <p className="fs-4 text-white">Welcome to our dairy farm</p>
                                            <h1 className="display-1 text-white mb-5 animated slideInRight">Best Organic Dairy Products</h1>
                                            <a href="" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="row g-2">
                                <div className="col-6 position-relative wow fadeIn" data-wow-delay="0.7s">
                                    <div className="about-experience bg-secondary rounded">
                                        <h1 className="display-1 mb-0">25</h1>
                                        <small className="fs-5 fw-bold">Years Experience</small>
                                    </div>
                                </div>
                                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid rounded" src="img/service-1.jpg" />
                                </div>
                                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                                    <img className="img-fluid rounded" src="img/service-2.jpg" />
                                </div>
                                <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                                    <img className="img-fluid rounded" src="img/service-3.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p className="section-title bg-white text-start text-primary pe-3">About Us</p>
                            <h1 className="mb-4">Know About Our Dairy Farm & Our History</h1>
                            <p className="mb-4">
                                Welcome to our website, dedicated to sharing the rich history and operations of our dairy farm. Here, you'll discover the journey of our family-run farm, steeped in tradition and committed to excellence. From our humble beginnings to becoming a trusted source of high-quality dairy products, our story is one of passion, hard work, and a deep respect for nature
                            </p>
                            <div className="row g-5 pt-2 mb-5">
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-4" src="img/service.png" alt="" />
                                    <h5 className="mb-3">Dedicated Services</h5>
                                    <span>We offer dedicated services to ensure the highest quality and satisfaction for all your dairy needs.
                                    </span>
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-4" src="img/product.png" alt="" />
                                    <h5 className="mb-3">Organic Products</h5>
                                    <span>Our organic products are crafted with the utmost care, using only the finest natural ingredients for a healthier and more delicious experience.
                                    </span>
                                </div>
                            </div>
                            <a className="btn btn-secondary rounded-pill py-3 px-5" href="">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Features Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
                            <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">People choose us because of our unwavering commitment to quality, sustainability, and customer satisfaction.</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Premium quality dairy products                    </p>
                            <p><i className="fa fa-check text-primary me-3"></i>Sustainable and eco-friendly farming practices
                            </p>
                            <p><i className="fa fa-check text-primary me-3"></i>Humane treatment of animals
                            </p>
                            <a className="btn btn-secondary rounded-pill py-3 px-5 mt-3" href="">Explore More</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="rounded overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="text-center bg-primary py-5 px-4">
                                            <img className="img-fluid mb-4" src="img/experience.png" alt="" />
                                            <h1 className="display-6 text-white" data-toggle="counter-up">25</h1>
                                            <span className="fs-5 fw-semi-bold text-secondary">Years Experience</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="text-center bg-secondary py-5 px-4">
                                            <img className="img-fluid mb-4" src="img/award.png" alt="" />
                                            <h1 className="display-6" data-toggle="counter-up">183</h1>
                                            <span className="fs-5 fw-semi-bold text-primary">Award Winning</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="text-center bg-secondary py-5 px-4">
                                            <img className="img-fluid mb-4" src="img/animal.png" alt="" />
                                            <h1 className="display-6" data-toggle="counter-up">2619</h1>
                                            <span className="fs-5 fw-semi-bold text-primary">Total Animals</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                        <div className="text-center bg-primary py-5 px-4">
                                            <img className="img-fluid mb-4" src="img/client.png" alt="" />
                                            <h1 className="display-6 text-white" data-toggle="counter-up">51940</h1>
                                            <span className="fs-5 fw-semi-bold text-secondary">Happy Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features End --> */}

            <Latest />
            {/* <OurProds /> */}



            {/* <!-- Banner Start --> */}
            {/* <div className="container-fluid banner my-5 py-5" data-parallax="scroll" data-image-src="img/banner.jpg">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-4">
                                    <img className="img-fluid rounded" src="img/banner-1.jpg" alt="" />
                                </div>
                                <div className="col-sm-8">
                                    <h2 className="text-white mb-3">We Sell Best Dairy Products</h2>
                                    <p className="text-white mb-4">We sell the best dairy products, ensuring exceptional quality and taste in every bite.</p>
                                    <a className="btn btn-secondary rounded-pill py-2 px-4" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-4">
                                    <img className="img-fluid rounded" src="img/banner-2.jpg" alt="" />
                                </div>
                                <div className="col-sm-8">
                                    <h2 className="text-white mb-3">We Deliver Fresh Mild Worldwide</h2>
                                    <p className="text-white mb-4">We deliver fresh milk worldwide, ensuring it reaches you at the peak of freshness.</p>
                                    <a className="btn btn-secondary rounded-pill py-2 px-4" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Banner End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <p className="section-title bg-white text-center text-primary px-3">Our Services</p>
                        <h1 className="mb-5">Services That We Offer For Entrepreneurs</h1>
                    </div>
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex h-100">
                                <div className="service-img">
                                    <img className="img-fluid" src="img/service-1.jpg" alt="" />
                                </div>
                                <div className="service-text p-5 pt-0">
                                    <div className="service-icon">
                                        <img className="img-fluid rounded-circle" src="img/service-1.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-3">Best Animal Selection</h5>
                                    <p className="mb-4">We pride ourselves on the best animal selection, ensuring healthy and high-quality livestock.</p>
                                    <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex h-100">
                                <div className="service-img">
                                    <img className="img-fluid" src="img/service-2.jpg" alt="" />
                                </div>
                                <div className="service-text p-5 pt-0">
                                    <div className="service-icon">
                                        <img className="img-fluid rounded-circle" src="img/service-2.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-3">Breeding & Veterinary</h5>
                                    <p className="mb-4">Our expert breeding and veterinary services ensure the health and genetic excellence of our livestock.</p>
                                    <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex h-100">
                                <div className="service-img">
                                    <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                </div>
                                <div className="service-text p-5 pt-0">
                                    <div className="service-icon">
                                        <img className="img-fluid rounded-circle" src="img/service-3.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-3">Care & Milking</h5>
                                    <p className="mb-4">We prioritize the utmost care and advanced milking techniques to maintain the highest quality and well-being of our dairy cows.</p>
                                    <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Gallery Start --> */}
            <div className="container-xxl py-5 px-0">
                <div className="row g-0">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-5.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-5.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-1.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-1.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-2.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-6.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-6.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-7.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-7.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-3.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-4.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-4.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-8.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="img/gallery-8.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Gallery End --> */}


            {/* <!-- Product Start --> */}
            {/* <!-- Product End --> */}


            {/* <!-- Team Start --> */}
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
                        <h1 className="mb-5">Experienced Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded p-4">
                                <img className="img-fluid rounded mb-4" src="img/team-1.jpg" alt="" />
                                <h5>Adam Crew</h5>
                                <p className="text-primary">Founder</p>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded p-4">
                                <img className="img-fluid rounded mb-4" src="img/team-2.jpg" alt="" />
                                <h5>Doris Jordan</h5>
                                <p className="text-primary">Veterinarian</p>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded p-4">
                                <img className="img-fluid rounded mb-4" src="img/team-3.jpg" alt="" />
                                <h5>Jack Dawson</h5>
                                <p className="text-primary">Farmer</p>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <p className="section-title bg-white text-center text-primary px-3">Testimonial</p>
                        <h1 className="mb-5">What People Say About Our Dairy Farm</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-img">
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt="" />
                                <img className="img-fluid animated pulse infinite" src="img/testimonial-4.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="img/testimonial-1.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="img/testimonial-2.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="img/testimonial-3.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="img/testimonial-4.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Testimonial End --> */}


            {/* <!-- Footer Start --> */}
        
            {/* <!-- Footer End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>

        </div>
    )
}
