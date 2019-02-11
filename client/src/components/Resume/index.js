import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Projects from '../../components/Projects';

class Resume extends Component {
    state = {
        projects:  [],
        currentUser: null,
        loading: true
    }
    // Figure out how to load USERS array

    async componentDidMount() {
        let { currentUser } = this.props
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

    render () {
        let { currentUser } = this.props;
        let resume = this.props.currentUser.resume;
        let  projects  = this.props.currentUser.resume.projects;
        console.log(currentUser)
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
                        <li>{resume.city}, {resume.state}, {resume.country}</li>
                        <li>{resume.tagLine} User Tagline/1-liner here</li>
                        <li>User job title here: {resume.title}</li>    
                    </ul>
                </div>
                <div className="userContactLinks-container">
                    <h3>User Contact Links Section</h3>
                    <ul>
                    <li><h5>{currentUser.email}User Email</h5></li>
                    <li><h5>{resume.linkedIn}User LinkedIn</h5></li>
                    <li><h5>{resume.website}User Personal Site</h5></li>
                    <li><h5>{resume.github}User GitHub</h5></li>
                    </ul>
                </div>
                <div className="userBlurb-container">
                    <p>About the User paragraph goes here</p>
                </div>
                <div className="userSkills-container">
                    <h3>User Skills list goes here</h3>
                    <h5>Column 1 (5 skills/column)</h5>
                    <ul>
                    { resume.skills.map(( skill, i) =>
                        <li key={i}>{skill}</li>
                    )}
                    </ul>
                    <h5>Column 2 (5 skills/column)</h5>
                    <ul>
                        <li>Git</li>
                        <li>MongoDB</li>
                        <li>Node.js</li>
                        <li>etc</li>
                        <li>etc</li>
                    </ul>
                    <h5>Column 3 (5 skills/column)</h5>
                    <ul>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>PostgreSQL</li>
                        <li>etc</li>
                        <li>etc</li>
                    </ul>
                </div>
                <div className="projects-container">
                    <Link className="nav-link" to="/addProject"> Add Project </Link>
                    <h3>Project Boxes Go here</h3>
                    { projects.map(( project, i ) => {
                        return<div key={i}>
                            {/* <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <Link className="nav-link" to="/editProject"> Edit Project </Link> */}
                            <Projects currentUser={currentUser} project={project}/>
                            </div>
                    })}
                    
                </div>
            </div>
        ) 
    }
}

export default Resume;