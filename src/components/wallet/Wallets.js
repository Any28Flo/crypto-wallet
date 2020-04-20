import React, {createContext, useContext, useEffect, useState} from "react";
import UserContext from "./../../context"

import WalletService from "../../services/wallet-services";
import GridItem from "../Grid/GridItem";
import WalletCard from "./../Card/WalletCard"
const Wallets = props =>{
    const [user,setUser] = useContext(UserContext);
    const [wallets , setWallets] = useState([]);
    const walletService = new WalletService();

    const getWallets = () =>{
        const createdBy = user._id;
        console.log(createdBy);
       walletService.getAll(createdBy)
            .then(response =>{
                setWallets(response.data.wallets);
            })
    };

    useEffect( ()=>{
        getWallets();
    }, []);

    return(
        <div>
            <h1>Your wallets</h1>
            {

                wallets.map((wallet,index) =>{
                    return(
                        <GridItem key={`wallet-${index}`} xs={12} sm={12} md={12}>

                            <WalletCard  walletData={wallet}/>

                        </GridItem>
                    )
                })
            }

        </div>
    )
};
export default Wallets;