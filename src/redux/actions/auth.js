import { AUTH_USER, DELETE_USER, FETCH_USER, FETCH_ALL_USER, UPDATE_USER, USER_JOB_APPLY } from '../../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch( { type: AUTH_USER, data })

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch( { type: AUTH_USER, data })

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const getAccount = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchAccount(id);

        dispatch( { type: FETCH_USER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const getAccounts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAccounts();

        dispatch({ type: FETCH_ALL_USER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
} 

export const updateAccount = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateAccount(id, user);
        
        dispatch( { type: UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAccount = (id) => async (dispatch) => {
    try {
        await api.deleteAccount(id);

        dispatch({ type: DELETE_USER, payload: id });
    } catch (error) {
        console.log(error.message);
    }
}

export const userJobApply = (userId, jobId) => async (dispatch) => {
    try {
        await api.userJobApply(userId, jobId);

        dispatch({ type: USER_JOB_APPLY, payload: {userId, jobId} });
    } catch (error) {
        console.log(error.message);
    }
}