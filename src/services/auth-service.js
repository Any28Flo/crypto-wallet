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



    signin = (email, password) => {

        return this.service.post('/signin', {email, password})
            .then(response => response)
    };




}
export default AuthService

