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

const useStyles = makeStyles(styles);
const  FullWidthGrid = () => {
    const classes = useStyles();



    return (
        <div >
            <HeroLayout filter image={require("./../../assets/img/landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Your Story Starts With Us.</h1>
                            <h4>
                                Every landing page needs a small description after the big bold
                                title, that{"'"}s why we added this text here. Add here all the
                                information that can make you or your product create the first
                                impression.
                            </h4>
                            <br />
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play" />
                                Watch video
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </HeroLayout>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Advantages/>
                </div>
            </div>

        </div>



    );
};

export default FullWidthGrid;