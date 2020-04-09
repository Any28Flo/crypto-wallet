import React  from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from "@material-ui/core";
import {AppBar,Toolbar, Typography, Button} from "@material-ui/core";


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
                    <Link to="/login">
                        <Button color="inherit">Login</Button>

                    </Link>

                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />

        </div>


    )
};
export default Nav;