import React, { useState, useContext } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
//import {UserContext} from "../../App";

const LogIn = props => {
  //  const userContext =  useContext();
    //console.log(userContext)

    const [ formState, updateFormState ] = useState (
        { email: '', password: '' }
    );
    const service = new AuthService();

    // const { updateUser } = useContext(MyContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = formState.email;
        const password = formState.password;
        service.signin(email, password)
            .then( response => {
                updateFormState({ email: "", password: "" });
                console.log(response);

                  if(response.status === 200){
                      console.log("Welcome to the club");
                  }
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
                <label>Email:</label>
                <input type="email" name="email" value={formState.email} onChange={ e => handleChange(e)}/>
                <label>Password:</label>
                <input type="password" name="password" value={formState.password} onChange={ e => handleChange(e)} />

                <input type="submit" value="Login" />
            </form>
            <p>Don't have account?
                <Link to={"/signup"}> Signup</Link>
            </p>
        </div>
    )

}


export default LogIn;