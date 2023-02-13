import * as types from "../constants/actionType";
export const act_up = (value) => {
    return {
        type: types.ACT_UP,
        payload: value
    }
}
export const act_Down = (value) => {
    return {
        type: types.ACT_DOWN,
        payload: value
    }
}
export const act_random = () => {
    return {
        type: types.ACT_RANDOM
    }
}