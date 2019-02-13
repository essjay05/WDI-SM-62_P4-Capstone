import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Project from '../../../components/Project';
import UserInfo from '../UserInfo';
// import httpClient from '../../../utilities/httpClient';

class UsersShow extends Component {
    state = {
        projects:  [],
        // currentUser: null,
        loading: true
    }
    // Figure out how to load USERS array

    async componentDidMount() {
        let { user } = this.props
        // let { resume } = this.props.currentUser;
        // let { projects }  = this.props.currentUser.resume;
        console.log(user)
        console.log(this.props)
        debugger
        
        try {
            let { data: { payload } } = await axios.get(`/api/users/${this.props.match.params.id}`);
            this.setState({ 
                projects: payload.projects,
                user: payload,
                loading: false 
            })
        } catch(err) {
            console.log(err);
            debugger
        }
    } 

    render () {
        let { user, loading, projects } = this.state;
        // let  { projects }  = this.props.user;
        console.log(projects)
        debugger 
        if (loading) return<div></div>
        return(
            <div className="resume-container">
                <h1>{user.firstName} {user.lastName}'s Resume Form goes here</h1>
                <div>
                    <h3>Header/Hero Img upload goes here</h3>
                    {/* <img src="#">Hero Image</img> */}
                </div>
                <div className="userInfo-container">
                    {/* <h3>UserInfo: </h3> */}
                    <UserInfo user={ user } />
                </div>
                
                <div className="userContactLinks-container">
                    <h3>Links:</h3>
                    <ul>
                    <li><h5>Email: <a href={`${user.email}`}>{user.email}</a></h5></li>
                    <li><h5>LinkedIn: <a href={`${user.linkedIn}`}>{user.linkedIn}</a></h5></li>
                    <li><h5>Personal Website: <a href={`${user.website}`}>{user.website}</a></h5></li>
                    <li><h5>GitHub: <a href={`${user.email}`}>{user.email}</a></h5></li>
                    </ul>
                </div>
                <div className="userBlurb-container">
                    <h3>About {user.firstName}:</h3>
                    <p>{user.aboutUser}</p>
                </div>
                <div className="userSkills-container">
                    <h3>Skills:</h3>
                    <p>{user.skills}</p>
                </div>
                <div className="projects-container">
                    <h3>Projects:</h3>
                    { projects.map(( project, i ) => {
                        return<div key={i}>
                            {/* <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <Link className="nav-link" to="/editProject"> Edit Project </Link> */}
                            <Project 
                            key={i}
                            user={ user }
                            projects={user.projects}
                            project={project}
                            projectid={project._id}
                            />
                        </div>
                    })}
                </div>

            </div>
        ) 
    }
}

export default UsersShow;