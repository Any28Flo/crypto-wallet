import React, { useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';

import {UserContext} from "../../context/userContext";
import ErrorNotice from "../Warning/ErrorNotice";

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
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState("");

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const MySwal = withReactContent(Swal);
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();



    const service = new AuthService();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
           const loginRes = await service.signin(email, password);
           setUserData({
               token: loginRes.data.token,
               user: loginRes.data.user
           });
           localStorage.setItem("auth-token", loginRes.data.token);
           history.push("/user-board");
        }catch (err) {
            MySwal.fire({
                icon: 'error',
                title :'Oops...',
                text : err.response.data.msg

            })

        }
    };
    return(
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimaton]}>
                        {error & <ErrorNotice error={error} clearError={ () => setError("")}/>}
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
                                    onChange={ e => setEmail(e.target.value)}
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
                                    onChange={ e => setPassword(e.target.value)}
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