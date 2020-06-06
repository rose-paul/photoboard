import * as React from "react";

const Modal = (props: {data: {path: string, description: string, updateModal: Function}}) => {
    return (
        <div className="modal-background" onClick={() => props.data.updateModal(null, null)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
            <img src={props.data.path} style={{ objectFit: 'contain' }} />
            <caption>
                <p>{props.data.description}</p>
            </caption>
            </div>
        </div>
    )
}

export default Modal;