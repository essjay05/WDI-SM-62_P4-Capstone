import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Project from '../../../components/Project';
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
        console.log(user)
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
                    <h3>UserInfo section goes here: </h3>
                    <ul>
                        {/* <li><img src="#">User Profile image Here</img></li> */}
                        <li>{user.city}, {user.state}, {user.country}</li>
                        <li>{user.tagLine} User Tagline/1-liner here</li>
                        <li>User job title here: {user.title}</li>    
                    </ul>
                </div>
                <div className="userContactLinks-container">
                    <h3>User Contact Links Section</h3>
                    <ul>
                    <li><h5>{user.email}User Email</h5></li>
                    <li><h5>{user.linkedIn}User LinkedIn</h5></li>
                    <li><h5>{user.website}User Personal Site</h5></li>
                    <li><h5>{user.github}User GitHub</h5></li>
                    </ul>
                </div>
                <div className="userBlurb-container">
                    <p>About the User paragraph goes here:{user.aboutUser}</p>
                </div>
                <div className="userSkills-container">
                    <p>Resume Skills here:{user.skills}</p>
                </div>
                <div className="projects-container">
                    <Link className="nav-link" to="/addProject"> Add Project </Link>
                    <h3>Project Boxes Go here</h3>
                    { projects.map(( project, i ) => {
                        return<div key={i}>
                            {/* <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <Link className="nav-link" to="/editProject"> Edit Project </Link> */}
                            <Project user={user} project={project}/>
                            </div>
                    })}
                </div>

            </div>
        ) 
    }
}

export default UsersShow;