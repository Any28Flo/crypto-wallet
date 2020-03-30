import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Message = props =>{
    const Alert = withReactContent(Swal);
    Alert.fire({
        icon: props.type,
        title: props.title,
        text : props.text
    })
};

export default Message;