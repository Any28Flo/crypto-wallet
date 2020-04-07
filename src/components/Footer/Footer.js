import React from 'react'
import{Typography} from "@material-ui/core";
import Copyright from "./Copyright";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Footer = ()=>{
    const classes = useStyles();

    return(
        <div>

            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Made with love <span>&#128153;</span> by Ironhacker  <span>&#128105;</span> Analin Flores <span>&#128293;</span>
                </Typography>
                <Copyright />
            </footer>

        </div>
    )
};

export default Footer;
