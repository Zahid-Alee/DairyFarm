import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../context/HomeContext';
import About from '../Components/About';
import Slider from '../Components/Slider';
import { MdCheckCircle, MdBuild, MdVerified, MdMonitor, MdFeedback } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const data = [
    {
        id: 1,
        icon: <MdCheckCircle size={25} />,
        title: 'Thorough Inspection',
        description: "Every product, whether used machinery, vehicles, or bikes, undergoes a meticulous inspection process. Our team of experts evaluates each item for functionality, durability, and safety, identifying any defects or issues that may affect performance.",
        delay: '0.1s',
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-600'
    },
    {
        id: 2,
        icon: <MdBuild size={25} />,
        title: 'Refurbishment and Testing',
        description: "For used machinery and vehicles, we conduct thorough refurbishment and testing. This process includes replacing worn-out parts, repairing any damage, and performing rigorous operational tests to ensure optimal functionality.",
        delay: '0.2s',
        bgColor: 'bg-green-500',
        textColor: 'text-green-600'
    },
    {
        id: 3,
        icon: <MdVerified size={25} />,
        title: 'Certified Standards',
        description: "We adhere to international quality standards and certifications. Our products are inspected and certified to meet industry-specific requirements, providing our customers with the assurance that they are receiving reliable and safe products.",
        delay: '0.3s',
        bgColor: 'bg-red-500',
        textColor: 'text-red-600'
    },
    {
        id: 4,
        icon: <MdMonitor size={25} />,
        title: 'Continuous Monitoring',
        description: "Quality assurance doesn't end with inspection and testing. We continuously monitor the performance and quality of our products, making adjustments and improvements as needed to maintain the highest levels of satisfaction.",
        delay: '0.4s',
        bgColor: 'bg-yellow-500',
        textColor: 'text-yellow-600'
    },
    {
        id: 5,
        icon: <MdFeedback size={25} />,
        title: 'Customer Feedback',
        description: "We value our customers' input and use their feedback to enhance our products and services. By listening to our clients, we can address any concerns and improve our quality control processes.",
        delay: '0.5s',
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-600'
    }
];

function AboutPage() {

    const { state, dispatch, methods } = useContext(HomeContext);

    const [slides, setSlides] = useState([])

    async function fetchSlides() {
        let slides = await methods.loadSlides('about_slider');
        if (slides) {
            setSlides(slides);
        }
    }

    console.log('slides', slides)

    useEffect(() => {
        fetchSlides();
    }, []);


    const videos = [
        {
            src: '/images/WhatsApp Video 2024-08-21 at 11.48.14 PM.mp4'

        }
    ]


    return (
        <div className='bg-whtite'>
            <div
                className="container-fluid page-header m-0 p-0"
                style={{
                    height: "100%",
                    background: `url(/images/about-banner.jpg) center center/cover`,
                }}
            >
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb" style={{ background: "transparent" }}>
                            <ol className="breadcrumb justify-content-center text-uppercase" style={{ background: "transparent" }}>
                                <li className="breadcrumb-item"><a href="/" className='text-light'>Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Track</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="best-features about-features" style={{ margin: '30px 0px' }}>
                <div className="container mt-5  pt-4">
                    <div className="row">
                        {/* <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                            </div>
                        </div> */}
                        <div className="col-md-6">
                            <div className="right-image">
                                <Slider videos={videos} slides={slides} link={false} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h1 className='h3 text-yellow-600 m-0 mb-3 p-0'>What is Autopulse</h1>
                                <p className='mt-1 text-gray-500'>
                                    Autopulse Global Trading Company, with 15 years of experience, is your trusted partner in exporting high-quality used machinery, new and used vehicles, and new bikes from China. We pride ourselves on our fast shipping services and rigorous quality assurance processes, ensuring you receive top-notch products promptly and reliably. Our commitment to excellence and customer satisfaction sets us apart, making us a preferred choice for clients worldwide
                                </p>
                                <ul className="social-icons">
                                    <li><a className='!flex items-center justify-center' href="#"><FaFacebook  className='text-yellow-700' /></a></li>
                                    <li><a className='!flex items-center justify-center' href="#"><FaLinkedin className='text-yellow-700' /></a></li>
                                    <li><a className='!flex items-center justify-center' href="#"><FaYoutube className='text-yellow-700' /></a></li>
                                    <li><a className='!flex items-center justify-center' href="#"><FaWhatsapp className='text-yellow-700' /></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-members my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading h3 text-zinc-600  mb-2 border-none my-1">
                                Company Introduction
                            </h2>
                            <p className='mt-1 text-gray-500'>
                                Welcome to Autopulse Global Trading Company! Established in 2009 and headquartered in [City, China], we have over 15 years of experience as a leading exporter of high-quality used machinery, new and used vehicles, and new bikes from China. Our extensive range of products includes industrial and construction machinery, passenger and commercial vehicles, and a variety of bikes, including mountain, road, and electric models. We are committed to delivering exceptional products and services, backed by rigorous quality assurance and fast, reliable shipping to clients worldwide. Our team of experts ensures a seamless and efficient experience, making us a trusted partner for customers across the globe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-members my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading h3 text-zinc-600  mb-2 border-none my-1">
                                OUR MISSION
                            </h2>
                            <p className='mt-1 text-gray-500'>

                                At Autopulse Global Trading Company, our mission is to connect global buyers with high-quality used machinery, vehicles, and bikes from China, providing reliable and cost-effective solutions. We are dedicated to fostering long-term relationships with our customers by consistently delivering exceptional products and outstanding service. Through our commitment to quality, innovation, and efficiency, we aim to be a trusted partner, supporting the growth and success of businesses and individuals worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-members my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-heading h3 text-zinc-600  mb-2 border-none my-1">
                                Quality Assurance
                            </h2>
                            <p className='mt-1 text-gray-500'>
                                At Autopulse Global Trading Company, quality assurance is a cornerstone of our operations. We implement a comprehensive quality control process to ensure that every product we offer meets our high standards and exceeds customer expectations. Our quality assurance procedures include:                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    {data?.map((service) => (
                        <div className="flex gap-4 items-start" key={service.id}>
                            <span className={`bg-yellow-500/10  text-yellow-600 p-3 rounded-full`} >
                                {service.icon}
                            </span>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-700">{service.title}</h3>
                                <p className="mt-1 text-gray-500">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
