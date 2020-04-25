import axios from 'axios';

const accessToken =  localStorage.getItem("token");

class WalletService{
    constructor() {
        let walletService = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            headers: {'x-access-token': `${accessToken}`}

        });
        this.walletService = walletService;

    }
    create = (walletName ,description,coins, createdBy) =>{
        return this.walletService.post('/wallets', {
            walletName, description, coins , createdBy
        })
    };

    getAll = ( createdBy)=>{
        return this.walletService.get('/wallets?createdBy='+createdBy);
    };

    buy = (idCrypto, amount, walletId) =>{
        return this.walletService.post('/crypto', {
            idCrypto,amount,walletId
        })

    }

}

export default WalletService;
