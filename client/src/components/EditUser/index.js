import React, { Component } from 'react';
import axios from 'axios';
// import UserLoginForm from './UserLoginForm';
// import UserInfoForm from './UserInfoForm';
// import UserSkillsForm from './UserSkillsForm';
// import UserContactsForm from './UserContactsForm';
// import httpClient from '../../utilities/httpClient';

class FormInput extends Component {
    state = {
        email: this.props.currentUser.email,
        password: "",
        firstName: this.props.currentUser.firstName,
        lastName: this.props.currentUser.lastName,
        title: this.props.currentUser.title,
        city: this.props.currentUser.city,
        state: this.props.currentUser.state,
        country: this.props.currentUser.country,
        skills: this.props.currentUser.skills,
        aboutUser: this.props.currentUser.aboutUser,
        linkedIn: this.props.currentUser.linkedIn,
        github: this.props.currentUser.github,
        website: this.props.currentUser.website
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        // debugger
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        debugger
        let user = axios.patch(`/api/users/${this.props.currentUser._id}`, this.state)
            if (user) {
                this.props.onLoginSuccess()
                this.props.history.push(`/users/${currentUser._id}`)
                debugger
            }
            debugger
    };

    handleDelete = (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        axios.delete(`/api/users/${currentUser._id}`)
            .then(res => {
                this.props.history.push('/logout');
            })
    };

    render() {
        // let { currentUser } = this.props;
        let { email, password, firstName, lastName, city, state, country, title, aboutUser, skills, linkedIn, website, github } = this.state;
        console.log(this.props.user)
        // debugger
        return (
            <div>
                <h1 className="page-header"> Edit Profile </h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="ui form">
                    <h1 className="section-header">User Login Info</h1> 
                    <div className="fields">
                        <div className="field">
                            <label>First Name: </label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Your First Name"
                                onChange={this.handleChange}
                                value={firstName}
                                />
                        </div>
                        <div className="field">
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Your Last Name"
                                onChange={this.handleChange}
                                value={lastName}
                                />
                        </div> 
                    </div>     
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
                    
                    <h1 className="section-header"> User Info</h1>
                    <label>City: </label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Your City"
                        value={city}
                        onChange={this.handleChange}
                        />
                    <div className="fields">
                        <div className="field">
                            <label>State: </label>
                            <input
                                type="text"
                                name="state"
                                placeholder="Your State"
                                value={state}
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="field">
                            <label>Country: </label>
                            <input 
                                type="text"
                                name="country"
                                placeholder="Your Country"
                                value={country}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                        <label>Title: </label>
                        <input 
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            value={title}
                            onChange={this.handleChange}
                            />
                        
                    <h1 className="section-header"> User About Section</h1>
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
                        
                    <h1 className="section-header"> User Contact Links</h1>
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

                        <div className="buttons">
                            <input className="ui inverted green button" type="submit" />
                            <button className="ui inverted red button" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default FormInput;