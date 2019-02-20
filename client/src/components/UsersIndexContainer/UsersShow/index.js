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
            <div className="resume-container ui two column centered grid">
                <div className="column">    
                    <div>
                        <h1 className="page-header">{user.firstName} {user.lastName}'s Resume </h1>
                        {/* <h3>Header/Hero Img upload goes here</h3> */}
                        {/* <img src="#">Hero Image</img> */}
                    </div>
                    <div className="userInfo-container">
                        {/* <h3>UserInfo: </h3> */}
                        <UserInfo user={ user } />
                    </div>
                    
                    <div className="userContactLinks-container row">
                        <h3 className="section-header">Links:</h3>
                        <ul>
                            <li><i class="far fa-envelope"></i> Email: <a href={`${user.email}`}>{user.email}</a></li>
                            <li><i class="fab fa-linkedin-in"></i> LinkedIn: <a href={`${user.linkedIn}`}>{user.linkedIn}</a></li>
                            <li><i class="far fa-user-circle"></i> Personal Website: <a href={`${user.website}`}>{user.website}</a></li>
                            <li><i class="fab fa-github-alt"></i> <a href={`${user.github}`}>{user.github}</a></li>
                        </ul>
                    </div>
                    <div className="userBlurb-container row">
                        <h3 className="section-header">About {user.firstName}:</h3>
                        <p>{user.aboutUser}</p>
                    </div>
                    <div className="userSkills-container row">
                        <h3 className="section-header">Skills:</h3>
                        <p>{user.skills}</p>
                    </div>
                    <div className="projects-container row">
                        <h3 className="section-header">Projects:</h3>
                        { projects.map(( project, i ) => {
                            return<div className="eight wide column " key={i}>
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
            </div>
        ) 
    }
}

export default UsersShow;