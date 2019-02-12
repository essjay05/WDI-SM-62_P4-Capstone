import React, { Component } from 'react';
import httpClient from '../../utilities/httpClient';
// import axios from 'axios';

export default class Signup extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        debugger
        let user = await httpClient.authenticate(this.state, "/api/users")
        debugger
        if (user) {
            this.props.onSignupSuccess()
            this.props.history.push('/users');
            debugger
        }
    };

    render() {
        let { email, password, firstName, lastName } = this.state;
        let { currentUser } = this.props;
                
        return (
                <div>
                { currentUser
                ? (
                <div>
                    <h1> Signup </h1>
                    <div className="row">
                        <div className="column column-50 column-offset-25">
                            <form onSubmit={this.handleSubmit}>
                                <label>First Name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Your First Name"
                                    onChange={this.handleChange}
                                    value={firstName}
                                    />
                                <label>Last Name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Your Last Name"
                                    onChange={this.handleChange}
                                    value={lastName}
                                    />
                                <label>Email: </label>
                                <input 
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={this.handleChange}
                                    value={email}
                                    />
                                <label>Password: </label>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="Secret password here..."
                                    onChange={this.handleChange}
                                    value={password}
                                    />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>    
                ) : (
                <div className="aboutBox container clearfix">
                    <div className="float-left">
                        <h1> PORT=fol10 </h1>
                        <h3>Showcase your projects here!</h3>
                        <p>Upload your screenshots, links and code to showcase your skills here.</p>
                        <h3>Filler Header</h3>
                        <p>Cupcake ipsum dolor. Sit amet cookie marzipan gummies sweet. Tart lollipop tiramisu sweet jelly halvah cookie. Gummi bears donut soufflé. Sweet roll cupcake chupa chups gummi bears lollipop. Macaroon cake cookie toffee tiramisu marzipan cookie powder. Apple pie danish icing cotton candy halvah liquorice chocolate cake marshmallow. Gummi bears oat cake sweet macaroon. Brownie pastry jujubes biscuit macaroon lemon drops powder.</p>
                    </div>
                </div> 
                )}
            </div>
        );
    }
};