import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HomeContext } from '../context/HomeContext';
import { Parser } from 'html-to-react';
import RelatedProducts from '../Components/RelatedProducts';
import { MdWhatsapp } from 'react-icons/md';
import { Image } from 'antd';
import './singleproduct.scss';
import ImageViewer from './ProductImages';

const App = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedTab, setSelectedTab] = useState('description');
    const [reviewData, setReviewData] = useState([]);

    const context = useContext(HomeContext);
    const { state, methods } = context;

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        methods.getProductDetails(location.pathname.split('/').pop());
    }, []);

    const settings = {
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
    };

    async function fetchReviews() {
        let reviews = await methods.loadReviews(state?.selectedProduct?.id);
        if (reviews) {
            setReviewData(reviews);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, [state.selectedProduct]);

    const handleAddToCart = (id) => {
        methods.addToCart(id);
    };

    return (
        <div className='container mx-auto  py-6'>
            <div className='single-product-container'>
                <div className="product-images-container">
                    <ImageViewer images={state?.selectedProduct?.images} />
                </div>

                <div className='flex-1 flex flex-col md:flex-row ' >

                    <div className='flex-1 md:p-6 w-full'>
                        <h2 className='text-2xl font-semibold mb-4'>{state?.selectedProduct?.name}</h2>
                        {state?.selectedProduct?.features && (
                            <p className='text-gray-700 mb-4 flex flex-col gap-3'>
                                {Parser().parse(state?.selectedProduct?.features)}
                            </p>
                        )}
                        <div className="flex items-center space-x-4">

                            <a
                                href={`https://wa.me/13072950382?text=${encodeURIComponent('Hey, Im intrested in ' + state?.selectedProduct?.name)}`}
                                className='bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2'
                                target='_blank'
                            >
                                <MdWhatsapp size={20} />
                                <span>Chat to Buy</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <hr className='my-6' />

            <div className='mb-6  bg-white'>
                <div className='flex'>
                    <strong
                        className={`py-2 px-3 text-secondary text-lg font-semibold ' : ''}`}
                        onClick={() => setSelectedTab('description')}
                        style={{ fontWeight: "500" }}
                    >
                        Description
                    </strong>

                </div>
                <div className='py-4 px-0'>
                    {selectedTab === 'description' && (
                        <div className='text-gray-700'>
                            {Parser().parse(state?.selectedProduct?.description)}
                        </div>
                    )}

                </div>
            </div>

            <hr className='my-6' />

            <RelatedProducts />
        </div>
    );
};

export default App;
