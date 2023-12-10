import React, {useState} from 'react';
import {Alert, Button, Col, Container, Row} from "react-bootstrap";

const isAsal = (sayi) => {
    if (sayi < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(sayi); i++) {
        if (sayi % i === 0) {
            return false;
        }
    }
    return true;
};
const SoruComponent = ({alan, soru, onChange, value, cevap, onClick, basamakSayisiniGor, rakamToplaminiGor, asalSayiOgren,ipucuB, ipucuR, ipucuA, dogruMu }) => {

    const valueStr = cevap.toString();
    const basamakSayisi = valueStr.length;
    const rakamlarToplami = valueStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const sonBasamak = parseInt(valueStr.charAt(valueStr.length - 1), 10);
    const asalSayi = isAsal(sonBasamak);
    return (
        <div>
            <h2 style={{textAlign:"start"}}>{alan}</h2>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{textAlign:"center"}}>{soru}</h2>
                        <div className={"jokerler"}>
                            <Button onClick={basamakSayisiniGor} >basam sayısını öğren</Button>

                            <Button onClick={rakamToplaminiGor}>sayının rakamları toplamını ögren</Button>

                            <Button onClick={asalSayiOgren}>asal sayı ögren</Button>

                        </div>



                        <input type="number" onChange={onChange} value={value} />
                        <Button variant={"success"} onClick={onClick}  disabled={dogruMu}>
                            Tahmin Et
                        </Button>
                        {dogruMu ? (<p>Tebrikler, doğru tahmin! Yeni bir soruyla devam edin.</p>) : (<p>merhaba</p>)}
                    </Col>
                    <Col>
                        <div  style={{margin:"auto",fontSize:"20px", fontWeight:600, color:"blue", backgroundColor:"#FF6969", width:"75%", borderRadius:"20px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;"}}>
                            <div style={{color:"#FDE5D4", backgroundColor: "#001524",textAlign:"center", fontSize:"30px", marginBottom:"20px"}}>İpucular</div>
                            {ipucuB ? (<div style={{padding: "5px 25px"}}><Alert  key={"light"} variant={"light"}>
                                Sayının basamak sayısı:{basamakSayisi}
                            </Alert></div>) : (<span></span>)}

                            {ipucuR ? (<div style={{padding: "5px 25px"}}><Alert  key={"light"} variant={"light"}>
                                Sayının basamak sayısı:{rakamlarToplami}
                            </Alert></div>) : (<span></span>)}


                            {ipucuA ? (asalSayi ?

                                (<div style={{padding: "5px 25px"}}><Alert  key={"light"} variant={"light"}>
                                    Sayının son basamağı asal sayıdır
                                </Alert></div>): (<div style={{padding: "5px 25px"}}><Alert  key={"light"} variant={"light"}>
                                    Sayının son basamağı asal sayı değildir
                                </Alert></div>)) : (<span></span>)}
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default SoruComponent;