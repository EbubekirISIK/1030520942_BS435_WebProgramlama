
import './App.css';
import {Button, DropdownDivider} from "react-bootstrap";

import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return(

        <div className={"homeClass"}>
<div style={{textAlign:"center", width:"50%"}}>
    <h1 style={{color:"green", marginBottom:"50px"}}>
        Bir oyun seç
    </h1>
    <div className={"homeBasla"}>
        <h2 style={{color:"red"}}>Kurallar</h2>
        <div style={{margin:"0 auto", fontWeight:"600", fontSize:"18px"}}>Toplamda 6 hakkın var.<br/>6 adımda tutulan sayıyı bul.</div>
        <hr/>
        <div style={{margin: "10px auto"}} className={"oyun-sec"}>
            <Link className={"link"} to={"/adamasmaca"}>Adam Asmaca</Link>
        </div>
    </div>
    <div className={"homeBasla"}>
        <h2 style={{color:"red"}}>Kurallar</h2>
        <div style={{margin:"0 auto",fontWeight:"600", fontSize:"18px"}}>Toplamda 4 soru var ve her soru için tek cevap hakkın var.<br/>1. soru çarpma işlemi bunu çözmen için 15 saniyen var. diğer sorular da zaman yok.<br/>Sorulara doğru yanıtlar puan kazandırır. yanlış yanıtlar puan kaybettirir.<br/>Oyun kazanman için oyun sonunda puanın 10.000'in altında olmaması gerekiyor. </div>
        <hr/>
        <div style={{margin: "10px auto"}} className={"oyun-sec"}>
            <Link className={"link"} to={"/oyuniki"}>Sayı Sırlarının Peşinde</Link>
        </div>
    </div>

</div>



        </div>
    );
}