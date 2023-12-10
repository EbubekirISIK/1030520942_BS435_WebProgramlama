
import {Button, DropdownDivider} from "react-bootstrap";

import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return(
        <div>
            <div>
                bir oyun seç
            </div>
            <Link to={"/adamasmaca"}>oyna</Link>
            <Link to={"/oyuniki"}>oyna 2</Link>
        </div>
    );
}