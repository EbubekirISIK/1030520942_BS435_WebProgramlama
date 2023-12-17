
import './App.css';
import {Button, DropdownDivider} from "react-bootstrap";

import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return(

        <div className={"homeClass"}>

            <h1>
                bir oyun seç
            </h1>
            <div className={"oyun-sec"}>
                <Link className={"link"} to={"/adamasmaca"}>Adam Asmaca</Link>
            </div>
            <div className={"oyun-sec"}>
                <Link className={"link"} to={"/oyuniki"}>Sayı Sırlarının Peşinde </Link>
            </div>

        <div>
            <div>
                bir oyun seç
            </div>
            <Link to={"/adamasmaca"}>oyna</Link>
            <Link to={"/oyuniki"}>oyna 2</Link>

        </div>
        </div>
    );
}