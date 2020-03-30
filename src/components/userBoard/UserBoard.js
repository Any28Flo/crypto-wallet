import React , {useContext } from 'react'
import{ userContext} from './../../App';
import CreateWallet from './../wallet/CreateWallet'
const UserBoard = (props) =>{
    const userData = useContext(userContext);

    console.log(userData);
    return(
        <div>
            <h2>User Board</h2>

            <p>Welcome {props.user.username}</p>
            <p>Total: : <span>$150.20</span> </p>
            <p>Create your first wallet</p>
            <CreateWallet getUser={userData} />

            <p>Actual price coins</p>
        </div>
    )
};

export default UserBoard;