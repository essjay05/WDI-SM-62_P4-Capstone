import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Project from '../../components/Project';
import httpClient from '../../utilities/httpClient';

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
        // let { resume } = this.props.currentUser;
        // let { projects }  = this.props.currentUser.resume;
        debugger
        
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
        // let { projects } = resume;
        console.log(user)
        // console.log(this.state)
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
                            <Project 
                            key={i}
                            user={ user }
                            projects={user.projects}
                            project={project}
                            projectId={project._id}
                            />
                            <form onSubmit={this.handleDeleteProject} target={project._id}>
                                <input className="btn-danger" value="Delete Project" type="submit"/>
                            </form>
                            </div>
                    })}
                </div>

                {/* <AddProject currentUser={currentUser} /> */}
            </div>
        ) 
    }
}

export default UserShow;