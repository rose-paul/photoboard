import * as React from "react";
import * as ReactDOM from "react-dom";

import { PhotoBoard } from "./components/PhotoBoard";

interface PhotoObject {
    path: string,
    description: string
}


document.addEventListener('DOMContentLoaded', () => {
    const photoList : Array<PhotoObject> = [
    { path: "../photos/BumperCars.svg", description: "Bumper Cars in Pripyat. Chernobyl Exclusion Zone." },
    { path: "../photos/Chernobyl_Lenin.svg", description: "Lenin in the village Chernobyl. Chernobyl Exclusion Zone." },
    { path: "../photos/ChernobylRadar.svg", description: "'Woodpecker Rader', in Chernobyl Exclusion Zone." },
    { path: "../photos/ChildrenWard.svg", description: "none" },
    { path: "../photos/Hospital_Gynecology.svg", description: "none" },
    { path: "../photos/Kiryak_Hide_cropped.svg", description: "none" },
    { path: "../photos/Memorial911.svg", description: "none" },
    { path: "../photos/Milkovo_BusStop.svg", description: "none" },
    { path: "../photos/ParentsCorner.svg", description: "none" },
    { path: "../photos/Reindeer1_Tongue.svg", description: "none" },
    { path: "../photos/Riverdale_Subway.svg", description: "none" },
    { path: "../photos/Smoking.svg", description: "none" },
    { path: "../photos/SportComplex_Court.svg", description: "none" },
    { path: "../photos/SportComplex2.svg", description: "none" },
    { path: "../photos/SugarLoaf_TennisCourt.svg", description: "none" },
    { path: "../photos/BrooklynBrown.jpg", description: "none"}
]
    ReactDOM.render(<PhotoBoard photoList={photoList} />,
    document.getElementById("root"))
})
