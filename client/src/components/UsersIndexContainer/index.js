import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import './usersIndex.css';

export default class UsersIndexContainer extends Component {

    state = {
        users:  [],
        currentUser: null,
        loading: true
    }
    // Figure out how to load USERS array

    componentDidMount() {
        axios.get('/api/users')
            .then(res => {
                console.log(res.data.payload)
                // debugger
                this.setState({ users: res.data.payload })
            })
            .catch(err => {
                debugger
            })
            this.setState({ currentUser: this.props.currentUser })
    }

    // async componentDidMount() {
    //     let { currentUser } = this.props
        
    //     try {
    //         debugger
    //         let { data: { response: { users } }} = await axios.get('/api/users');
    //         let { data: { payload } } = await axios.get(`/api/users/${currentUser._id}`);
    //         console.log(this.props)
    //         console.log('Break')
    //         console.log(this.state)
    //         debugger
    //         this.setState({ 
    //             // users,
    //             user: payload, 
    //             favorites: payload.favorites, 
    //             loading: false 
    //         })
    //         debugger
    //         console.log('this.state is below')
    //         console.log(this.state)
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    render() {
        let { users } = this.state;
        let { currentUser } = this.props;
        return (
            <div className="usersIndexContainer">
                <h1 className="page-header">Hello, {currentUser.firstName}!</h1>
                {/* <h3  className="section-header">List of All Users</h3> */}
                <aside className="aspect-ratio"></aside>
                <article>
                    <div>
                        <Link className="nav-link" to="/user"> Your Profile </Link>
                        <h3 className="section-header">Users:</h3>
                        <ul>
                        { users.map((user, i) => {
                        return <div key={i} className="ui celled grid">
                            <UserInfo
                                key={i}
                                currentUser={ currentUser }
                                user={ user }
                                onClick={this.handleClick}
                            />
                            {/* <Link
                                className="nav-link"
                                user={ user }
                                userid={ user._id }
                                to={`/users/${user._id}`}>Go to {user.firstName} {user.lastName}'s Page
                            </Link>  */}
                        </div>
                        })}
                        </ul>  
                    </div>
                </article>
            </div>
        )
    }
}
