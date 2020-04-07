import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

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