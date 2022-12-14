import React, { useState, useEffect, useContext } from 'react'

import UserList from './UserList'
import UserForm from './UserForm'

import CartContext from '../../store/cart-context'

const User = () => {

    const [status, setStatus] = useState(true);

    const cartCtx = useContext(CartContext);

    let content = (
        <UserList users={cartCtx.users} />
    )


    if (cartCtx.loading) {
        content = 'Loading users...';
    }

    const addNewUser = (newUser) => {
        cartCtx.addUser(newUser);
    }

    const onHandlderStatus = () => {
        setStatus(!status);
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h2>User</h2>
                <button
                    type="button"
                    className={`btn ${status ? "btn-danger" : "btn-primary"}`}
                    onClick={onHandlderStatus}
                >
                    {status ? '-' : '+'}
                </button>
            </div>
            {status && (
                <UserForm addNewUser={addNewUser} />
            )}
            {content}
        </div>
    )
}

export default User
