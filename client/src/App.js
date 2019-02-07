import React, { Component } from 'react';
import Layout from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';

export default class App extends Component {
    render () {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Layout>
        )
    }
}