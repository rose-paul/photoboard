import * as React from "react";
import * as ReactDOM from "react-dom";

import { PhotoBoard } from "./components/PhotoBoard";

ReactDOM.render(
    <PhotoBoard compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
