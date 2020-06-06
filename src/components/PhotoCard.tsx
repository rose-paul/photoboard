import * as React from "react";

interface metadata {path: string, description: string}

// var photoStyle = {
//     maxWidth: 500 + "px",
//     objectFit: "fill",
// }

const PhotoCard = (props: {metadata: {path: string, description: string}} ) => {

    const [modal, flip] = React.useState(false);

    return (
        <>
            <img 
            src={props.metadata.path} 
            alt={props.metadata.description} 
            className="photo"
            />
        </> 
    )
    
}

export default PhotoCard;