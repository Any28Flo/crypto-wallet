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

/*
 async const authentication = () =>{
   try{
       const res = await fetch('http:localhost:5000/api')
       const service = res.json();
       console.log(service)
   } catch{
        throw new Error();
   }
};
export {authentication}*/
