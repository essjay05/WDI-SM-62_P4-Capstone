import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default ({ currentUser }) => {
    return (
        <nav className="navBar ui borderless tiny inverted stackable menu">
            <div className="ui container">
                <div className="left">
                    <Link className="navBrand-link" to="/">PORT=f0710  </Link>
                    {/* <Link className="nav-link" to="/"> Home </Link> */}
                </div>
                <div className="right">
                { currentUser
                ? (
                    <div className="">
                        <span>
                            <Link className="navBar-link" to="/users"> <i class="fas fa-users"></i> </Link>
                            <Link className="navBar-link" to="/user/"> <i class="far fa-user"></i>{currentUser.firstName.charAt(0)}{currentUser.lastName.charAt(0)} </Link>
                            <Link className="navBar-link" to="/edit"> <i class="fas fa-user-edit"></i> </Link>
                            <Link className="navBar-link" to="/logout"> <i class="fas fa-sign-out-alt"></i> Log Out </Link>
                        </span>
                    </div>
                    )
                    : (
                    <div className="">
                        <span>
                            <Link className="navBar-link" to="/login"> <i class="fas fa-sign-out-alt"></i> Log In </Link>
                            <Link className="navBar-link" to="/"> Signup </Link>
                        </span>
                    </div>
                    )}
                </div>
            </div>
        </nav>
    )
};