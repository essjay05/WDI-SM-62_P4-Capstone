import React from 'react';

export default ({ firstName, lastName, email, password }) => {

    return (
        <div>
            <h1>User Login Info</h1> 
            <label>First Name: </label>
            <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                value={firstName}
                />
            <label>Last Name: </label>
            <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                value={lastName}
                />
            <label>Email: </label>
            <input 
                type="text"
                name="email"
                placeholder="Your Email"
                value={email}
                />
            <label>Password: </label>
            <input 
                type="password"
                name="password"
                placeholder="Secret password here..."
                value={password}
                />                 
        </div>
    )
}