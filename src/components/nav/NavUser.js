import React , {Fragment , Component} from 'react'

import {makeStyles} from "@material-ui/core";
import {AppBar,Toolbar, Typography, Button, IconButton, Menu , MenuItem} from "@material-ui/core";

import {MenuIcon} from "@material-ui/icons"

import {optionsNav} from './optionsNav'
import NavItem from "./NavItem";

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
    return(
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Crypto Wallet
                    </Typography>

                    <Button color="inherit">All cryptos</Button>
                    <Button color="inherit"> My profile</Button>
                    <Button color="inherit">My wallets</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
          
        </div>


    )
};
export default Nav;