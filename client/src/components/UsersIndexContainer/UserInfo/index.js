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
            <div>
                <h3>{user.firstName} {user.lastName} Profile Here</h3>
                {/* <img src="${user.profileImg}" alt="User Profile">Profile Photo</img> */}
                <Link
                    className="nav-link"
                    user={ user }
                    userId={ user._id }
                    to={`/users/${user._id}`}>Link to User's Profile Page
                </Link>
            </div>
        )
    }
}