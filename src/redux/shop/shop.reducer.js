import SHOP_DATE from './shop.data'
import { act } from '@testing-library/react'

const INITIAL_STATE = {
    collections: SHOP_DATE
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default shopReducer