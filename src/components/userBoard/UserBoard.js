import React from 'react'

const UserBoard = (props) =>{
    return(
        <div>
            <h2>User Board</h2>

            <p>Welcome {props.user.username}</p>

        </div>
    )
};

export default UserBoard;