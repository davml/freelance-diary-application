import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes';

export default (accounts = [],action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...accounts, action.payload];
        case UPDATE:
            return accounts.map((account) => account._id === action.payload._id ? action.payload : account)
        case DELETE:
            return accounts.filter((account) => account._id !== action.payload);
        default:
            return accounts;
    }
}