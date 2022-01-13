import {
    FETCH_PROJECT,
    CREATE_PROJECT,

} from "../types";

export const projectReducer = (state = {}, action) => {
    switch (action.type) {
       
        case FETCH_PROJECT:
            return { items: action.payload };
        case CREATE_PROJECT:
            return { items: action.payload };
        default:
            return state;
    }
};