import * as React from "react";
import PhotoCard from "./PhotoCard";
export const PhotoBoard = (props: { photoList: Array<string> }) => {

 return (
     props.photoList.map( image => {
        const metadata = {path: image, description: "none"}
        return <PhotoCard metadata={metadata} />
     })
 )
};

export default PhotoBoard;