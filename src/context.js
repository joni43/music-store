import React, { createContext, useState, useEffect, useReducer,useCallback } from 'react';
import { detailProduct } from './data';
import { providerReducer } from './reducers.js/reducer';
const ProductContext = createContext();

const ProductProvider = (props) => {
    // Component state
    
    const [ modalOpen, SetModalOpen ] = useState(false);
    const [ ProductState, dispatch ] = useReducer(providerReducer, {
        products: [],
        detailPrdc: detailProduct,
        cart: [],
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    });

    // methods
    const getItem = (id) => {

        dispatch({ type: 'GET_ITEM', id, ProductState });
    };

    const handleDetail = (id) => {
        
        const product = getItem(id);
        dispatch({ type: 'HANDLE_DETAIL', detailPrdc: product });
    };
    const addTotals = (id) => {
        dispatch({ type: 'ADD_TO_TOTALS', ProductState, });
    };
    const addToCart = (id) => {
        dispatch({ type: 'ADD_TO_CART', ProductState, id });
        addTotals();
    };

    const setProducts = useCallback(() => {
        dispatch({ type: 'ADD_PRODUCTS', ProductState });
    },[ ProductState ]);

    const openModal = (id) => {
        dispatch({ type: 'OPEN_MODAL', id, });
        SetModalOpen(true);
    };

    const closeModal = id => {
        SetModalOpen(false);
    };

    const increment = id => {
        const incramentCart = [ ...ProductState.cart ];

        const decrementProduct = incramentCart.find(item => item.id === id);
        const incramentIndex = incramentCart.indexOf(decrementProduct);
        const incProduct = incramentCart[ incramentIndex ];

        dispatch({ type: 'INCREMENT', id, incProduct, incramentCart });
        addTotals();

    };
    const decrement = id => {
        const decramentCart = [ ...ProductState.cart ];

        const decrementProduct = decramentCart.find(item => item.id === id);
        const decramentIndex = decramentCart.indexOf(decrementProduct);
        const decProduct = decramentCart[ decramentIndex ];

        dispatch({ type: 'DECREMENT', id, decProduct, decramentCart, removeItem });
        addTotals();

    };
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', id });
        addTotals();
    };
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART', });
        setProducts();
        addTotals();

    };

    useEffect(() => {
        
        setProducts();
    }, []);

    return (
        <ProductContext.Provider value={ {
            ...ProductState,
            modalOpen,
            handleDetail: handleDetail,
            addToCart: addToCart,
            openModal: openModal,
            closeModal: closeModal,
            increment: increment,
            decrement: decrement,
            removeItem: removeItem,
            clearCart: clearCart

        } }>

            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
