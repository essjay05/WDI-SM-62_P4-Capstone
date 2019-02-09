import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../UserInfo';

export default class UsersIndexContainer extends Component {
    state = {
        users: [],
        currentUser: null
    }

    componentDidMount() {
        axios('/api/users')
            .then( res => {
                console.log(res.users)
            })
            .catch(err => {
                debugger
            })
            this.setState({ currentUser: this.props.currentUser })
    }

    render() {
        let { users } = this.state;
        let { currentUser } = this.props;
        return (
            <div className="grid usersIndexContainer">
                <h1 className="usersIndexTitle">List of All Users</h1>
                <aside className="aspect-ratio">/</aside>
                <article>
                    <div>
                        { users.map((user, i) => {
                        return <div key={i}>
                            <UserInfo
                                key={i}
                                currentUser={ currentUser }
                                users={ user }
                                onClick={this.handleClick}
                            />
                        </div>
                    })}
                    </div>
                </article>
            </div>
        )
    }

}