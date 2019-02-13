import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Project from '../../components/Project';
import AddProject from '../../components/AddProject';
import httpClient from '../../utilities/httpClient';

class UserShow extends Component {
    state = {
        projects:  [],
        currentUser: null,
        users: [],
        resume: null,
        loading: true
    }
    // Figure out how to load USERS array

    // componentDidMount () {
    //     debugger
    //     let { currentUser } = this.props;
    //     httpClient.get(`/api/users/${currentUser._id}`)
    //     .then(res => { 
    //         this.setState({ users: res.data.response.users })
    //     })
    //     .catch(err => {
    //         debugger
    //     })
    //     this.setState({ currentUser: this.props.currentUser})
        
    // } 
    async componentDidMount() {
        let { currentUser } = this.props
        // let { resume } = this.props.currentUser;
        // let { projects }  = this.props.currentUser.resume;
        debugger
        
        try {
            let { data: { payload } } = await httpClient.get(`/api/users/${currentUser._id}`);
            this.setState({ 
                projects: payload.projects,
                currentUser: payload,
                resume: payload.resume,
                loading: false 
            })
            } catch(err) {
            console.log(err);
            debugger
        }
    }

    render () {
        let { currentUser  } = this.props;
        console.log(currentUser)
        debugger
        // let { resume } = currentUser;
        // let { projects } = resume;
        console.log(currentUser)
        // console.log(this.state)
        debugger 
        return(
            <div className="resume-container">
                <h1>{currentUser.firstName} {currentUser.lastName}'s Resume Form goes here</h1>
                <div>
                    <h3>Header/Hero Img upload goes here</h3>
                    {/* <img src="#">Hero Image</img> */}
                </div>
                <div className="userInfo-container">
                    <h3>UserInfo section goes here: </h3>
                    <ul>
                        {/* <li><img src="#">User Profile image Here</img></li> */}
                        <li>{currentUser.city}, {currentUser.state}, {currentUser.country}</li>
                        <li>{currentUser.tagLine} User Tagline/1-liner here</li>
                        <li>User job title here: {currentUser.title}</li>    
                    </ul>
                </div>
                <div className="userContactLinks-container">
                    <h3>User Contact Links Section</h3>
                    <ul>
                    <li><h5>{currentUser.email}User Email</h5></li>
                    <li><h5>{currentUser.linkedIn}User LinkedIn</h5></li>
                    <li><h5>{currentUser.website}User Personal Site</h5></li>
                    <li><h5>{currentUser.github}User GitHub</h5></li>
                    </ul>
                </div>
                {/* <div className="userBlurb-container">
                    <p>About the User paragraph goes here:{currentUser.aboutUser}</p>
                </div>
                <div className="userSkills-container">
                    <p>Resume Skills here:{currentUser.skills}</p>
                </div> */}
                <div className="projects-container">
                    <Link className="nav-link" to="/addProject"> Add Project </Link>
                    <h3>Project Boxes Go here</h3>
                    { currentUser.projects.map(( project, i ) => {
                        return<div key={i}>
                            {/* <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <Link className="nav-link" to="/editProject"> Edit Project </Link> */}
                            <Project 
                            key={i}
                            currentUser={ currentUser }
                            /* projects={projects} */
                            project={project}
                            projectId={project._id}
                            />
                            </div>
                    })}
                </div>

                <AddProject currentUser={currentUser} onLoginSuccess={this.onAuthSuccess} />
            </div>
        ) 
    }
}

export default UserShow;