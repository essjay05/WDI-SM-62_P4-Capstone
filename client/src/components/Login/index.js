import React, { Component } from 'react';
import httpClient from '../../utilities/httpClient';
import { Form } from 'semantic-ui-react';

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        debugger
        let user = await httpClient.authenticate(this.state, "/api/users/authenticate");
        if (user) {
            this.props.onLoginSuccess();   
            this.props.history.push('/users')
        }
    };

    render() {
        let { email, password } = this.state;
        return (
            <div className="">
                <h1 className="page-header"> Login </h1>
                <div className="ui text container">
                    <div className="row">
                        <form onSubmit={this.handleSubmit} className="ui form">
                            <div className="field">
                                <label className="form-label"> Email: </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Login Email"
                                    onChange={this.handleChange}
                                    value={email}
                                    />
                            </div>
                            <div className="field">
                                <label className="form-label"> Password: </label> 
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="****************"
                                    onChange={this.handleChange}
                                    value={password}
                                    />
                            </div>
                            <div className="field">
                                <input className="ui inverted tiny green button" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;