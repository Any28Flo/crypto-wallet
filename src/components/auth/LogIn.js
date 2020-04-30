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
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState("");

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const MySwal = withReactContent(Swal);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);




    const service = new AuthService();

    const handleFormSubmit =  (event) => {
        event.preventDefault();

        service.signin(email, password)
        .then(response =>{
            if(response.status === 200){
                setUserData({
                    token: response.data.token,
                    user: response.data.user
                });
                localStorage.setItem("auth-token", response.data.token);
                history.push("/user-board");
            }
        }).catch(e => {
            setEmail('');
            setPassword('');
            MySwal.fire({
                icon: 'error',
                title :'Oops...',
                text : e.response.data.msg
            })
        })




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
                                    className={classes.input}
                                    name="email"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={email}
                                    label="Email"
                                    type="email"
                                    onChange={ e => setEmail(e.target.value)}
                                />

                                <TextField
                                    className={classes.input}
                                    name="password"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HttpsOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={password}
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