import React from 'react'

const UserBoard = (props) =>{
    return(
        <div>
            <h2>User Board</h2>

            <p>Welcome {props.user.username}</p>
            <p>Create your first wallet</p>
            <p>Actual price coins</p>
        </div>
    )
};

export default UserBoard;