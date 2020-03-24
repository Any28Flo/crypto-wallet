
import React, { useState, useContext } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import MyContext from '../../context';

const SignUp = () => {

    const [ formState, updateFormState ] = useState({ username: '', password: '', email : '' ,image : '' });
    const service = new AuthService();

    const { updateUser } = useContext(MyContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const username = formState.username;
        const password = formState.password;
        const email = formState.email;
        const image = formState.image;

        service.signup(username, password)
            .then( response => {
                updateFormState({
                    username: "",
                    password: "",
                    email: "",
                    image: ""
                });
                updateUser(response)
            })
            .catch( error => console.log(error) )
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