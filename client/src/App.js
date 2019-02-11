import React, { Component } from 'react';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import Resume from './components/Resume';
import FormInput from './components/FormInput';
import Logout from './components/Logout';
import UsersIndexContainer from './components/UsersIndexContainer';
import { Switch, Route, Redirect } from 'react-router-dom';
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
                    <Route exact path="/edit" render={(props) => {
                        return <FormInput {...props} currentUser={this.state.currentUser} />
                    }} />
                    <Route exact path="/usersIndex" render={(props) => {
                        return this.state.currentUser ? <UsersIndexContainer {...props} currentUser={this.state.currentUser}/> : <Redirect to="/login" />
                    }} />
                    <Route exact path="/profile" render={(props) => {
                        return this.state.currentUser ? <Resume {...props} currentUser={this.state.currentUser}/> : <Redirect to="/login" />
                    }} />
                    <Route exact path="/logout" render={() => {
                        return <Logout logout={this.logout} />
                    }} />
                </Switch>
            </Layout>
        )
    }
}
export default App;