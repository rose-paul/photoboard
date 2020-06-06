import * as React from "react";
import * as ReactDOM from "react-dom";

import { PhotoBoard } from "./components/PhotoBoard";




document.addEventListener('DOMContentLoaded', () => {
    const photoList : Array<string> = [
    "../photos/BumperCars.svg",
    "../photos/Chernobyl_Lenin.svg",
    "../photos/ChernobylRadar.svg",
    "../photos/ChildrenWard.svg",
    "../photos/Hospital_Gynecology.svg",
    "../photos/Kiryak_Hide_cropped.svg",
    "../photos/Memorial911.svg",
    "../photos/Milkovo_BusStop.svg",
    "../photos/ParentsCorner.svg",
    "../photos/Reindeer1_Tongue.svg",
    "../photos/Riverdale_Subway.svg",
    "../photos/Smoking.svg",
    "../photos/SportComplex_Court.svg",
    "../photos/SportComplex2.svg",
    "../photos/SugarLoaf_TennisCourt.svg"]
    ReactDOM.render(<PhotoBoard photoList={photoList} />,
    document.getElementById("root"))
})
