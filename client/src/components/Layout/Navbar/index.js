import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default ({ currentUser }) => {
    return (
        <nav className="navLeft clearfix column">
            <div className="float-left">
                {/* <Link className="nav-link brand" to="/">PORT=f0710</Link> */}
                <Link className="nav-link" to="/"> Home </Link>
            </div>
            <div className="float-right">
            { currentUser
            ? (
                <div className="column column-50 column-offset-25">
                    <span>
                        <Link className="nav-link" to="/users"> Users Index </Link>
                        <Link className="nav-link" to="/user/"> User Profile</Link>
                        <Link className="nav-link" to="/edit"> Edit </Link>
                        <Link className="nav-link" to="/logout"> Logout </Link>
                    </span>
                </div>
                )
                : (
                <div className="column column-50 column-offset-25">
                    <span>
                        <Link className="nav-link" to="/login"> Login </Link>
                        <Link className="nav-link" to="/"> Signup </Link>
                    </span>
                </div>
                )}
            </div>
        </nav>
    )
};