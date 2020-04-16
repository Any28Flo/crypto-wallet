import axios from "axios";

class CryptoService{
    constructor() {
        let cryptoService = axios.create({
            baseURL:'https://api.coinpaprika.com/v1'
        });
        this.cryptoService = cryptoService;
    }
    getCryptos= ()=>{
        return this.cryptoService.get('/coins', {

        })
    }


}
export default CryptoService;