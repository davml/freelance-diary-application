import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAccounts, createAccount, updateAccount } from '../../redux/actions/accounts';


const ConnectionTest = ({ currentId, setCurrentId }) => {
    const [accountData, setAccountData] = useState({ email: '', password: '' });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccounts());
    }, [dispatch]);

    const accounts = useSelector((state) => state.accounts);
    console.log(accounts);

    const account = useSelector((state) => currentId ? state.account.find((p) => p._id === currentId) : null)


    useEffect(() => {
        if(account) setAccountData(account);
    }, [account])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateAccount(currentId, accountData))
        } else {
            dispatch(createAccount(accountData));
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" label="email" value={accountData.email} onChange={(e) => setAccountData({...accountData, email: e.target.value })} />
                <input type="text" name="password" label="password" value={accountData.password} onChange={(e) => setAccountData({...accountData, password: e.target.value })} />
                <button type="submit">Submit</button>
            </form>

            <button type="submit" onClick={() => setCurrentId(accounts._id)}>Click to fill</button>
        </div>
    )
}

export default ConnectionTest;