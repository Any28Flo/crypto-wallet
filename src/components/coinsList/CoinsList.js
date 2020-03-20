import React, {useState, useEffect} from 'react'
import CoinItem from "./CoinItem";
require('dotenv').config();
const CoinsList = () => {
    const [coins, setCoins] = useState([]);

    const url=`https://api.coinpaprika.com/v1/coins`;

    const fetchCoins = async () =>{
        const res = await fetch(url);

        const data = await res.json();
        setCoins(data);
    };
    useEffect(  () =>{
              fetchCoins()

    });
    const size= 10;
    
    return(
        <div>
            <h1>Available cryptocurrencies </h1>
            {
                coins.slice(0,size).map( (coin, index ) =>{

                            return(

                                <CoinItem
                                    key ={coin.id}
                                    id={coin.id}
                                    name={coin.name}
                                    symbol={coin.symbol}
                                    type ={coin.type}
                                />

                            )




                })
            }
        </div>
    )
};
export default CoinsList;