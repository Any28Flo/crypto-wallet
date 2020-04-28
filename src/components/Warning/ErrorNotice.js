import React from "react"

const ErrorNotice = (props) =>{
    return(
        <div className="errorNotice">
            <span>{props.error}</span>
            <button onClick={props.clearError}>X</button>
        </div>
    )
};

export default ErrorNotice;