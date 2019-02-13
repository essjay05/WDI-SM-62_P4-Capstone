import React, { Component } from 'react';
import httpClient from '../../utilities/httpClient';
// import axios from 'axios';

export default class Signup extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        title: "",
        city: "",
        state: "",
        country: "",
        skills: "",
        aboutUser: "",
        linkedIn: "",
        github: "",
        website: "",
        projects: []
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        debugger
        let user = await httpClient.authenticate(this.state, "/api/users")
        debugger
        if (user) {
            this.props.onSignupSuccess()
            this.props.history.push('/users');
            debugger
        }
    };

    render() {
        let { email, password, firstName, lastName, city, state, country, title, aboutUser, skills, linkedIn, website, github } = this.state;
        // let { currentUser } = this.props;
                
        return (
            <div>
                {/* { currentUser
                ? ( */}
                <div>
                    <h1> Signup </h1>
                    <div className="row">
                        <div className="column column-50 column-offset-25">
                            <form onSubmit={this.handleSubmit}>
                                <h1> User Login Info</h1>
                                <label>First Name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Your First Name"
                                    onChange={this.handleChange}
                                    value={firstName}
                                    />
                                <label>Last Name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Your Last Name"
                                    onChange={this.handleChange}
                                    value={lastName}
                                    />
                                <label>Email: </label>
                                <input 
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={this.handleChange}
                                    value={email}
                                    />
                                <label>Password: </label>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="Secret password here..."
                                    onChange={this.handleChange}
                                    value={password}
                                    />

                                <h1> User Info</h1>
                                <label>City: </label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Your City"
                                    value={city}
                                    onChange={this.handleChange}
                                    />
                                <label>State: </label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Your State"
                                    value={state}
                                    onChange={this.handleChange}
                                    />
                                <label>Country: </label>
                                <input 
                                    type="text"
                                    name="country"
                                    placeholder="Your Country"
                                    value={country}
                                    onChange={this.handleChange}
                                    />
                                <label>Title: </label>
                                <input 
                                    type="text"
                                    name="title"
                                    placeholder="Job Title"
                                    value={title}
                                    onChange={this.handleChange}
                                    />
                            
                                <h1> User About Section</h1>
                                <label>About: </label>
                                <input
                                    type="text"
                                    name="aboutUser"
                                    placeholder="Write a brief paragraph describing yourself..."
                                    value={aboutUser}
                                    onChange={this.handleChange}
                                    />
                                <label>Skills </label>
                                <input
                                    type="text"
                                    name="skills"
                                    placeholder="Type in a list of your skills separated out by a comma (ie. Html, CSS, JavaScript)"
                                    value={skills}
                                    onChange={this.handleChange}
                                    />
                            
                                <h1> User Contact Links</h1>
                                <label>LinkedIn: </label>
                                <input
                                    type="text"
                                    name="linkedIn"
                                    placeholder="Your LinkedIn"
                                    value={linkedIn}
                                    onChange={this.handleChange}
                                    />
                                <label>Personal Website: </label>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Your Website"
                                    value={website}
                                    onChange={this.handleChange}
                                    />
                                <label>GitHub: </label>
                                <input 
                                    type="text"
                                    name="github"
                                    placeholder="Your GitHub"
                                    value={github}
                                    onChange={this.handleChange}
                                    /> 
               
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>    
                {/* ) : (
                <div className="aboutBox container clearfix">
                    <div className="float-left">
                        <h1> PORT=fol10 </h1>
                        <h3>Showcase your projects here!</h3>
                        <p>Upload your screenshots, links and code to showcase your skills here.</p>
                        <h3>Filler Header</h3>
                        <p>Cupcake ipsum dolor. Sit amet cookie marzipan gummies sweet. Tart lollipop tiramisu sweet jelly halvah cookie. Gummi bears donut soufflé. Sweet roll cupcake chupa chups gummi bears lollipop. Macaroon cake cookie toffee tiramisu marzipan cookie powder. Apple pie danish icing cotton candy halvah liquorice chocolate cake marshmallow. Gummi bears oat cake sweet macaroon. Brownie pastry jujubes biscuit macaroon lemon drops powder.</p>
                    </div>
                </div> 
                )} */}
            </div>
        );
    }
};