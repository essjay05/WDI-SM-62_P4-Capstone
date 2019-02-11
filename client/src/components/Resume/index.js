import React, { Component } from 'react';
import axios from 'axios';


export default class ResumeForm extends Component {
    state = {
        projects:  [],
        currentUser: null,
        loading: true
    }
    // Figure out how to load USERS array

    async componentDidMount() {
        let { currentUser } = this.props
        
        try {
            let { data: { payload } } = await axios.get(`/api/users/${currentUser._id}`);
            this.setState({ 
                projects: payload.projects,
                user: payload, 
                loading: false 
            })
            } catch(err) {
            console.log(err);
        }
    }   

    render () {
        let { currentUser, projects } = this.state;
        return(
            <div className="resume-container">

                <h1>{currentUser.firstName} {currentUser.lastName}'s Resume Form goes here</h1>
                <div>
                    <h3>Header/Hero Img upload goes here</h3>
                    <img src="#">Hero Image</img>
                </div>
                <div className="userInfo-container">
                    <h3>UserInfo section goes here: </h3>
                    <ul>
                        <li><img src="#">User Profile image Here</img></li>
                        <li>User city Here</li>
                        <li>User Tagline/1-liner here</li>
                        <li>User job title here</li>    
                    </ul>
                </div>
                <div className="userContactLinks-container">
                    <h3>User Contact Links Section</h3>
                    <ul>
                    <li><h5>User Email</h5></li>
                    <li><h5>User LinkedIn</h5></li>
                    <li><h5>User Personal Site</h5></li>
                    <li><h5>User GitHub</h5></li>
                    </ul>
                </div>
                <div className="userBlurb-container">
                    <p>About the User paragraph goes here</p>
                </div>
                <div className="userSkills-container">
                    <h3>User Skills list goes here</h3>
                    <h5>Column 1 (5 skills/column)</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>etc</li>
                        <li>etc</li>
                    </ul>
                    <h5>Column 2 (5 skills/column)</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>etc</li>
                        <li>etc</li>
                    </ul>
                    <h5>Column 3 (5 skills/column)</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>etc</li>
                        <li>etc</li>
                    </ul>
                </div>
                <div className="projects-container">
                    <h3>Project Boxes Go here</h3>
                    { projects.map(( project, i ) => {
                        return<div key={i}>
                            <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            </div>
                    })}
                </div>
            </div>
        ) 
    }
}