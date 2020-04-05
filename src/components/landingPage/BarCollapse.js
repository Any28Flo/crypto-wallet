import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar , Typography , Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const BarCollapse = ()=>{
    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Crypto Wallet
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Wallet</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
};

export default BarCollapse;