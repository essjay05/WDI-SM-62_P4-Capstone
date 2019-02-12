import React from 'react';

export default ({ aboutUser, skills }) => {

    return (
        <div>
            <h1> User About Section</h1>
            <label>About: </label>
            <input
                type="text"
                name="aboutUser"
                placeholder="Write a brief paragraph describing yourself..."
                value={aboutUser}
                />
            <label>Skills </label>
            <input
                type="text"
                name="skills"
                placeholder="Type in a list of your skills separated out by a comma (ie. Html, CSS, JavaScript)"
                value={skills}
                />
        </div>  
    )
}