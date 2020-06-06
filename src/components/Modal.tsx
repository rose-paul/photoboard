import * as React from "react";

const Modal = (props: {data: {path: string, description: string}}) => {
    console.log(props)
    return (
        <div className="modal">
            <img src={props.data.path} alt=""/>
        </div>
    )
}

export default Modal;