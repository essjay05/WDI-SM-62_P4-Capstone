import React from 'react';

export default ({ city, state, country, title }) => {

    return (
        <div>
            <h1> User Info</h1>
            <label>City: </label>
            <input
                type="text"
                name="city"
                placeholder="Your City"
                value={city}
                />
            <label>State: </label>
            <input
                type="text"
                name="state"
                placeholder="Your State"
                value={state}
                />
            <label>Country: </label>
            <input 
                type="text"
                name="country"
                placeholder="Your Country"
                value={country}
                />
            <label>Title: </label>
            <input 
                type="text"
                name="title"
                placeholder="Job Title"
                value={title}
                />
        </div>  
    )
}