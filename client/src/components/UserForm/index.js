import React from 'react';

export default ({ currentUser }) => {
    return (
       <div className="form-container">
            <div className="row">
                <div className="">
                    <form onSubmit={this.handleSubmit} className="ui form">
                        <h1 className="section-header"> User Login Info</h1>
                        <div className="fields">
                            <div className="field">
                                <label className="form-label">First Name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Your First Name"
                                    onChange={this.handleChange}
                                    value={firstName}
                                    />
                            </div>
                            <div className="field">
                                <label className="form-label">Last Name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Your Last Name"
                                    onChange={this.handleChange}
                                    value={lastName}
                                    />
                            </div> 
                        </div>     
                        <label className="form-label">Email: </label>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            onChange={this.handleChange}
                            value={email}
                            />
                        <label className="form-label">Password: </label>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Secret password here..."
                            onChange={this.handleChange}
                            value={password}
                            />
                        
                        <h1 className="section-header"> User Info</h1>
                        <label className="form-label">City: </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Your City"
                            value={city}
                            onChange={this.handleChange}
                            />
                        <div className="fields">
                            <div className="field">
                                <label className="form-label">State: </label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Your State"
                                    value={state}
                                    onChange={this.handleChange}
                                    />
                            </div>
                            <div className="field">
                                <label className="form-label">Country: </label>
                                <input 
                                    type="text"
                                    name="country"
                                    placeholder="Your Country"
                                    value={country}
                                    onChange={this.handleChange}
                                    />
                            </div>
                        </div>
                        <label className="form-label">Title: </label>
                        <input 
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            value={title}
                            onChange={this.handleChange}
                            />
                    
                        <h1  className="section-header"> User About Section</h1>
                        <label className="form-label">About: </label>
                        <input
                            type="text"
                            name="aboutUser"
                            placeholder="Write a brief paragraph describing yourself..."
                            value={aboutUser}
                            onChange={this.handleChange}
                            />
                        <label className="form-label">Skills </label>
                        <input
                            type="text"
                            name="skills"
                            placeholder="Type in a list of your skills separated out by a comma (ie. Html, CSS, JavaScript)"
                            value={skills}
                            onChange={this.handleChange}
                            />
                    
                        <h1  className="section-header"> User Contact Links</h1>
                        <label className="form-label">LinkedIn: </label>
                        <input
                            type="text"
                            name="linkedIn"
                            placeholder="Your LinkedIn"
                            value={linkedIn}
                            onChange={this.handleChange}
                            />
                        <label className="form-label">Personal Website: </label>
                        <input
                            type="text"
                            name="website"
                            placeholder="Your Website"
                            value={website}
                            onChange={this.handleChange}
                            />
                        <label className="form-label">GitHub: </label>
                        <input 
                            type="text"
                            name="github"
                            placeholder="Your GitHub"
                            value={github}
                            onChange={this.handleChange}
                            /> 
    
                        <input className="ui inverted tiny green button" type="submit" />
                    </form>
                </div>    
            </div>
        </div>
                
    )
};