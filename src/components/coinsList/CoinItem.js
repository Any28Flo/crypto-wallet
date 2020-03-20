import React from 'react';

const CoinItem = props =>{
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.type ? 'It is a crypto' : 'It not a crypto'}</p>
        </div>
    )
};
export default CoinItem;