import React from 'react';
import '../Backdrop/Backdrop.css';
const backdrop = (props) => {
    return(
        <div onClick ={props.clicked} className = "Backdrop"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        ></div>
    )
}

export default backdrop;