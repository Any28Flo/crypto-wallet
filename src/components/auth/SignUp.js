
import React, { useState, useContext } from 'react';
import AuthService from '../../services/auth-service';
import UserContext from "./../../context"

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {TextField } from '@material-ui/core';

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "./../CustomButtons/Button"
import Card from "./../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader"
import CardFooter from "../Card/CardFooter";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import People from "@material-ui/icons/People";


import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './../../assets/jss/material-kit-react/views/loginPage';






const useStyles = makeStyles(styles);
const SignUp = () => {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();

    const MySwal = withReactContent(Swal);
    const history = useHistory();
    const [ formState, updateFormState ] = useState({ username: '', password: '', email : '' ,image : '' });
    const service = new AuthService();

    //const { setUser } = useContext(userContext);
    const [user, setUser] = useContext(UserContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const username = formState.username;
        const password = formState.password;
        const email = formState.email;
        const image = formState.image;

        service.signup(username, password, email, image)

            .then( response => {
                if(response.status === 200){
                    const {username,email,image} = response.data.newUser;
                    const newUser = {username,email,image};
                    setUser(newUser);
                    history.push('/user-board');
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
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimaton]}>
                        <form className={classes.form} onSubmit={handleFormSubmit}>
                            <CardHeader color="primary" className={classes.cardHeader}>
                                <h4>Sign Up</h4>

                            </CardHeader>
                            <CardBody>
                                <TextField
                                    name="username"
                                    className={classes.input}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <People />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Username"
                                    type="text"
                                    value={formState.username}
                                    onChange={ e => handleChange(e)}
                                />
                                <TextField
                                    name="email"
                                    className={classes.input}

                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Email"
                                    type="email"
                                    value={formState.email}
                                    onChange={ e => handleChange(e)}
                                />
                                <TextField
                                    name="password"
                                    className={classes.input}


                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <HttpsOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Password"
                                    type="password"
                                    value={formState.password}
                                    onChange={ e => handleChange(e)}
                                />

                            </CardBody>
                            <CardFooter className={classes.cardFooter}>

                                <Button simple color="primary" size="lg" type="submit" value="Login">Login</Button>

                            </CardFooter>
                        </form>
                        <p>Already have account?
                            <Link to={"/login"}> Login</Link>
                        </p>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )

};

export default SignUp;

/*

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


     </div>
)*/
