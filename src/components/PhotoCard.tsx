import * as React from "react";

interface metadata {path: string, description: string}

var photoStyle = {
    maxWidth: 500 + "px",
    objectFit: "fill",
}

const PhotoCard = (props: {metadata: {path: string, description: string}} ) => {

    const [faceUp, flip] = React.useState(true);
    console.log(props.metadata)
    return (
        <>
            {!faceUp && <><div>{props.metadata.description}</div></>}
            <img 
            src={props.metadata.path} 
            alt={props.metadata.description} 
            style={ photoStyle }
            />
        </>
    )
}

export default PhotoCard;