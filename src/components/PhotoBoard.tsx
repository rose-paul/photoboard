import * as React from "react";
import PhotoCard from "./PhotoCard";

// var boardStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     height: "inherit",
//     width: 90 + "%",
//     border: "1px solid red",
//     backgroundColor: "purple"
// }

export const PhotoBoard = (props: { photoList: Array<string> }) => {

 return (
     <div className="wrapper">
        <div className="board">
         {
             props.photoList.map( image => {
                const metadata = {path: image, description: "none"}
                return <PhotoCard metadata={metadata} />
             })
         }
        </div>
     </div>
 )
};

export default PhotoBoard;