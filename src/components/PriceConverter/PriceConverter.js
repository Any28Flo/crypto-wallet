import React, {useState, useEffect, useContext} from "react";
import CryptoService from "../../services/crypto-service";
import WalletService from "../../services/wallet-services";
import UserContext from "./../../context"
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "./../CustomButtons/Button";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import {currencies} from "./../../data/currencies"
import useDropdown from "./../CustromDropdown/useDropdown"



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const PriceConverter = props =>{
    const cryptoService = new CryptoService();
    const walletService = new WalletService();
    const classes = useStyles();
    const [user, setUser] = useContext(UserContext);

    const [currency, CurrencyDropdown] = useDropdown("USD DOLLARS" , "usd-us-dollars", currencies );

    const [crytos, setCryptos] = useState([]);

    const [crypto , setCrypto] = useState({});

    const [currencieAmount , setCurrencieAmount] = useState(0);

    let [amountBuy , setAmountBuy ] = useState(0);
    let [wallets , setWallets] = useState([]);
    let [wallet , setWallet]  = useState({name:"Select you wallet", value:[]});
    let [showWallet, setShowWallet] = useState(true);
    const getCryptos  = () =>{
        cryptoService.getCryptos()
            .then(response =>{
                const cryptoNames = response.data.map( ({id, name}) => {
                    const crypto ={
                        id : id,
                        name :name
                    };
                    return crypto
                });
                setCryptos(cryptoNames.slice(0, 5));
            })


    };
    const getWallets = () => {
        walletService.getAll(user._id)
            .then(response =>{
                setWallets(response.data.wallets)
            })

    };

    useEffect( () =>{
        setCryptos([]);
        getCryptos()

    }, []);

    const priceConvertion =  () =>{

        getWallets();
        cryptoService.converter(currency, crypto, currencieAmount)
            .then(response =>{
                 setAmountBuy(response.data.price.toFixed(5));
            })
    }

    const setCoin = (e) =>{
        setCrypto(e.target.value);

    }
    return(
        <GridContainer  justify="center">
            <GridItem xs={12} sm={12} md={12}>
                <h2>You want to buy {amountBuy} {crypto.name} </h2>
            </GridItem>
                <form className={classes.root}  action="">
                    <FormControl fullWidth className={classes.margin}>

                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={currencieAmount}
                            defaultValue={0}
                            onChange={e => setCurrencieAmount(e.target.value)}

                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                        <TextField
                            variant="outlined"
                            id="crypto-dropdown"
                            select
                            style={{display:showWallet ? 'block' : 'none' }}
                            label="Select"
                            value={crypto}
                            onChange={e => setCoin(e)}
                            onBlur={ e => setCoin(e)}
                        >
                            {

                                crytos.map( ({id,name}) =>(
                                    <MenuItem
                                        key={id}
                                        value={id}
                                    >
                                        {name}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </FormControl>
                    <Button color="primary" onClick={priceConvertion}>Calculate</Button>
                        <TextField
                            variant="outlined"
                            select
                            id="wallets-dropdown"
                            label="Select"
                            value= {wallet}
                            onChange={ e => setWallet(e.target.value)}
                            >
                            {
                                wallets.map( (wallet, id) =>(

                                    <MenuItem
                                        key={id}
                                        value={wallet}
                                    >
                                        {wallet.name}
                                    </MenuItem>
                                ))
                            }
                        </TextField>

                </form>
        </GridContainer>



    )
};

export default PriceConverter;
/*

<div>
    <GridContainer justify="center">
        <GridItem  xs={12} sm={12} md={12}>
            <h2>Crypto</h2>


        </GridItem>


    </GridContainer>
    <GridContainer  justify="center">
        <GridItem  xs={12} sm={12} md={6}   >
            <h2>Currencie</h2>
            <CurrencyDropdown/>
        </GridItem>
    </GridContainer>
    <GridContainer justify="center">

    </GridContainer>
    <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>


        </GridItem>


    </GridContainer>
    <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Button color="primary" onClick={priceConvertion}>Calculate</Button>
        </GridItem>
    </GridContainer>
    <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <h2>You want to buy {amountBuy} {crypto.name}</h2>
        </GridItem>
    </GridContainer>
    <GridContainer>
        <TextField
            variant="filled"
            id="wallet-dropdown"
            select
            label="Select"
            value={crypto}
            onChange={e => setCrypto(e.target.value)}
            onBlur={ e => setCrypto(e.target.value)}
        >
            {

            }
        </TextField>
    </GridContainer>
</div>*/
