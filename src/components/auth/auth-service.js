import axios from 'axios';

class AuthService{
    constructor(){
        let service = axios.create({
            baseURL : 'https://crypo-wallet-server.herokuapp.com/api',
            withCredentials: true
        });
        this.service = service;
    }

    signup = (username, password) => {
        return this.service.post('/signup', {username, password})
            .then(response => response.data)
    }

}
export default AuthService

