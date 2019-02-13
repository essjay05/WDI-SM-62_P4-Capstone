import React from 'react';

export default ({ project, i, user, projects }) => {
    // async componentDidMount() {
    //     let { currentUser, project } = this.props;
    //     console.log(currentUser)
    //     console.log(project)
    //     console.log(this.props)
    //     debugger
    // }
    // render () {
    // let { project } = this.props;
    
    // debugger
        return (
            <div className="project container ui card">
                <div className="content">
                    {/* <div className="image"><img src={project.image}>Image Box goes here</img></div> */}
                    <div className="header"><h3 >{project.title}</h3></div>
                    <div className="description"><h3 >{project.description}</h3></div>
                    <div className="description"><h3 >{project.techUsed}</h3></div>
                    <div className="projectLinks description" >
                        <a href="{project.deployedLink}">Deployed Link</a>
                        <a href="{project.githubLink}">GitHub Link</a>
                    </div>
                </div>
            </div>
        )
     
};