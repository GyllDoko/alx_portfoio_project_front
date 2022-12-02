import CartActionTypes from './card.types.js';
import { addItemsToCart, removeItemFromCart } from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    total: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    let cart;
    let total
    switch (action.type) {

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            cart = addItemsToCart(state.cartItems, action.payload)
            total = totalize(cart)
            return {
                ...state,
                cartItems: cart,
                total: total
            }

        case CartActionTypes.REMOVE_ITEM:
            cart = removeItemFromCart(state.cartItems, action.payload)
            total = totalize(cart)
            return {
                ...state,
                cartItems: cart,
                total: total
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            cart = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            total = totalize(cart)
            return {
                ...state,
                cartItems: cart,
                total: total
            }
        case CartActionTypes.CLEAR_CART:
            return INITIAL_STATE
        default:
            return state;
    }
}
export function totalize(cartItems) {
    let amount = 0
    for (let item of cartItems) {
        amount += item.price * item.quantity;
    }
    return amount
}
export default cartReducer;