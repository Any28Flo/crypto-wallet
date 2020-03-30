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
            <h2>Create your first wallet</h2>
            <CreateWallet getUser={userData} />


            <p>Actual price coins</p>
        </div>
    )
};

export default UserBoard;