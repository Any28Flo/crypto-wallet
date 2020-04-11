import React, {useEffect, useState} from "react";
import WalletService from "../../services/wallet-services";
import GridItem from "../Grid/GridItem";
import WalletCard from "./../Card/WalletCard"
const Wallets = props =>{
    const [wallets , setWallets] = useState([]);
    const walletService = new WalletService();

    const getWallets = () =>{
        const createdBy = props.getUser.user._id;
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
                        <GridItem key={`wallet-${index}`} xs={12} sm={12} md={4}>

                            <WalletCard  title={wallet.name} description={wallet.description}/>

                        </GridItem>
                    )
                })
            }

        </div>
    )
};
export default Wallets;