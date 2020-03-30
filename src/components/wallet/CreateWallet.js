import React , {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import WalletService from './../../services/wallet-services'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const CreateWallet = props => {
    const classes = useStyles();
    const walletService = new WalletService();

    const [formState,  updateFormState] = useState({
         walletName : '',
         description : ''
     });

     const handleFormSubmit = event =>{
         event.preventDefault();


         const nameWallet = formState.walletName;
         const description = formState.description;
         const coins = [];

         const createdBy = props.getUser.user._id;
         walletService.create(nameWallet ,description,coins ,createdBy)
             .then(response =>{
                 console.log(response);
             })
             .catch(e =>console.log(e))



     };

    const handleChange = (event) => {

        const {name, value} = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}));
    };
 return(
     <form onSubmit={handleFormSubmit}>
         <TextField name="walletName" value={formState.walletName} label="Name of your wallet" variant="outlined"  onChange={e => handleChange(e)}/>
         <TextField name="description" value={formState.description} label = "Description"  variant="outlined" onChange={ e=> handleChange(e)}/>
         <Button
             variant="contained"
             color="primary"
             size="large"
             className={classes.button}
             startIcon={<SaveIcon />}
             type ="submit"
         >
             Save
         </Button>
     </form>
 )
};

export default CreateWallet;