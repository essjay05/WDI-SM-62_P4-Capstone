import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UserInfo extends Component {
    state = {
        currentUser: null,
        user: null,
    }

    async componentDidMount() {
        let { currentUser } = this.props;
        try {
            let { data: { payload } } = await axios.get(`/api/users/${currentUser._id}`);
            console.log( payload )
        } catch (err) {
            debugger
        }
    }

    render() {
        let { user } = this.props;
        console.log(user)
        debugger
        return (
            <div className="userInfo-container">
                <h3>{user.firstName} {user.lastName}</h3>
                {/* <img src="${user.profileImg}" alt="User Profile">Profile Photo</img> */}
                <ul>
                    {/* <li><img src="#">User Profile image Here</img></li> */}
                    <li>Location: {user.city}, {user.state}, {user.country}</li>
                    <li>Title: {user.title}</li>    
                </ul>
                <Link
                    className="nav-link"
                    user={ user }
                    userid={ user._id }
                    to={`/users/${user._id}`}>{user.firstName} {user.lastName}'s Profile Page
                </Link>   
            </div>
        )
    }
}