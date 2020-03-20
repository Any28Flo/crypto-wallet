import React, {useState, useEffect} from 'react'
import CoinItem from "./CoinItem";
require('dotenv').config();
const CoinsList = () => {
    const [coins, setCoins] = useState([]);

    const url=process.env.API_URL;

    const fetchCoins = async () =>{
        const res = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json",
                'x-coinapi-key': process.env.API_SECRET
            }

        });

        const data = await res.json();
        console.log(data);
        setCoins(data);
    };
    useEffect(  () =>{
          fetchCoins();

    });

    return(
        <div>
            <h1>Available cryptocurrencies </h1>
            {
                coins.map( (coin, index ) =>{

                            return(

                                <CoinItem
                                    key ={`crypto-${index}`}
                                    name={coin.name}
                                    type={coin.type_is_crypto}

                                />

                            )

                })
            }
        </div>
    )
};
export default CoinsList;