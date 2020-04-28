import axios from 'axios';

class AuthService{
    constructor(){
        let service = axios.create({
            baseURL :`${process.env.REACT_APP_API_URL}`,
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

