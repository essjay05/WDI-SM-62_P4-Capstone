import React, { Component } from 'react';
import axios from 'axios';
import httpClient from '../../utilities/httpClient';

class FormInput extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        resume: {
            title: "",
            city: "",
            state: "",
            country: "",
            skills: "",
            aboutuser: "",
            linkedIn: "",
            github: "",
            website: ""
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        debugger
        axios.patch(`/api/users/${currentUser._id}`, this.state)
            .then( res => {
                this.props.history.push('/resume');   
                debugger 
            })
            debugger
    };

    handleDelete = (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        axios.delete(`/api/users/${currentUser._id}`)
            .then( res => {
                this.props.history.push('/logout');
            })
    };

    render() {
        let { email, password, firstName, lastName, city, state, country, title, aboutUser, skills, linkedIn, website, github } = this.state;
        debugger
        return (
            <div>
                <h1> Edit Profile </h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>
                            <section className="loginInfo-container">
                                <h1>User Login Info</h1> 
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
                            </section>
                            <section className="userInfo-container">
                                <h1> User Info</h1>
                                <label>City: </label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Your City"
                                    onChange={this.handleChange}
                                    value={city}
                                    />
                                <label>State: </label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Your State"
                                    onChange={this.handleChange}
                                    value={state}
                                    />
                                <label>Country: </label>
                                <input 
                                    type="text"
                                    name="country"
                                    placeholder="Your Country"
                                    onChange={this.handleChange}
                                    value={country}
                                    />
                                <label>Title: </label>
                                <input 
                                    type="text"
                                    name="title"
                                    placeholder="Job Title"
                                    onChange={this.handleChange}
                                    value={title}
                                    />
                            </section>
                            <section className="aboutUser-container">
                                <h1> User About Section</h1>
                                <label>About: </label>
                                <input
                                    type="text"
                                    name="aboutUser"
                                    placeholder="Write a brief paragraph describing yourself..."
                                    onChange={this.handleChange}
                                    value={aboutUser}
                                    />
                                <label>Skills </label>
                                <input
                                    type="text"
                                    name="skills"
                                    placeholder="Type in a list of your skills separated out by a comma (ie. Html, CSS, JavaScript)"
                                    onChange={this.handleChange}
                                    value={skills}
                                    />
                            </section>
                            <section className="userContact-container">
                                <h1> User Contact Links</h1>
                                <label>LinkedIn: </label>
                                <input
                                    type="text"
                                    name="linkedIn"
                                    placeholder="Your LinkedIn"
                                    onChange={this.handleChange}
                                    value={linkedIn}
                                    />
                                <label>Personal Website: </label>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Your Website"
                                    onChange={this.handleChange}
                                    value={website}
                                    />
                                <label>GitHub: </label>
                                <input 
                                    type="text"
                                    name="github"
                                    placeholder="Your GitHub"
                                    onChange={this.handleChange}
                                    value={github}
                                    />
                            </section>
                            <input type="submit" />
                        </form>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormInput;