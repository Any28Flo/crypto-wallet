import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import GridContainer from "./../Grid/GridContainer";
import GridItem from "./../Grid/GridItem";
import InfoArea from "./../InfoArea/InfoArea";

import styles from "./../../assets/jss/material-kit-react/views/advantageStyle";
import {advantages} from "../../data/advantages";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Create your cryptocurrency portfolio today</h2>
                    <h3 className={classes.description}>
                        CryptoWallet has a variety of features that make it the best place to start trading
                    </h3>
                </GridItem>

            </GridContainer>
            <div>
                <GridContainer>
                    {
                        advantages.map((advantage, index) =>{
                            return(
                                <GridItem  key={`Info-${index}`} xs={12} sm={12} md={4}>
                                    <InfoArea

                                        title={advantage.title}
                                        description={advantage.description}
                                        img={advantage.icon}
                                        vertical
                                    />
                                </GridItem>
                            )
                        })
                    }

                </GridContainer>
            </div>
        </div>
    );
}
