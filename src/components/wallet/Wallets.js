import React, { useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/userContext";
import WalletService from "../../services/wallet-services";
import GridItem from "../Grid/GridItem";
import WalletCard from "./../Card/WalletCard"
const Wallets = () =>{

    const {userData} = useContext(UserContext);
    const [wallets , setWallets] = useState([]);
    const walletService = new WalletService();


    useEffect( ()=>{
        walletService.getAll(userData.user.id)
            .then(response =>{
                console.log(response.data.wallets);
                setWallets(response.data.wallets);
            })
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