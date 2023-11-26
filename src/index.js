import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";
import App from "./App";
import {Adamasmaca} from "./adamasmaca";
import {Oyuniki} from "./oyuniki";

const Appp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="adamasmaca" element={<Adamasmaca/>} />
                <Route path="oyuniki" element={<Oyuniki/>} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <Appp />
    //</React.StrictMode>
);



