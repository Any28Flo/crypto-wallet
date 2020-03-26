import React, { useState, useContext } from 'react';
import AuthService from './auth-service';
import { Link, useHistory } from 'react-router-dom';
import {userContext} from "./../../App";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const LogIn = (props) => {

    const MySwal = withReactContent(Swal);
    const history = useHistory();
    const {setUser} =  useContext(userContext);


    const [ formState, updateFormState ] = useState (
        { email: '', password: '' }
    );
    const service = new AuthService();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = formState.email;
        const password = formState.password;
        service.signin(email, password)
            .then( response => {


                if(response.status === 200){

                    setUser(response.data.user);
                    history.push("/");
                    updateFormState({ email: "", password: "" });
                  }
            })
            .catch( error => {

                updateFormState({ email: "", password: "" });

                MySwal.fire({
                    icon: 'error',
                    title :'Oops...',
                    text : 'Error logging in please try again'
                    
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