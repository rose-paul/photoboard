import * as React from "react";

interface metadata {path: string, description: string}

// var photoStyle = {
//     maxWidth: 500 + "px",
//     objectFit: "fill",
// }

const PhotoCard = (props: {metadata: {path: string, description: string, showModal: Function }} ) => {

    return (
        <>
            <img 
            src={props.metadata.path} 
            alt={props.metadata.description} 
            className="photo"
            onClick={() => props.metadata.showModal(props.metadata.path, props.metadata.description)}
            />
        </> 
    )
    
}

export default PhotoCard;