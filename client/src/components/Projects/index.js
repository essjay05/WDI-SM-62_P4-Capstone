import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from '../Projects';


export default class Projects extends Component {
    async componentDidMount() {
        let { currentUser, projects } = this.props;
        console.log(currentUser)
        console.log(projects)
        console.log(this.props)
        debugger
    }
    
    render () {
    let { currentUser, projects } = this.props;
    console.log(projects);
    debugger
        return (
            <div className="projects-container">
                <h3>Project Boxes Go here</h3>
                { projects.map(( project, i ) => {
                    return<div key={i}>
                        {/* <h5>{project.name}</h5>
                        <p>{project.description}</p>
                        <Link className="nav-link" to="/editProject"> Edit Project </Link> */}
                        <Project currentUser={currentUser} project={project}/>
                        </div>
                })}
            </div>
            
            
            
            
        )
    } 
};  