import React, { useContext } from 'react'
import { HomeContext } from '../context/HomeContext';
import { Button, Flex } from 'antd';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductComponent from './ProductComponent';
import ProductListSkeleton from './ProductSkeleton';

const prod_types = {
    machines: 'Dairy',
    e_bikes: 'Bakery',
    e_vehicles: 'Vegitables',
}
const prod_links = {
    machines: 'machine',
    e_bikes: 'electric-bikes',
    e_vehicles: 'electric-vehicles',
}

function ProductsList({ product_type_key = null, product_type = {} }) {

    const { state, dispatch, methods } = useContext(HomeContext);

    const sliderRef = React.useRef(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (

        <div id='products-container' className="latest-products container  p-3 mt-3 border" style={{ padding: '30px 12px', }}>
            <div className="text-center mb-8 py-2 pb-4 flex align-center justify-between px-1">
                <h2 className="text-secondary text-lg font-semibold">Explore {prod_types[product_type_key]}</h2>
                <a href={`/products/${prod_links[product_type_key]}`} className='btn btn-primary btn-home-primary'>View All</a>
            </div>
            <div className="container mx-auto p-0" style={{ position: 'relative' }}>
                <Flex align="center mt-3" style={{ position: 'absolute', right: '4px', top: '-40px', }} justify="end" gap={10} className="flex  justify-between mb-2 mr-auto">
                    <Button onClick={() => sliderRef.current.slickPrev()} icon={<LeftOutlined />} />
                    <Button onClick={() => sliderRef.current.slickNext()} icon={<RightOutlined />} />
                </Flex>
                <div className=" pr-0 mt-2" style={{ paddingRight: '0px !important' }}>
                    {
                        state?.loadingProds ?
                            <ProductListSkeleton count={4} />
                            :
                            <Slider ref={sliderRef} {...settings}>

                                {product_type?.map((prod, index) => (

                                    <ProductComponent prod={prod} index={index} />
                                ))}

                            </Slider>
                    }
                </div>
            </div>
        </div >
    )
}

export default ProductsList
