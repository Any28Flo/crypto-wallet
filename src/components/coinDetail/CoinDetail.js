import React, {useState, useEffect} from 'react'
// nodejs library to set properties for components

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "./../../assets/jss/material-kit-react/components/infoStyle";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
const useStyles = makeStyles(styles);

const CoinDetail  = props =>{
    const classes = useStyles();

    const [coinDetail, setCoinDetail] = useState([]);
    const iconWrapper = classNames({
        [classes.iconWrapper]: true,

        [classes.iconWrapperVertical]: true
    });

    const url ='https://api.coinpaprika.com/v1/coins/';

    const fetchCoinDetails = async () =>{
        const res = await fetch(`${url}${props.match.params.id}`);

        const coinDetails = await res.json();

        setCoinDetail(coinDetails);
    };
    const [images, setImages] = useState([]);
    const fetchImages = async () =>{
        const res = await fetch('https://rest.coinapi.io/v1/assets/icons/{iconSize}?apikey=EC3F035E-E798-43A4-AA97-06F6E56661E0')
        const data = await  res.json();
        setImages(data);
    };
    useEffect( () =>{
        fetchImages()
    }, []);

    useEffect(()=> {
        fetchCoinDetails()
    }, []);

    const searchImage = () =>{
        let coinSearch = coinDetail.symbol;
        let imageCoin = images.filter(image =>{
            return image.asset_id === coinSearch
        });
        if(imageCoin[0] === undefined){
            return coinDetail.image = 'no-image'
        }else{
            return coinDetail.image = imageCoin[0].url;
        }

    };
    searchImage();
    const dateCrypto = new Date(coinDetail.started_at);
    const date = dateCrypto.getDate();
    const month = dateCrypto.getMonth();
    const year = dateCrypto.getFullYear();


    return(

        <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer justify="center">
                <div className={iconWrapper}>
                    <img src={coinDetail.image} alt="" width="80em"/>

                </div>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem  xs={12} sm={12} md={8}>
                    <div className={classes.infoCoin}>

                        <div className={classes.descriptionWrapper}>
                            <h2 className={props.title}>{coinDetail.name}</h2>
                            <p className={classes.description}>Rank : {coinDetail.rank}</p>
                            <p className={classes.description}>Symbol : {coinDetail.symbol}</p>
                            <p className={classes.description}>{coinDetail.description}</p>
                            <p className={classes.description}>Is open source: {coinDetail.ope_source ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </GridItem>
                <GridItem  xs={12} sm={6} md={4}>
                    <div className={classes.infoCoin}>
                        <p className={classes.description}> <strong>Started: </strong> {`${date} - ${month} - ${year}`}</p>
                        <p className={classes.description}> <strong>Org structure: </strong> {coinDetail.org_structure}</p>
                        <p className={classes.description}> <strong>Algorithm: </strong> {coinDetail.hash_algorithm}</p>
                    </div>
                </GridItem>


            </GridContainer>

            <br/>
        </div>
    )
};

export default CoinDetail;