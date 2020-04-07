import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Advantages from "./Advantages";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const  FullWidthGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

                <Advantages/>

        </div>
    );
};

export default FullWidthGrid;