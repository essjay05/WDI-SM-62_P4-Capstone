import axios from 'axios';
import jwtDecode from 'jwt-decode';

const httpClient = axios.create();

httpClient.setToken = function(token) {
    localStorage.setItem('token', token);
    return token;
};

httpClient.getToken = function() {
    return localStorage.getItem('token');
};

httpClient.getCurrentUser = function() {
    const token = this.getToken(); 
    if (token) return jwtDecode(token); 
    return null
};

httpClient.authenticate = async function(credentials, url) {
    try {
        let res = await this({ method: "post", url, data: credentials });
<<<<<<< HEAD
=======
        console.log(res.data)
>>>>>>> form-submit
        debugger
        const token = res.data.token;
        debugger
        if (token) {
                this.defaults.headers.common.token = this.setToken(token);
                return jwtDecode(token)
        } else {
            return false;
        }
    } catch(err) {
        debugger
        console.log(err);
    }
};

// UPDATE user
httpClient.updateUser = async function (credentials, url) {
    try {
        let res = await this({ method: 'patch', url, data: credentials })
        const { token } = res.data.payload

        if (token) {
            this.defaults.headers.common.token = this.setToken(token)
            return jwtDecode(token)
        } else {
            return false
        }
    } catch (err) {
        console.log(err)
    }
}

// ADD project
httpClient.addProject = async function (credentials, url) {
    try {
        let res = await this({ method: 'post', url, data: credentials })
        const user = res.data.payload
        debugger
        if (user) {
            return httpClient.logout()
        }
    } catch (err) {
        console.log(err)
    }
}

// UPDATE project
httpClient.updateProject = async function (credentials, url) {
    try {
        let res = await this({ method: 'patch', url, data: credentials })
        const user = res.data.payload
        debugger
        if (user) {
            return httpClient.logout()
        }
    } catch (err) {
        console.log(err)
    }
}
// DELETE project
httpClient.deleteProject = async function (credentials, url) {
    try {
        let res = await this({ method: 'delete', url, data: credentials })
        const user = res.data.payload
        debugger
        if (user) {
            return httpClient.logout()
        }
    } catch (err) {
        console.log(err)
    }
}

// DELETE user
httpClient.deleteUser = async function (credentials, url) {
    try {
        let res = await this({ method: 'delete', url, data: credentials })
        const user = res.data.payload
        debugger
        if (user) {
            return httpClient.logout()
        }
    } catch (err) {
        console.log(err)
    }
}

// logout
httpClient.logout = function() {
    localStorage.removeItem('token'); 
    delete this.defaults.headers.common.token;
    return true;
};

// During initial app load, attempt to set a local storage stored token as a default header
// for all api requests
// If token exists in local storage, assign token to header so user doesn't have to log in again
httpClient.defaults.headers.common.token = httpClient.getToken();

export default httpClient;