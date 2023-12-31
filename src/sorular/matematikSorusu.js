import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Container, Modal, ProgressBar, Row} from "react-bootstrap";

export const MatematikSorusu = ({onChange, value, onClick, sayi1, sayi2,sayac}) => {

    return (
        <div>
            <h2 style={{textAlign:"start", color:"#FF6969"}}>soru 1 : matematik</h2>
            <Container>
                <Row>
                    <Col style={{textAlign:"center"}}>

                        <div>
                            <h2><strong>{sayi1} * {sayi2}</strong> işleminin sonucu kaçtır?</h2>
                        </div>

                        <input type="number" style={{height:"50px", width:"75%", border:"1px solid black", borderRadius:"15px", marginTop:"10px"}} onChange={onChange} value={value}/>
                        <br />
                        <Button variant={"success"} style={{marginTop:"10px"}} onClick={onClick}>
                            Tahmin Et
                        </Button>

                    </Col>
                    <Col>
                        <div>Süre: {sayac}</div>
                        <ProgressBar style={{backgroundColor: "yellow"}}>
                            <ProgressBar striped variant="warning" now={(sayac / 15) * 100} key={1} />
                        </ProgressBar>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}