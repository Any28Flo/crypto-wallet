import React, {useState , useEffect} from "react";
import CryptoService from "../../services/crypto-service";

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
    const classes = useStyles();

    const [currency, CurrencyDropdown] = useDropdown("USD DOLLARS" , "usd-us-dollars", currencies );

    const [crytos, setCryptos] = useState([]);

    const [crypto , setCrypto] = useState({});

    const [currencieAmount , setCurrencieAmount] = useState(0);

    let [amountBuy , setAmountBuy ] = useState(0);

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

    useEffect( () =>{
        setCryptos([]);
        getCryptos()

    }, []);

    const priceConvertion = () =>{
        cryptoService.converter(currency, crypto, currencieAmount)
            .then(response =>{
                amountBuy = setAmountBuy(response.data.price.toFixed(5));
            })
    }
    const handleChange= (e)=>{
        setCurrencieAmount( e.target.value );

    };
    return(
        <div>
            <GridContainer justify="center">
                <GridItem  xs={12} sm={12} md={12}>
                    <h2>Crypto</h2>
                    <TextField
                        variant="filled"
                        id="crypto-dropdown"
                        select
                        label="Select"
                        value={crypto}
                        onChange={e => setCrypto(e.target.value)}
                        onBlur={ e => setCrypto(e.target.value)}
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
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={currencieAmount}
                            onChange={e => handleChange(e)}
                            defaultValue={0}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>

                </GridItem>


            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Button color="primary" onClick={priceConvertion}>Calculate</Button>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <h2>{amountBuy}</h2>
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default PriceConverter;