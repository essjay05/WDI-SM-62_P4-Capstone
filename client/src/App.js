import React, { Component } from 'react';
import Layout from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import httpClient from './utilities/httpClient';
import './App.css';

class App extends Component {
    state = {
        currentUser: httpClient.getCurrentUser()
    }

    onAuthSuccess = () => {
        this.setState({ currentUser: httpClient.getCurrentUser() })
    }

    logout = () => {
        httpClient.logout();
        this.setState({ currentUser: null });
    }

    render () {
        return (
            <Layout currentUser={this.state.currentUser}>
                <Switch>
                    <Route exact path="/" render={(props) => {
                        return <Signup {...props} onSignupSuccess={this.onAuthSuccess} />
                    }} />
                </Switch>
            </Layout>
        )
    }
}
export default App;