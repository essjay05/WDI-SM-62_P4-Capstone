import React, { Component } from 'react';
import axios from 'axios';
// import httpClient from '../../utilities/httpClient';
// import ProjectForm from '../ProjectForm';
// import { Redirect } from 'react-router-dom';

export default class AddProject extends Component {
    
    state = {
        title: "",
        image: "",
        description: "",
        techUsed: "",
        deployedLink: "",
        githubLink: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { currentUser } =this.props;
        debugger
        console.log(currentUser._id)
        axios.post(`/api/users/${currentUser._id}/projects`, this.state)
            .then(res => {
                this.props.history.push('/user');
            })
    };

    render() {
        let { title, image, description, techUsed, deployedLink, githubLink } = this.state;
        return (
            <div>
                <h1 className="page-header"> Upload a Project</h1>
                <div className="ui text container">
                    <div className="row">
                        <form className="ui form" onSubmit={this.handleSubmit}>
                            
                                <div className="field">
                                    <label>Title: </label>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title of your Project"
                                        value={title}
                                        onChange={this.handleChange}
                                        />
                                </div>
                                <div className="field">
                                    <label>Image Url: </label>
                                    <input
                                        type="text"
                                        name="image"
                                        placeholder="Image url"
                                        value={image}
                                        onChange={this.handleChange}
                                        />
                                </div>
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
                                <div className="field">
                                    <label>GitHub Link:</label>
                                    <input
                                        type="text"
                                        name="githubLink"
                                        placeholder="www.github.com/(insert your username here)"
                                        value={githubLink}
                                        onChange={this.handleChange}
                                        />
                                </div>  
                            <input className="ui inverted green button" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}