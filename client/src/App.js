import React, { Component } from 'react';
import Layout from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import UsersIndexContainer from './components/UsersIndexContainer';
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
                    <Route exact path="/login" render={(props) => {
                        return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/users" render={(props) => {
                        return this.state.currentUser ? <UsersIndexContainer {...props} currentUser={this.state.currentUser}/> : <Redirect to="/login" />
                    }} />
                </Switch>
            </Layout>
        )
    }
}
export default App;