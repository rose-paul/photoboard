import * as React from "react";
import PhotoCard from "./PhotoCard";
import Modal from "./Modal";
// var boardStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     height: "inherit",
//     width: 90 + "%",
//     border: "1px solid red",
//     backgroundColor: "purple"
// }

interface PhotoObject {
    path: string,
    description: string
}

export const PhotoBoard = (props: { photoList: Array<PhotoObject> }) => {

    const [modal, showModal] = React.useState(null);    

    function updateModal(path: string | null, description: string | null) {
        if (!path && !description) {
            showModal(null);
            return;
        }
        const data = {
            path,
            description,
            updateModal
        }
        showModal(<Modal data={data} />)
    }

 return (
     <div className="wrapper">
         {modal}
        <div className="board">
         {
             props.photoList.map( image => {
                const metadata = {path: image, description: "none", showModal: updateModal}
                return <PhotoCard metadata={metadata} />
             })
         }
        </div>
     </div>
 )
};

export default PhotoBoard;