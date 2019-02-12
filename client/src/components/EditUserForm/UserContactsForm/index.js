import React from 'react';

export default ({ linkedIn, website, github }) => {

    return (
        <div>
            <h1> User Contact Links</h1>
            <label>LinkedIn: </label>
            <input
                type="text"
                name="linkedIn"
                placeholder="Your LinkedIn"
                
                value={linkedIn}
                />
            <label>Personal Website: </label>
            <input
                type="text"
                name="website"
                placeholder="Your Website"
               
                value={website}
                />
            <label>GitHub: </label>
            <input 
                type="text"
                name="github"
                placeholder="Your GitHub"
               
                value={github}
                />
        </div>  
    )
}