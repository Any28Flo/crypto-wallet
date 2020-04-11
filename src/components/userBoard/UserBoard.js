import React , {useContext } from 'react'
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
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

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
                                            <h3 className={classes.title}>Christian Louboutin</h3>
                                            <h6>DESIGNER</h6>
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
                            <div className={classes.description}>
                                <p>
                                    An artist of considerable range, Chet Faker — the name taken by
                                    Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                                    and records all of his own music, giving it a warm, intimate
                                    feel with a solid groove structure.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroLayout>

        </div>
    )
};

export default UserBoard;

/*
<div>
    <h2>User Board</h2>

    <p>Welcome {props.user.username}</p>
    <p> </p>
    <h2>Create your first wallet</h2>
    <CreateWallet getUser={userData} />
    <Wallets getUser={userData}/>

    <p>Actual price coins</p>
</div>*/
