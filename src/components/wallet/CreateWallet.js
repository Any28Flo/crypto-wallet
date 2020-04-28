import React, {useContext, useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from "../../context/userContext";

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import GridContainer from "../Grid/GridItem";
import GridItem from "../Grid/GridItem";
import WalletService from './../../services/wallet-services'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const CreateWallet = props => {
    const classes = useStyles();
    const { userData } = useContext(UserContext);

    const walletService = new WalletService();
    const Message = withReactContent(Swal);
    const [formState,  updateFormState] = useState({
         walletName : '',
         description : ''
     });

     const handleFormSubmit = event =>{
         event.preventDefault();
        const {walletName, description} = formState;
         const coins = [];
         walletService.create(walletName ,description,coins,userData.user.id )
             .then(response =>{
                 if(response.status === 200){
                     Message.fire({
                         icon: 'success',
                         title :'Yay!',
                         text : 'You did it'

                     });
                    updateFormState({walletName: "", description: ""})
                 }
             })
             .catch(e =>{
                 updateFormState({walletName: "", description: ""})
                 Message.fire({
                     icon: 'error',
                     title :'Oops...',
                     text : 'Warning creating you new wallet, please try again'
                 })
             })
     };

    const handleChange = (event) => {

        const {name, value} = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}));
    };
 return(
     <GridContainer >
             <form onSubmit={handleFormSubmit}>
                 <GridItem xs={12} sm={12} md={12}>
                     <TextField name="walletName" value={formState.walletName} label="Name of your wallet" variant="outlined"  onChange={e => handleChange(e)}/>

                 </GridItem>
                 <GridItem xs={12} sm={12} md={12}>
                     <TextField name="description" value={formState.description} label = "Description"  variant="outlined" onChange={ e=> handleChange(e)}/>
                 </GridItem>
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
     </GridContainer>
 )
};

export default CreateWallet;