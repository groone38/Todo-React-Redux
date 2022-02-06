import {ADD_ITEM} from "./actionTypes";


export function plus(label) {
    return {
        type: ADD_ITEM,
        label
    }
}

export function addItem(label) {
    return (dispatch, getState) => {
        if(getState().add.label.length > 0) {
            dispatch(plus(label))
        }
    }
}