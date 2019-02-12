import React, { Component } from 'react';
import axios from 'axios';
// import UserLoginForm from './UserLoginForm';
// import UserInfoForm from './UserInfoForm';
// import UserSkillsForm from './UserSkillsForm';
// import UserContactsForm from './UserContactsForm';
import httpClient from '../../utilities/httpClient';

class FormInput extends Component {
    state = {
        email: this.props.currentUser.email,
        password: "",
        firstName: this.props.currentUser.firstName,
        lastName: this.props.currentUser.lastName,
        title: "",
        city: "",
        state: "",
        country: "",
        linkedIn: "",
        github: "",
        website: "",
        projects: this.props.currentUser.resume.projects
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        debugger
        httpClient.patch(`/api/users/${currentUser._id}`, this.state)
            .then(res => {
                debugger 
                this.props.history.push('/resume');   
            })
            // debugger
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
        let { currentUser } = this.props;
        let { email, password, firstName, lastName, city, state, country, linkedIn, website, github } = this.state;
        // debugger
        return (
            <div>
                <h1> Edit Profile </h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>

                        <h1>User Login Info</h1> 
                            <label>First Name: </label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Your First Name"
                                value={firstName}
                                onChange={this.handleChange}
                                />
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Your Last Name"
                                value={lastName}
                                onChange={this.handleChange}
                                />
                            <label>Email: </label>
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={this.handleChange}
                                />
                            <label>Password: </label>
                            <input 
                                type="password"
                                name="password"
                                placeholder="Secret password here..."
                                value={password}
                                onChange={this.handleChange}
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
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormInput;