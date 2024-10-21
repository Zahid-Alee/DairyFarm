import React, { useReducer } from "react";
import { rootReducer } from "./reducerFunction";
import {
    addToCart, changeCartQuantity, filterProducts, getProductDetails, loadBlogs, loadBrandsAndCats, loadBusinessprods,
    loadCart, loadCategories, loadFaqs, loadProduct, loadProducts, loadProductsWithCategories, loadProductsWithTypes,
    loadReviews, loadSlides, loadUserOrders, loadUserReviews, proceedCart, removeFromCart, updateUserProfile
}
    from "./methods";


export const HomeContext = React.createContext();

function HomeContextProvider({ children, auth }) {


    const initState = {

        loading: false,
        loadingProds: true,
        categories: [],
        products: [],
        isEdit: false,
        auth: auth,
    }

    const [state, dispatch] = useReducer(rootReducer, initState);
    
    const methods = {

        loadCategories: loadCategories.bind({ state, dispatch }),
        loadProductsWithTypes: loadProductsWithTypes.bind({ state, dispatch }),
        loadSlides: loadSlides.bind({ state, dispatch }),
        loadBlogs: loadBlogs.bind({ state, dispatch }),
        loadReviews: loadReviews.bind({ state, dispatch }),
        loadUserReviews: loadUserReviews.bind({ state, dispatch }),
        loadFaqs: loadFaqs.bind({ state, dispatch }),
        loadBrandsAndCats: loadBrandsAndCats.bind({ state, dispatch }),
        loadProducts: loadProducts.bind({ state, dispatch }),
        loadBusinessprods: loadBusinessprods.bind({ state, dispatch }),
        loadProductsWithCategories: loadProductsWithCategories.bind({ state, dispatch }),
        loadUserOrders: loadUserOrders.bind({ state, dispatch }),
        loadProduct: loadProduct.bind({ state, dispatch }),
        getProductDetails: getProductDetails.bind({ state, dispatch }),
        filterProducts: filterProducts.bind({ state, dispatch }),
        loadCart: loadCart.bind({ state, dispatch }),
        addToCart: addToCart.bind({ state, dispatch }),
        removeFromCart: removeFromCart.bind({ state, dispatch }),
        changeCartQuantity: changeCartQuantity.bind({ state, dispatch }),
        proceedCart: proceedCart.bind({ state, dispatch }),
        updateUserProfile: updateUserProfile.bind({ state, dispatch })

    }

    return <HomeContext.Provider value={{ state, methods, dispatch }}>
        {children}
    </HomeContext.Provider>

}


export default HomeContextProvider;