import { createSelector } from 'reselect'
import { createStore } from 'redux';
import CartItem from '../../components/cart-item/cart-item.component';

//input selector - function gets whole state and resturns a slice of it
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart], // collection of input selectors
    //function which returns the value you want out of the selector
    (cart) => cart.cartItems
 
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity * cartItem .price, 0)

)