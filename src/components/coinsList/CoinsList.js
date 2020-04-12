import React, {useState, useEffect} from 'react'
import CoinItem from "./CoinItem";
import LazyLoad from 'react-lazyload'
import classNames from "classnames";
import styles from "./../../assets/jss/material-kit-react/views/landingPage";

import {makeStyles} from "@material-ui/core/styles";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import InfoArea from "../InfoArea/InfoArea";


const Loading = () =>(
    <div className=" coin loading">
        <h5>Loading</h5>
    </div>
);
const useStyles = makeStyles(styles);

const CoinsList = () => {
    const classes = useStyles();
    const [coins, setCoins] = useState([]);
    const [images, setImages] = useState([]);
    const fetchImages = async () =>{
        const res = await fetch('https://rest.coinapi.io/v1/assets/icons/{iconSize}?apikey=EC3F035E-E798-43A4-AA97-06F6E56661E0')
        const data = await  res.json();
        setImages(data);
    };
    useEffect( () =>{
        fetchImages()
    }, []);

    const url=`https://api.coinpaprika.com/v1/coins`;

    const fetchCoins = async () =>{
        const res = await fetch(url);
          await fetchImages();
        const data = await res.json();
        setCoins(data);

    };
    useEffect(  () =>{
        fetchCoins();

    }, []);


    const searchImage = imageSearch =>{
       return  images.filter(image =>{
            return image.asset_id === imageSearch
        })
    };

    const assignImage = ()=>{
        let cryptos =coins.map((coin, index) =>{
            let coinImage = searchImage(coin.symbol);

            if(coinImage[0] === undefined){
                return coin.image = undefined;

            }else{
               return coin.image=coinImage[0].url;
           }

        });
    };

assignImage();
    return(
        <div>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <h1 className={classes.paddingTitle} >Available crypto currencies </h1>
                    <div className={classes.section}>
                        <GridContainer justify="center">
                            {
                                coins.map( (coin, index ) =>{

                                    return(
                                        <GridItem key={coin.id} xs={12} sm={6} md={4}>
                                            <LazyLoad key ={coin.id} placeholder={<Loading/>}>
                                                <CoinItem
                                                    id={coin.id}
                                                    name={coin.name}
                                                    symbol={coin.symbol}
                                                    type ={coin.type}
                                                    image = {coin.image}
                                                    vertical

                                                />
                                            </LazyLoad>
                                        </GridItem>
                                    )

                                })
                            }
                        </GridContainer>
                    </div>

                </div>
            </div>



        </div>
    )
};

export default CoinsList;