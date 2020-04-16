import React, {useState , useEffect} from "react";
import CryptoService from "../../services/crypto-service";

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

    return(
        <GridContainer justify="center">
            <GridItem  xs={12} sm={12} md={6}>
                <h2>Crypto</h2>
                <TextField
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
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }
                </TextField>

              </GridItem>

            <GridItem  xs={12} sm={12} md={6}>
                <h2>Currencie</h2>
               <CurrencyDropdown/>
            </GridItem>
        </GridContainer>

    )
};

export default PriceConverter;