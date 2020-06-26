import { BEGIN, SUCCESS, FAIL } from '../action/action'

const initialState = {
    isLoading: false,
    list: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload
            }
        case FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}