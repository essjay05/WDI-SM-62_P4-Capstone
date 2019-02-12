import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default ({ currentUser }) => {
    return (
        <nav className="nav clearfix column">
            <div className="float-left">
                <span className="nav-link">PORTfol10</span>
                <Link className="nav-link" to="/"> Home </Link>
            </div>
            <div className="float-right">
            { currentUser
            ? (
                <div className="column column-50 column-offset-25">
                    <span>
                        <Link className="nav-link" to="/users"> Users Index </Link>
                        <Link className="nav-link" currentUser={ currentUser } to={`/users/${currentUser._id}`}>{currentUser.firstName} {currentUser.lastName}'s Profile Page</Link>
                        <Link className="nav-link" to={`/users/${currentUser._id}`}> User Profile</Link>
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