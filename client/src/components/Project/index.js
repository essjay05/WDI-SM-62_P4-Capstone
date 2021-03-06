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
            <div className="card four wide column">
                <div className="content">
                    {/* <div className="image"><img src={project.image}>Image Box goes here</img></div> */}
                    <div className="header"><h3 className="card-text">"{project.title}"</h3></div>
                    <div className="description"><h4 className="card-text">Description:{project.description}</h4></div>
                    <div className="description"><h5 className="card-text">Tech Used:{project.techUsed}</h5></div>
                    <div className="projectLinks description" >
                        <a className="card-text" href="{project.deployedLink}"><i class="fas fa-external-link-alt"></i></a>
                        <a className="card-text" href="{project.githubLink}"><i class="fab fa-github-alt"></i></a>
                    </div>
                </div>
            </div>
        )
     
};