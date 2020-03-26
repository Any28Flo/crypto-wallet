import React, {useState, useEffect} from 'react'
import CoinItem from "./CoinItem";
import LazyLoad from 'react-lazyload'
const Loading = () =>(
    <div className=" coin loading">
        <h5>Loading</h5>
    </div>
);
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

    }, []);


    return(
        <div>
            <h1>Available cryptocurrencies </h1>
            {
                coins.map( (coin, index ) =>{

                    return(
                        <LazyLoad key ={coin.id} placeholder={<Loading/>}>
                            <CoinItem
                                key ={coin.id}
                                id={coin.id}
                                name={coin.name}
                                symbol={coin.symbol}
                                type ={coin.type}
                            />
                        </LazyLoad>
                )

                })
            }

        </div>
    )
};
export default CoinsList;