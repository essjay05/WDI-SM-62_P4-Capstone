import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Project from '../../components/Project';
import UserInfo from '../../components/UsersIndexContainer/UserInfo';
// import httpClient from '../../utilities/httpClient';

class UserShow extends Component {
    state = {
        projects:  [],
        loading: true
    }
    // Figure out how to load USERS array

    // componentDidMount () {
    //     debugger
    //     let { currentUser } = this.props;
    //     httpClient.get(`/api/users/${currentUser._id}`)
    //     .then(res => { 
    //         this.setState({ users: res.data.response.users })
    //         console.log(this.state);
    //     })
    //     .catch(err => {
    //         debugger
    //     })
    //     this.setState({ currentUser: this.props.currentUser})
        
    // } 
    async componentDidMount() {
        let { currentUser } = this.props
        // debugger
        
        try {
            let { data: { payload } } = await axios.get(`/api/users/${currentUser._id}`);
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

    handleDeleteProject = (e) => {
        e.preventDefault();
        debugger
        axios.delete(`/api/users/${this.props.currentUser._id}/projects/${e.target.target}`, this.state)
        .then(res => {
            console.log(res)
            debugger
            // this.setState({ user: res.data.updatedUser})
            this.props.history.push('/users');
        })
    };

    render () {
        let { user, loading, projects } = this.state;
        // console.log(user)
        // debugger 
        if (loading) return<div></div>
        return(
            <div className="resume-container ui celled centered grid">
            <div className="column">
                <div>
                <h1 className="page-header">{user.firstName} {user.lastName}'s Resume</h1>
                </div>
                    <div>
                        {/* <h3>Header/Hero Img upload goes here</h3> */}
                        {/* <img src="#">Hero Image</img> */}
                    </div>
                    <div className="userInfo-container">
                        {/* <h3>UserInfo: </h3> */}
                        <UserInfo user={ user } />
                    </div>
                    
                    <div className="userContactLinks-container">
                        <h3 className="section-header">Links:</h3>
                        <ul>
                        <li><h5>Email: <a href={`${user.email}`}>{user.email}</a></h5></li>
                        <li><h5>LinkedIn: <a href={`${user.linkedIn}`}>{user.linkedIn}</a></h5></li>
                        <li><h5>Personal Website: <a href={`${user.website}`}>{user.website}</a></h5></li>
                        <li><h5>GitHub: <a href={`${user.email}`}>{user.email}</a></h5></li>
                        </ul>
                    </div>
                    <div className="userBlurb-container">
                        <h3 className="section-header">About {user.firstName}:</h3>
                        <p>{user.aboutUser}</p>
                    </div>
                    <div className="userSkills-container">
                        <h3 className="section-header">Skills:</h3>
                        <p>{user.skills}</p>
                    </div>
                    
                    <div className="projects-container ui grid">
                        <h3 className="section-header">Projects: </h3>
                        <Link className="nav-link" to="/addProject"> Add Project </Link>
                        { projects.map(( project, i ) => {
                            return<div className="eight wide column" key={i}>
                                {/* <h5>{project.name}</h5>
                                <p>{project.description}</p>
                                <Link className="nav-link" to="/editProject"> Edit Project </Link> */}
                                <Project 
                                user={ user }
                                projects={user.projects}
                                project={project}
                                projectid={project._id}
                                />
                                <form onSubmit={this.handleDeleteProject} target={project._id}>
                                    <input className="ui inverted tiny red button" value="Delete Project" type="submit"/>
                                </form>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        ) 
    }
}

export default UserShow;