import React, { Component } from 'react';
import Navbar from './Navbar';
import './Layout.css';

export default class Layout extends Component {
    
    render () {
        
        return (
            <div className="page-wrapper">
                <Navbar currentUser={this.props.currentUser} />
    
                <main className="container">
                    { this.props.children }
                    <h1 className="brand-title">PORT=f0710</h1>
                </main>
                
            </div>
        )
    }
}
