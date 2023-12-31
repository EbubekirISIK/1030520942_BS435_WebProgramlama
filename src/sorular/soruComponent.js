import React, {useState} from 'react';
import {Alert, Button, Col, Container, Modal, Row} from "react-bootstrap";

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
};const SoruComponent = ({alan, soru, onChange, value, cevap, onClick, basamakSayisiniGor, rakamToplaminiGor,sure, asalSayiOgren,ipucuB, ipucuR, ipucuA, dogruMu, show, handleClose, score}) => {
    console.log(show)
    const valueStr = cevap.toString();
    const basamakSayisi = valueStr.length;
    const rakamlarToplami = valueStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const sonBasamak = parseInt(valueStr.charAt(valueStr.length - 1), 10);
    const asalSayi = isAsal(sonBasamak);
    return (

        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Devam Et!</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modalBody"} >
                    <p>{sure}</p>
                </Modal.Body>
            </Modal>
            <h2 style={{textAlign:"start", color:"#FF6969"}}>{alan}</h2>
            {alan == "GameOver" ?
                (<div style={{fontSize:"40px", textAlign:"center", fontWeight:"600"}}><div>Puan: {score}</div> {score < 10000 ? (<div style={{color:"red", fontWeight:"600"}}>Kaybettiniz</div>):(<div style={{color:"green", fontWeight:"600"}}>Kazandınız</div>)} <a href={"/oyuniki"} style={{textDecoration:"none", backgroundColor:"#39A7FF", borderRadius:"15px", padding:"10px 20px", fontSize:"18px", color:"white"}}>Yeni Oyun Başlat</a></div>)
                :
                (<Container>
                <Row>
                    <Col style={{textAlign:"center"}} >
                        <h2 style={{textAlign:"center"}}>{soru}</h2>


                        <input type="number" style={{height:"50px", width:"75%", border:"1px solid black", borderRadius:"15px", marginTop:"10px"}} onChange={onChange} value={value} />
                        <br/>
                        <Button variant={"success"} style={{marginTop:"10px"}} onClick={onClick} disabled={dogruMu}>
                            Tahmin Et
                        </Button>

                    </Col>
                    <Col>
                        <div className={"jokerler"}>
                            <Button className={"m-2"} onClick={basamakSayisiniGor} >basam sayısını öğren</Button>

                            <Button  className={"m-2"} onClick={rakamToplaminiGor}>sayının rakamları toplamını ögren</Button>

                            <Button  className={"m-2"} onClick={asalSayiOgren}>asal sayı ögren</Button>

                        </div>
                        <div  style={{margin:"auto",fontSize:"20px", fontWeight:600, color:"blue", backgroundColor:"#FF6969", width:"75%", borderRadius:"20px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                            <div style={{color:"#FDE5D4", backgroundColor: "#001524",textAlign:"center", fontSize:"30px", marginBottom:"20px"}}>İpucular</div>

                            {ipucuB ? (<div style={{padding: "5px 25px"}}><Alert  key={"light"} variant={"light"}>
                                Sayının basamak sayısı: {basamakSayisi}
                            </Alert></div>) : (<span></span>)}

                            {ipucuR ? (<div style={{padding: "5px 25px"}}><Alert  key={"light"} variant={"light"}>
                                Sayının rakamları toplamı: {rakamlarToplami}
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
            </Container>)}



        </div>

    );
};

export default SoruComponent;