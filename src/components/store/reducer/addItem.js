import {ADD_ITEM} from "../action/actionTypes";


const initialState = {
    label: '',
    important: false,
    done: false,
    id: null
}

export default function addItemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                label: action.label
            }
        default:
            return state
    }
}