
import React, { useState, useContext } from 'react';
import AuthService from '../../services/auth-service';

import { Link, useHistory } from 'react-router-dom';
import {userContext} from "./../../App";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const SignUp = () => {

    const MySwal = withReactContent(Swal);
    const history = useHistory();
    const [ formState, updateFormState ] = useState({ username: '', password: '', email : '' ,image : '' });
    const service = new AuthService();

    const { setUser } = useContext(userContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const username = formState.username;
        const password = formState.password;
        const email = formState.email;
        const image = formState.image;

        service.signup(username, password, email, image)

            .then( response => {
                if(response.status === 200){
                    setUser(response);
                    history.push('/userBoard');
                    updateFormState({
                        username: "",
                        password: "",
                        email: "",
                        image: ""
                    });
                }
            })
            .catch( error => {
                MySwal.fire({
                    icon: 'error',
                    title :'Oops...',
                    text : 'Error sign up  in please try again'

                })

            } )
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}));
    };

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={formState.username} onChange={ e => handleChange(e)}/>

                <label>Password:</label>
                <input name="password" type="password" value={formState.password} onChange={ e => handleChange(e)} />

                <label>Email:</label>
                <input name="email" type="email" value={formState.email} onChange={ e => handleChange(e)} />

                <label>Image:</label>
                <input name="image" type="text" value="image_01.png" onChange={ e => handleChange(e)} />


                <input type="submit" value="Signup" />
            </form>

            <p>Already have account?
                <Link to={"/"}> Login</Link>
            </p>
        </div>
    )
};

export default SignUp;