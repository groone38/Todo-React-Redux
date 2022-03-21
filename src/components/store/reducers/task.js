import {ADD, DELETE, DONE, IMPORTANT} from "../actions/actionTypes";

const initialState = {
    task: [
        {id: 1, text: 'Learn HTML, CSS', done: true, important: false },
        {id: 2, text: 'Learn JS', done: false, important: false},
        {id: 3, text: 'Learn ReactJS', done: false, important: false},
    ]
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                task: [
                    ...state.task,
                    ...action.task
                ]
            }
        case DELETE:
            return {
                ...state,
                task: state.task.filter(item => item.id !== action.id)
            }
        case DONE:
            return {
                ...state,
                task: state.task.map(item => {
                    if(item.id === action.id){
                        console.log(item.id)
                      return {...item, done: !item.done}
                    }
                    return {...item}
                })
            }
        case IMPORTANT:
            return {
                ...state,
                task: state.task.map(item => {
                    if(item.id === action.id){
                        console.log(item.id)
                        return {...item, important: !item.important}
                    }
                    return {...item}
                })
            }
        default:
            return state
    }
}