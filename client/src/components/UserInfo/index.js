import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UserInfo extends Component {
    state = {
        currentUser: null,
        user: null,
        users: []
    }

    async componentDidMount() {
        let { currentUser, users } = this.props;
        try {
            let { data: { payload } } = await axios.get(`/api/users/${currentUser._id}`);
            console.log( payload )
        } catch (err) {
            debugger
        }
    }

    render() {
        let { user } = this.props;
        return (
            <div>
                <h3>{user.name}User Name Here</h3>
                <img src="${user.profileImg}" alt="User Profile">Profile Photo</img>
                <Link
                    className="nav-link"
                    user={ user }
                    to={`/users/${user.id}`}>Link to User's Profile Page
                </Link>
            </div>
        )
    }
}