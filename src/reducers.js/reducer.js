import { storeProducts } from '../data';

export const providerReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_PRODUCTS': {
            let tempProducts = [];
            storeProducts.forEach(item => {
                const singleItem = { ...item };
                tempProducts = [ ...tempProducts, singleItem ];
            });
            return {
                ...state,
                products: tempProducts
            };
        }
        case 'GET_ITEM': {
            const product = state.products.find(item => item.id === action.id);
            return { ...state, detailPrdc: product };
        }
        case 'ADD_TO_CART':{
            const tempProduct = state.products;
            const id = state.products.find(item => item.id === action.id);
            const index = tempProduct.indexOf(id);
            const cartProduct = tempProduct[ index ];

            cartProduct.inCart = true;
            cartProduct.count = 1;

            const price = cartProduct.price;
            cartProduct.total = price;

            return { ...state, products: tempProduct, cart: [ ...state.cart, cartProduct ] };
        }
        case 'ADD_TO_TOTALS': {

            let subTotal = 0;

            state.cart.map(item => (subTotal += item.total));

            const tempTax = subTotal * 0.25;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax;
            return { ...state, cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
        }
        case 'CLEAR_CART':{
            return { ...state, cart: [] };
        }
        case 'REMOVE_ITEM':{
            const temporaryProduct = [ ...state.products ];
            let tempCart = [ ...state.cart ];

            tempCart = tempCart.filter(item => item.id !== action.id);

            const removeId = state.products.find(item => item.id === action.id);

            const tempIndex = temporaryProduct.indexOf(removeId);

            const removeProduct = temporaryProduct[ tempIndex ];

            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            return { ...state, cart: [ ...tempCart ], products: [ ...temporaryProduct ] };
        }
        case 'INCREMENT':{
            action.incProduct.count = action.incProduct.count + 1;
            action.incProduct.total = action.incProduct.count * action.incProduct.price;

            return { ...state, cart: [ ...action.incramentCart ] };
        }
        case 'DECREMENT':{
            action.decProduct.count = action.decProduct.count - 1;

            if (action.decProduct.count === 0) {
                action.removeItem(action.id);
            } else {
                action.decProduct.total = action.decProduct.count * action.decProduct.price;

                return { ...state, cart: [ ...action.decramentCart ] };
            }
        }
        case 'OPEN_MODAL':{
            const productModal = state.products.find(item => item.id === action.id);
            return { ...state, modalProduct: productModal };
        }
        default:
            return state;
    }
};