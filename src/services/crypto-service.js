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
    };

    converter = (baseCurrencie, cryptoBase, amount) =>{
        let url = `/price-converter?base_currency_id=${baseCurrencie}&quote_currency_id=${cryptoBase}&amount=${amount}`;
        return this.cryptoService.get(url)
    };




}
export default CryptoService;