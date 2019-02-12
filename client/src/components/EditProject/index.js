import React, { Component } from 'react';
// import axios from 'axios';
import httpClient from '../../utilities/httpClient';
// import ProjectForm from '../ProjectForm';

export default class EditProject extends Component {
    
    state = {
        currentUser: this.props.currentUser,
        project: this.props.currentUser.resume.projects._id,
        title: this.props.currentUser.resume.projects.title,
        image: this.props.currentUser.resume.projects.image,
        description: this.props.currentUser.resume.projects.description,
        techUsed: this.props.currentUser.resume.projects.techUsed,
        deployedLink: this.props.currentUser.resume.projects.deployedLink,
        githubLink: this.props.currentUser.resume.projects.githubLink,
        projectId: this.props.currentUser.resume.projects._id
    }

    componentDidMount() {
        debugger
        let project = this.props.match.params
    } 
    

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        let { project } = this.props.currentUser.resume.projects._id
        let user = await httpClient.updateProject(`/api/users/${currentUser._id}/projects/${project._id}`, this.state)
            if (user) {
                this.props.onLoginSuccess()
                this.props.history.push('/user')
            }
    };

    handleDelete = async (e) => {
        e.preventDefault()
        let { currentUser } = this.props
        let { project } = this.props.currentUser.resume.projects._id
        let user = await httpClient.deleteProject(`/api/users/${currentUser._id}/projects/${project._id}`, this.state)
            if (user) {
                this.props.logout()
            }
    };

    render() {
        console.log(this.props)
        console.log(this.state)
        // let{ i }= this.props.key;
        // console.log(this.props)
        let { project, i } = this.state.currentUser.resume.projects[i]
        console.log(project)
        debugger
        let { title, image, description, techUsed, deployedLink, githubLink } = project
        console.log(project);
        debugger
        return (
            <div>
                <h1> Edit Your Project</h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Title: </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title of your Project"
                                    value={title}
                                    onChange={this.handleChange}
                                    />
                                <label>Image Url: </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image url"
                                    value={image}
                                    onChange={this.handleChange}
                                    />
                                <label>Description: </label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Brief blurb about your project."
                                    value={description}
                                    onChange={this.handleChange}
                                    />
                                <label>Technology/Tools Used:</label>
                                <input
                                    type="text"
                                    name="techUsed"
                                    placeholder="ie. HTML, CSS, React.js"
                                    value={techUsed}
                                    onChange={this.handleChange}
                                    />
                                <label>Deployed Link URL:</label>
                                <input
                                    type="text"
                                    name="deployedLink"
                                    placeholder="(ie. Heroku link)"
                                    value={deployedLink}
                                    onChange={this.handleChange}
                                    />
                                <label>GitHub Link:</label>
                                <input
                                    type="text"
                                    name="githubLink"
                                    placeholder="www.github.com/(insert your username here)"
                                    value={githubLink}
                                    onChange={this.handleChange}
                                    />
                            </div>  
                            <div className="buttons">
                                <input type="submit" />
                                <button onClick={this.handleDelete}>Delete</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}