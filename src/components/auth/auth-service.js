import axios from 'axios';

class AuthService{
    constructor(){
        let service = axios.create({
            baseURL : process.env.API_URL ,
            withCredentials: true
        });
        this.service = service;
    }

    signup = (username, password) => {
        return this.service.post('/signup', {username, password})
            .then(response => response.data)
    };

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }


}
export default AuthService

