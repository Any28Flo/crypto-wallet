import React , {useContext } from 'react'
import classNames from "classnames";
import{ userContext} from './../../App';

import { makeStyles } from "@material-ui/core/styles";

import profile from "./../../assets/img/kendall.jpg";
import work1 from "./../../assets/img/coins.svg";
import VisibilityIcon from '@material-ui/icons/Visibility';

import Favorite from "@material-ui/icons/Favorite";
import AddBoxIcon from '@material-ui/icons/AddBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GridContainer from "../Grid/GridItem";
import GridItem from "../Grid/GridItem";
import Button from "./../CustomButtons/Button";
import HeroLayout from "../landingPage/HeroLayout";
import Wallets from "./../wallet/Wallets";
import CreateWallet from './../wallet/CreateWallet'
import NavPills from "../NavPills/NavPills";
import PriceConverter from "../PriceConverter/PriceConverter";
import styles from "./../../assets/jss/material-kit-react/views/profilePage";
const useStyles = makeStyles(styles);



export default function ProfilePage(props) {
  const classes = useStyles();
  const userData = useContext(userContext);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>

      <HeroLayout small filter  image={require("./../../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}> {props.user.username}</h2>
                    <h3>Total: : <span>$150.20</span></h3>
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

            </div>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Add Wallet",
                          tabIcon: AddBoxIcon,
                          tabContent: (
                              <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={12}>
                                    <CreateWallet getUser={userData} />
                                </GridItem>

                              </GridContainer>
                          )
                        },
                        {
                          tabButton: "See your wallets",
                          tabIcon: VisibilityIcon ,
                          tabContent: (
                              <GridContainer justify="center">

                                    <Wallets getUser={userData}/>


                              </GridContainer>
                          )
                        },
                        {
                          tabButton: "Buy cryptos",
                          tabIcon:ShoppingCartIcon,
                          tabContent: (

                                    <PriceConverter/>

                          )
                        }
                      ]}
                  />
                </GridItem>
            </GridContainer>

          </div>
        </div>
      </div>

    </div>
  );
}
