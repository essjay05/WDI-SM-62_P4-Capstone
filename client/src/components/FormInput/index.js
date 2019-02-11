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

    handleSubmit = async (e) => {
        e.preventDefault();
        // debugger
        let user = await httpClient.authenticate(this.state, "/api/users")
        debugger
        if (user) {
            this.props.onSignupSuccess()
            this.props.history.push('/usersIndex');
            debugger
        }
    };

    render() {
        let { email, password, firstName, lastName } = this.state;
        
        return (
            <div>
                <h1> Signup </h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>
                            <label>First Name: </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your First Name"
                                onChange={this.handleChange}
                                value={firstName}
                                />
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="name"
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
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormInput;