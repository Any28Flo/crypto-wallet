import React, {useState, useEffect, useContext} from "react";
import CryptoService from "../../services/crypto-service";
import WalletService from "../../services/wallet-services";
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from "../../context/userContext";
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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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
    const {userData} = useContext(UserContext);

    const [currency, CurrencyDropdown] = useDropdown("USD DOLLARS" , "usd-us-dollars", currencies );

    const [crytos, setCryptos] = useState([]);

    const [crypto , setCrypto] = useState('');

    const [currencieAmount , setCurrencieAmount] = useState(0);
    const[price , setPrice] = useState(0);
    const[name, setName] = useState('');
    let [amountBuy , setAmountBuy ] = useState(0);
    let [wallets , setWallets] = useState([]);
    let [wallet , setWallet]  = useState('');

    const Message = withReactContent(Swal);

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
        walletService.getAll(userData.user.id)
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
                setName(response.data.quote_currency_name);
                setPrice(response.data.price);
                 setAmountBuy(response.data.price.toFixed(5));
            })


    };
    const updateFormState = () =>{
        setCrypto('');
        setCurrencieAmount(0);
        setWallet('');

    };


    const setCoin = (e) =>{
        setCrypto(e.target.value);

    };
    const handleChangeDropdown = e =>{
        setWallet(e.target.value);

    };
   const buyCrypto =  (e) =>{

      walletService.buy(crypto,amountBuy,wallet )
          .then(response => {
              if(response.status === 200){
                  Message.fire({
                      icon: 'success',
                      title : 'Yay!',
                      text : "You did it "
                  });
                  updateFormState();
              }
          })

    };
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
                            onChange={e => setCurrencieAmount(e.target.value)}

                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                        <TextField
                            variant="outlined"
                            id="crypto-dropdown"
                            select
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
                    <GridContainer  justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                            <Button color="primary" onClick={priceConvertion}>Calculate</Button>

                        </GridItem>


                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                variant="outlined"
                                id="crypto-dropdown"
                                select
                                label="Select"
                                value={wallet}
                                onChange={e => handleChangeDropdown(e)}
                                onBlur={ e =>  handleChangeDropdown(e)}
                            >
                                {
                                    wallets.map(walletString =>{
                                        return(
                                            <option key={walletString._id} value={walletString._id}>
                                                {walletString.name}
                                            </option>
                                        )
                                    })
                                }
                            </TextField>
                        </GridItem>


                    </GridContainer>
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <Button color="primary" onClick={buyCrypto}>Buy</Button>

                      </GridItem>
                  </GridContainer>


                </form>
        </GridContainer>



    )
};

export default PriceConverter;
