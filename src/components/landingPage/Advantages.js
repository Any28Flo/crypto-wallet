import React from 'react'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import {advantages} from '../../data/advantages'
import CardLandingPage from "./CardLandingPage";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Advantages = () =>{
    const classes = useStyles();

    return(

        <Grid container justify="center" alignItems="center" spacing={3}>

                    {
                        advantages.map((advantage, index) =>{
                            return(
                                <Grid key={`advantage-${index}`} item xs={12} sm={6} md={3}>
                                    <CardLandingPage   className={classes.paper} data={advantage}> d</CardLandingPage>
                                </Grid>
                            )
                        })

                    }

        </Grid>
    )
};

export default Advantages;