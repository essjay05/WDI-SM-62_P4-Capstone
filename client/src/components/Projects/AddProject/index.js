import React, { Component } from 'react';
import axios from 'axios';
import ProjectForm from '../ProjectForm';

export default class Edit extends Component {
    
    state = {
        resume: {
            title: "",
            image: "",
            description: "",
            techUsed: "",
            deployedLink: "",
            githubLink: ""
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { currentUser } = this.props
        axios.post(`/api/users/${currentUser._id}/projects`, this.state)
            .then( res => {
                this.props.history.push('/profile');    
            })
    };

    render() {
        let { title, image, description, techUsed, deployedLink, githubLink } = this.state;
        return (
            <div>
                <h1> Upload a Project</h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit}>
                            <ProjectForm
                                title={title}
                                image={image}
                                description={description}
                                techUsed={techUsed}
                                deployedLink={deployedLink}
                                githubLink={githubLink}
                                />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}