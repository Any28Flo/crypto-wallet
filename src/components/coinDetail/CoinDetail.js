import React, {useState, useEffect} from 'react'

const CoinDetail  = props =>{
    const [coinDetail, setCoinDetail] = useState([]);

    const url ='https://api.coinpaprika.com/v1/coins/';

    const fetchCoinDetails = async () =>{
        const res = await fetch(`${url}${props.match.params.id}`);

        const coinDetails = await res.json();

        setCoinDetail(coinDetails);
    };
    useEffect(()=> {
        fetchCoinDetails()
    });

    return(
        <div>
            <h1>Coin Detail</h1>
            <h2>Name : {coinDetail.name}</h2>
            <p>Rank : {coinDetail.rank}</p>
            <p>Symbol : {coinDetail.symbol}</p>
            <p>{coinDetail.description}</p>
            <p>Is open source: {coinDetail.ope_source ? 'Yes' : 'No'}</p>



        </div>
    )
};
export default CoinDetail;