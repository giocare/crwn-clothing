import { createSelector } from 'reselect'
import { createStore } from 'redux';

//input selector - function gets whole state and resturns a slice of it
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart], // collection of input selectors
    //function which returns the value you want out of the selector
    (cart) => cart.cartItems
 
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
)