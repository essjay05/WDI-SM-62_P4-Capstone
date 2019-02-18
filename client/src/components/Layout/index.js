import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default class Layout extends Component {
    
    render () {
        
        return (
            <div className="page-wrapper">
                <Navbar currentUser={this.props.currentUser} />
                {/* <main className="container main"> */}
                    { this.props.children }    
                {/* </main> */}
                <Footer />
            </div>
        )
    }
}
