import React, {useEffect, useState} from "react";
import WalletService from "../../services/wallet-services";
const Wallets = props =>{
    const [wallets , setWallets] = useState([]);
    const walletService = new WalletService();

    const getWallets = () =>{
        const userId = props.getUser.user._id;
        console.log(userId);
        walletService.getAll(userId)
            .then(response =>{
                console.log(response);
            })
    };

    useEffect( ()=>{
        getWallets();
    }, []);

    return(
        <div>
            <h1>Your wallets</h1>
            {
                wallets.map(wallet =>{
                    return(
                        <h3>{wallet.name}</h3>
                    )
                })
            }

        </div>
    )
};
export default Wallets;