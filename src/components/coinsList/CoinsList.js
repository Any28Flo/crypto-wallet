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
        fetchCoins()

    }, []);


    const searchImage = imageSearch =>{
       return  images.filter(image =>{
            return image.asset_id === imageSearch
        })
    };

    return(
        <div>

            <h1>Available cryptocurrencies </h1>
            {
                coins.map( (coin, index ) =>{
                    let image = (coin.image[0].url === undefined)? 'noImage' : searchImage(coin.symbol);

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