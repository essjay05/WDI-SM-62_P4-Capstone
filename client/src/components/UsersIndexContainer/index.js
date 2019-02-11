import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../UserInfo';
import { Link } from 'react-router-dom';

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
                debugger
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
            <div className="grid usersIndexContainer">
                <h1 className="usersIndexTitle">List of All Users</h1>
                <aside className="aspect-ratio"></aside>
                <article>
                    <div>
                        <h3>All Users Index List Goes Here</h3>
                        <Link className="nav-link" to="/profile"> Profile </Link>
                        <ul>
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
                        </ul>  
                    </div>
                </article>
            </div>
        )
    }
}
