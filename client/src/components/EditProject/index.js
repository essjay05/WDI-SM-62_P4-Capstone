import React, { Component } from 'react';
// import axios from 'axios';
import httpClient from '../../utilities/httpClient';
// import ProjectForm from '../ProjectForm';

export default class Edit extends Component {
        
    state = {
        currentUser: null,
        project: null,
        title: this.props.currentUser.resume.projects.title,
        image: this.props.currentUser.resume.projects.image,
        description: this.props.currentUser.resume.projects.description,
        techUsed: this.props.currentUser.resume.projects.techUsed,
        deployedLink: this.props.currentUser.resume.projects.deployedLink,
        githubLink: this.props.currentUser.resume.projects.githubLink,
        projectId: this.props.currentUser.resume.projects._id
    }

    
        // let { currentUser } = this.props;
        // let { project } = this.props.currentUser.resume.projects._id
    

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        let { project } = this.props.currentUser.resume.projects._id
        httpClient.patch(`/api/users/${currentUser._id}/projects/${project._id}`, this.state)
            .then( res => {
                // debugger
                this.props.history.push('/user');    
            })
    };

    render() {
        let { project } = this.props.currentUser.resume.projects._id
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