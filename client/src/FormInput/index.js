import React from 'react';
// import httpClient from '../../utilities/httpClient';

class Login extends Component {

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
    
        return (
            
            <div>
                <label> {props} </label>
                <input
                    type="text"
                    name={props}
                    placeholder="`Your Login ${props}`"
                    onChange={this.handleChange}
                    value={props}
                    />
            </div>      
        )
    }
}

export default Login;