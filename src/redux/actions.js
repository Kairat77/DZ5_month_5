import {types} from "./types";


export function changeTitleAction(num) {
    return {
        type: types.ADD_NUMBER,
        payload: num
    }
}

export function clearTuk() {
    return {
        type: types.CLEAR_NUM
    }
}

export function updateInp(inp){
    return {
        type: types.UPDATE_INP,
        payload: inp
    }
}