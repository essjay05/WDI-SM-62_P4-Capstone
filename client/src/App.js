import React, { Component } from 'react';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
import UserShow from './components/UserShow';
import FormInput from './components/FormInput';
// import EditProject from './components/EditProject';
// import Project from './components/Project';
// import AddProject from './components/AddProject';
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
                        return <EditUserForm {...props} currentUser={this.state.currentUser} />
                    }} />
                    <Route exact path="/users" render={(props) => {
                        return this.state.currentUser ? <UsersIndexContainer {...props} currentUser={this.state.currentUser}/> : <Redirect to="/login" />
                    }} />
                    <Route exact path="/user" render={(props) => {
                        return this.state.currentUser ? <UserShow {...props} currentUser={this.state.currentUser}/> : <Redirect to="/login" />
                    }} />
                    <Route exact path="/users/:id" render={(props) => {
                        return this.state.currentUser ? <UserShow {...props} /> : <Redirect to="/login" />
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