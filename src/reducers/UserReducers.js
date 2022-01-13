import {
    FETCH_USERS
} from "../types";

export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { items: action.payload };
        default:
            return state;
    }
};