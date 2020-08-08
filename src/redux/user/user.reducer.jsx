// state - represnets last state
// action - object that has a type that is a string value
// payload can be anything

import { UserActionTypes } from './user.types'
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER: // if case is set current user
            return { // return object
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer