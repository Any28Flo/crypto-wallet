import React, {useState, useEffect} from 'react'

const CoinDetail  = props =>{
    const [coinDetail, setCoinDetail] = useState([]);

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
        let coinSearch = coinDetail.symbol
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
    return(
        <div>

            <h1>Coin Detail</h1>
            <img src={coinDetail.image} alt=""/>
            <h2>Name : {coinDetail.name}</h2>
            <p>Rank : {coinDetail.rank}</p>
            <p>Symbol : {coinDetail.symbol}</p>
            <p>{coinDetail.description}</p>
            <p>Is open source: {coinDetail.ope_source ? 'Yes' : 'No'}</p>

        </div>
    )
};
export default CoinDetail;