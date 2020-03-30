import axios from 'axios';

const accessToken =  localStorage.getItem("token");

class WalletService{
    constructor() {
        let walletService = axios.create({
            baseURL: 'http://localhost:5000/api',

            headers: {'x-access-token': `${accessToken}`}

        });
        this.walletService = walletService;

    }
    create = (walletName ,description,coins, createdBy) =>{

        return this.walletService.post('/wallets', {
            walletName, description, coins , createdBy
        })

    }

}

export default WalletService;
