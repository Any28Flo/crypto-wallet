import React from 'react';
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "./../../assets/jss/material-kit-react/views/landingPage";

import GridContainer from "./../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "./../CustomButtons/Button";
import Advantages from "./Advantages";
import HeroLayout from "./HeroLayout";
import AdvantageSection from "./AdvantageSection";
const useStyles = makeStyles(styles);
const  FullWidthGrid = () => {
    const classes = useStyles();



    return (
        <div >
            <HeroLayout filter image={require("./../../assets/img/landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>It's Time To Own Your Crypto</h1>
                            <h4>
                                Buy and sell popular digital currencies, keep track of them in the one place.
                            </h4>
                            <br />
                            <Button
                                className={"buttonGradient"}
                                color="primary"
                                size="lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play" />
                                Sign in
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </HeroLayout>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                   <AdvantageSection/>

                </div>
            </div>

        </div>



    );
};

export default FullWidthGrid;