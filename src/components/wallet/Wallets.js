import React, { useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/userContext";
import WalletService from "../../services/wallet-services";
import GridItem from "../Grid/GridItem";
import WalletCard from "./../Card/WalletCard"
import Axios from "axios";
const Wallets = () =>{

    const {userData} = useContext(UserContext);
    const [wallets , setWallets] = useState([]);
    const walletService = new WalletService();


    useEffect( ()=>{
        const getWallets = async ()=>{
            const accessToken =  localStorage.getItem("auth-token");
            const wallet = await  Axios.get(`${process.env.REACT_APP_API_URL}/wallets?createdBy=${userData.user.id}`,{    headers: {
                    "x-access-token":  `${accessToken}`
                },});
            setWallets(wallet.data.wallets);
        }
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