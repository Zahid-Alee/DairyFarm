import React, { useContext, useEffect } from 'react'
import { HomeContext } from '../context/HomeContext';
import ProductsList from './ProductsList';

function Latest({ header = true }) {

    const context = useContext(HomeContext);

    const { state, dispatch, methods } = context;

    useEffect(() => {

        methods?.loadProductsWithTypes();

    }, []);

    return (

        <>

            <div class="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s"><p class="section-title bg-white text-center text-primary px-3">Our Products</p><h1 class="mb-5"> Explore our best products</h1></div>
            {
                state?.home_prods && Object?.keys(state?.home_prods)?.map((key, index) => {
                    return <ProductsList key={index} product_type_key={key} product_type={state?.home_prods[key]} />
                })
            }
        </>
    )
}

export default Latest

