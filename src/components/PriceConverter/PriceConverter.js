import React , {useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import useDropdown from "../CustomDropDown/useDropdown";

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";



import { currencies }from "./../../data/currencies"

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
    const classes = useStyles();
    const [currencie, CurrencieDropdown] = useDropdown("Currencies" , "USD DOLLARS", currencies);

    return(
        <GridContainer justify="center">
            <GridItem  xs={12} sm={12} md={5}>
                <TextField disabled id="standard-disabled" label={props.coin}  variant="filled" defaultValue={props.coin} />
              </GridItem>

            <GridItem  xs={12} sm={12} md={5}>
                <CurrencieDropdown/>
            </GridItem>
        </GridContainer>

    )
};

export default PriceConverter;