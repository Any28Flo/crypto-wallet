import React , {useContext , useState } from 'react'
import classNames from "classnames";
import{ userContext} from './../../App';
import CreateWallet from './../wallet/CreateWallet'
import { makeStyles } from "@material-ui/core/styles";

import profile from "./../../assets/img/kendall.jpg";

import GridContainer from '@material-ui/core/Grid';
import GridItem from "../Grid/GridItem";
import Button from "./../CustomButtons/Button";
import HeroLayout from "../landingPage/HeroLayout";

import styles from "./../../assets/jss/material-kit-react/views/profilePage";
const useStyles = makeStyles(styles);


const UserBoard = (props) =>{
    const [wallets , setWallets] = useState([]);

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const userData = useContext(userContext);

    console.log(userData);
    return(
        <div>
            <HeroLayout small filter image={require("./../../assets/img/profile-bg.jpg")} >
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer  container spacing={3} justify="center">
                                <GridItem xs={12} sm={12} md={12}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={profile} alt="..." className={imageClasses} />
                                        </div>
                                        <div className={classes.name}>

                                            <Button justIcon link className={classes.margin5}>
                                                <i className={"fab fa-twitter"} />
                                            </Button>
                                            <Button justIcon link className={classes.margin5}>
                                                <i className={"fab fa-instagram"} />
                                            </Button>
                                            <Button justIcon link className={classes.margin5}>
                                                <i className={"fab fa-facebook"} />
                                            </Button>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                        </div>
                    </div>
                </div>
            </HeroLayout>

        </div>
    )
};

export default UserBoard;
