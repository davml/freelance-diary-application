import axios from 'axios';

const url = 'http://localhost:5000/accounts';

export const fetchAccounts = () => axios.get(url);
export const createAccount = (newAccount) => axios.post(url, newAccount);
export const updateAccount = (id, updatedAccount) => axios.patch(`${url}/${id}`, updatedAccount);
export const deleteAccount = (id) => axios.delete(`${url}/${id}`);