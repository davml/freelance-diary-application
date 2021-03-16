import { DELETE_USER, UPDATE_USER, FETCH_ALL_USER, FETCH_USER, USER_JOB_APPLY } from '../../constants/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ALL_USER:
            return action.payload;
        case FETCH_USER:
            return action.payload;
        case UPDATE_USER:
            return state.map((user) => (user._id === action.payload._id ? action.payload : user));
        case DELETE_USER:
            return state.filter((user) => user._id !== action.payload);
        case USER_JOB_APPLY:
            return action.payload;
        default:
            return state;
    }
};
