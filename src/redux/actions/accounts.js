import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes';

import * as api from '../api';

// Action Creators - functions that return actions

export const getAccounts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchAccounts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createAccount = (account) => async (dispatch) => {
    try {
        const {data} = await api.createAccount(account);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateAccount = (id, account) => async (dispatch) => {
    try {
        const { data } = await api.updateAccount(id, account);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deleteAccount(id);
        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}