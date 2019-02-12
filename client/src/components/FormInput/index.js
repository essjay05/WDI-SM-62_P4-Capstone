import React, { Component } from 'react';
import axios from 'axios';
import UserLoginForm from './UserLoginForm';
import UserInfoForm from './UserInfoForm';
import UserSkillsForm from './UserSkillsForm';
import UserContactsForm from './UserContactsForm';
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
        let { email, password, firstName, lastName, city, state, country, title, aboutUser, skills, linkedIn, website, github } = this.state;
        debugger
        return (
            <div>
                <h1> Edit Profile </h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>

                            <UserLoginForm 
                                currentUser={currentUser} 
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                password={password}
                                onChange={this.handleChange} /> 
                          
                            <UserInfoForm 
                                currentUser={currentUser} 
                                city={city}
                                state={state}
                                country={country}
                                title={title}
                                onChange={this.handleChange} /> 
                           
                            <UserSkillsForm 
                                currentUser={currentUser} 
                                aboutUser={aboutUser}
                                skills={skills}
                                onChange={this.handleChange} /> 
                           
                            <UserContactsForm 
                                currentUser={currentUser} 
                                linkedIn={linkedIn}
                                website={website}
                                github={github}
                                onChange={this.handleChange} /> 
            
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