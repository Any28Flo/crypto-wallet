import {createContext} from "react"

const userContext = createContext([{username:null, image:null, email:null} , ()=>{}] );

export default userContext;
