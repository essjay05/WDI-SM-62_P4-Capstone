import React, { Component } from 'react';
import Layout from './components/Layout';
import Signup from './components/Signup';
import Login from './components/Login';
// currentUser show profile/resume page
import UserShow from './components/UserShow';
// other users' show profile/resume page
import UsersShow from './components/UsersIndexContainer/UsersShow';
import FormInput from './components/FormInput';
import EditProject from './components/EditProject';
// import Project from './components/Project';
import AddProject from './components/AddProject';
import Logout from './components/Logout';
import UsersIndexContainer from './components/UsersIndexContainer';
import { Switch, Redirect } from 'react-router-dom';
import httpClient from './utilities/httpClient';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

class App extends React.Component {
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

                {/* User Authentication Pages: Signup, Login, Logout */}
                    <Route exact path="/" render={(props) => {
                        return <Signup {...props} onSignupSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/login" render={(props) => {
                        return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/logout" render={() => {
                        return <Logout logout={this.logout} />
                    }} />

                {/* Edit Pages */}
                    <Route exact path="/edit" render={(props) => {
                        return <FormInput {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/addProject" render={(props) => {
                        return <AddProject {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} />
                    }} />
                    <Route exact path="/editProject" render={(props) => {
                        return <EditProject {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} />
                    }} />

                {/* User(s) Index/Show Pages */}
                    {/* Users Index (All users) */}
                    <Route exact path="/users" render={(props) => {
                        return this.state.currentUser ? <UsersIndexContainer {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess}/> : <Redirect to="/login" />
                    }} />
                    {/* Current User's profile */}
                    <Route exact path="/user" render={(props) => {
                        return this.state.currentUser ? <UserShow {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess}/> : <Redirect to="/login" />
                    }} />
                    {/* Other users' profile */}
                    <Route exact path="/users/:id" render={(props) => {
                        return this.state.currentUser ? <UsersShow {...props} onLoginSuccess={this.onAuthSuccess} /> : <Redirect to="/login" />
                    }} />     
                </Switch>
            </Layout>
        )
    }
}
export default withRouter(App);