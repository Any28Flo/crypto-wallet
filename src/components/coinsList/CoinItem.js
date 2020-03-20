import React from 'react';
import {Link} from 'react-router-dom'
const CoinItem = props =>{
    return(
        <div>
            <h2>{props.name}</h2>
            <p>Symbol : {props.symbol}</p>
            <p> Type: {props.type }</p>
            <Link to={`/${props.id}`}>
                <button>See details</button>
            </Link>

        </div>
    )
};
export default CoinItem;