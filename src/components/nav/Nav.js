import React, {useContext, useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core";
import {AppBar,Toolbar, Button} from "@material-ui/core";
import {UserContext} from "../../context/userContext";
import Axios from "axios";

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow : 1
    },
    flex :{
        flex : 1
    },
    menuButton:{
        marginLeft: -12,
        marginRight : 20
    },
    toolbarMargin : theme.mixins.toolbar
}));


const Nav = () =>{
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    useEffect(  () => {
        const checkUserLoggedIn = async () => {
            const accessToken =  localStorage.getItem("auth-token");
            const tokenRes = await Axios.post(
                "http://localhost:5000/api/tokenIsValid",
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
    const logOut = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
        history.push("/");
    };

    return(
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/">
                        <img src="./images/crypto_wallet.png" alt="crypto-wallet icon"
                             style={{ width: '25%', height: 75 }}
                        />
                    </Link>
                    <div className="auth-options">
                        {loggedIn ? (
                            <Button variant="contained"> onClick={logOut}>Log out</Button>
                        ) : (
                            <>
                                <Button variant="contained" onClick={register}>Register</Button>
                                <Button variant="contained" onClick={login}>Log in</Button>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />

        </div>


    )
};
export default Nav;