import React , {useContext } from 'react'
import classNames from "classnames";
import {UserContext} from "../../context/userContext";

import { makeStyles } from "@material-ui/core/styles";
import profile from "./../../assets/img/erika.jpg";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GridContainer from "../Grid/GridItem";
import GridItem from "../Grid/GridItem";
import HeroLayout from "../landingPage/HeroLayout";
import CreateWallet from "../wallet/CreateWallet";
import NavPills from "../NavPills/NavPills";
import styles from "./../../assets/jss/material-kit-react/views/profilePage";
import Wallets from "../wallet/Wallets";
const useStyles = makeStyles(styles);



export default function ProfilePage(props) {
  const classes = useStyles();
  const {userData} = useContext(UserContext);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>

        <HeroLayout small filter  image={require("./../../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer >
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>Welcome  {userData.user.username}</h2>
                    <h3>Total: : <span>$150.20</span></h3>

                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>

            </div>
            <GridContainer >
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Add Wallet",
                          tabIcon: AddBoxIcon,
                          tabContent: (
                                <CreateWallet/>
                          )


                        },
                        {
                          tabButton: "See your wallets",
                          tabIcon: VisibilityIcon ,
                          tabContent: (
                               <Wallets/>
                          )

                        },
                        {
                          tabButton: "Buy cryptos",
                          tabIcon:ShoppingCartIcon,

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
