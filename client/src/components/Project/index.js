import React from 'react';
import { Link } from 'react-router-dom';


export default ({ project, i }) => {
    // async componentDidMount() {
    //     let { currentUser, project } = this.props;
    //     console.log(currentUser)
    //     console.log(project)
    //     console.log(this.props)
    //     debugger
    // }
    // render () {
    // let { project } = this.props;
    console.log(project);
    debugger
        return (
            <div className="project container">
                <div>
                    {/* <img src={project.image}>Image Box goes here</img> */}
                </div>>
                <h3 key={i}>{project.title}</h3>
                <p key={i}>{project.description}</p>
                <h5 key={i}>{project.techUsed}</h5>
                <div className="projectLinks" key={i}>
                    <a href="{project.deployedLink}">Deployed Link</a>
                    <a href="{project.githubLink}">GitHub Link</a>
                </div>
                <Link 
                className="nav-link" 
                to="/editProject"
                project={project}
                key={i}> Edit Project </Link>
            </div>
        )
     
};