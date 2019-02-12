import React from 'react';
import { Link } from 'react-router-dom';


export default ({ project }) => {
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <h5>{project.techUsed}</h5>
                <a href="{project.deployedLink}">Deployed Link</a>
                <a href="{project.githubLink}">GitHub Link</a>
                <Link className="nav-link" to="/editProfile"> Edit Profile </Link>
            </div>
        )
     
};