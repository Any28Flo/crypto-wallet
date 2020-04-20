import React, { useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserContext from "./../../context"

// @material-ui/core components
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

import AuthService from '../../services/auth-service';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import styles from './../../assets/jss/material-kit-react/views/loginPage';
const useStyles = makeStyles(styles);


const LogIn = () => {

    const MySwal = withReactContent(Swal);
    const history = useHistory();
    const [user,setUser] = useContext(UserContext);
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();



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
                    window.localStorage.token =response.data.token;

                    const {username,email,image,_id} = response.data.user;
                    const newUser= {username,email,image,_id};
                    setUser(newUser);
                    updateFormState({ email: "", password: "" });
                    history.push("/user-board")
                }
            })
            .catch( error => {
                updateFormState({ email: "", password: ""});
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
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimaton]}>
                        <form className={classes.form} onSubmit={handleFormSubmit}>
                            <CardHeader color="primary" className={classes.cardHeader}>
                                <h4>Login</h4>

                            </CardHeader>
                            <CardBody>
                                <TextField
                                    name="email"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HttpsOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={formState.password}
                                    onChange={ e => handleChange(e)}
                                />


                            </CardBody>
                            <CardFooter className={classes.cardFooter}>

                                <Button simple color="primary" size="lg" type="submit" value="Login">Login</Button>

                            </CardFooter>
                        </form>
                        <p>Don't have account?
                            <Link to={"/signup"}> Signup</Link>
                        </p>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )

};


export default LogIn;