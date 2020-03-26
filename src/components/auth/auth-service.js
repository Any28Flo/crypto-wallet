import axios from 'axios';

class AuthService{
    constructor(){
        let service = axios.create({
            baseURL :'http://localhost:5000/api',
            withCredentials: true
        });
        this.service = service;
    }

    signup = (username, password, email, image) => {
        return this.service.post('/signup', {username, password, email, image})
            .then(response => response)
    };

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    };

    signin = (email, password) => {

        return this.service.post('/signin', {email, password})
            .then(response => response)
    };


    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    };


}
export default AuthService

