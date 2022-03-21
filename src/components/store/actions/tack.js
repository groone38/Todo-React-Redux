import {ADD, DELETE, DONE, IMPORTANT} from "./actionTypes";

export function bindTack(...task) {
    console.log(task)
    return {
        type: ADD,
        task
    }
}

export function doneTask(id) {
    return {
        type: DONE,
        id
    }
}

export function importantTask(id) {
    return {
        type: IMPORTANT,
        id
    }
}

export function deleteTask(id) {
    return {
        type: DELETE,
        id
    }
}