import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding : "120px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const HeroLayout =  () => {
    const classes = useStyles();

    return(
        <Container maxWidth="md">
            <div className={classes.root}>
                <Typography variant="h2" gutterBottom>
                   Crypto Wallet
                </Typography>

                <Typography variant="p" gutterBottom>
                    Keep your crytos in one place
                </Typography>
                <br/>
                <Button variant="outlined" color="primary">
                    Sign Up
                </Button>
            </div>
        </Container>
    )

};

export default HeroLayout