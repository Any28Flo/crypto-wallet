import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "./../../assets/jss/material-kit-react/components/infoStyle";

const useStyles = makeStyles(styles);

const CoinItem = props =>{
    const classes = useStyles();
    const {name, symbol,type, image, vertical}= props;
    const iconWrapper = classNames({
        [classes.iconWrapper]: true,

        [classes.iconWrapperVertical]: vertical
    });

    const renderImage = (img)=>{
        if(typeof(img) === 'undefined'){
            return  <img src='./images/wallet_1.svg' alt="" width="60em"/>
        }else{
            return  <img src={img} alt="" width="60em"/>
        }
    };

    return(
        <div className={classes.infoArea}>
            <div className={iconWrapper}>
               {
                   renderImage(image)
               }
            </div>
            <div className={classes.descriptionWrapper}>
                <h3 className={props.title}>{name}</h3>
                <p className={classes.description}>Type: {type}</p>
                <p className={classes.description}>Symbol: {symbol}</p>
                <Link to={`/${props.id}`} >
                    <Button  size="small"  variant="outlined">See details</Button>
                </Link>
            </div>
        </div>

    )
};
CoinItem.defaultProps = {
    iconColor: "gray"
};

CoinItem.propTypes = {
    img: PropTypes.string,
    type: PropTypes.string.isRequired,
    vertical: PropTypes.bool
};

export default CoinItem;