import React, {useContext, useEffect, useState} from "react"
import { makeStyles } from "@material-ui/core/styles";
import { useHistory} from 'react-router-dom'

import Header from "../Header/Header";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import Icon from "@material-ui/core/Icon";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "./../CustomButtons/Button";

import styles from "./../../assets/jss/material-kit-react/views/navbarsStyle";
import {UserContext} from "../../context/userContext";
import Axios from "axios";

const useStyles = makeStyles(styles);
const NavBar = ()=>{
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    useEffect(  () => {
        const checkUserLoggedIn = async () => {
            const accessToken =  localStorage.getItem("auth-token");
            const tokenRes = await Axios.post(
                `${process.env.REACT_APP_API_URL}/tokenIsValid`,
                null,
                {
                    headers: {
                        "x-access-token":  `${accessToken}`
                    },
                }
            );
            setLoggedIn(tokenRes.data);
        };
        checkUserLoggedIn();

    }, [userData]);

    const register = () => history.push("/signup");
    const login = () => history.push("/login");
    const allCryptos = () => history.push("/all-cryptos");
    const profile = () => history.push("/user-board");

    const logOut = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
        history.push("/");
    };

    return(
        <div>
            {loggedIn ? (
                <Header

                    color="primary"
                    rightLinks={
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <Button
                                    className={classes.navLink + " " + classes.navLinkActive}
                                    onClick={profile}
                                    color="transparent"
                                >
                                    <AccountCircle className={classes.icons} /> My Profile

                                </Button>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Button
                                    className={classes.navLink}
                                    onClick={allCryptos}
                                    color="transparent"
                                >
                                    <Explore className={classes.icons} /> Crypto List

                                </Button>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Button
                                    className={classes.navLink}
                                    onClick={logOut}
                                    color="transparent"
                                >
                                    <Explore className={classes.icons} /> Log out

                                </Button>
                            </ListItem>

                        </List>
                    }
                />

            ) : (
                <Header
                    brand="CryptoWallet"
                    color="primary"
                    rightLinks={
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <Button
                                    className={classes.navLink + " " + classes.navLinkActive}
                                    onClick={register}
                                    color="transparent"
                                >
                                    <Explore className={classes.icons} /> Register
                                </Button>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Button
                                    className={classes.navLink}
                                    onClick={login}
                                    color="transparent"
                                >
                                    <AccountCircle className={classes.icons} /> Log in
                                </Button>
                            </ListItem>

                        </List>
                    }
                />
            )}

        </div>

    )

};

export default NavBar;