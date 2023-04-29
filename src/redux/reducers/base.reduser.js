import {DEC, INC, RES} from "../actions";

const baseReducer = (state = 0, action) => {
    switch (action.type) {
        case INC:
            return ++state;
        case DEC:
            return --state;
        case RES:
            return state = 0;
        default:
            return state;
    }
};

export {
    baseReducer
}