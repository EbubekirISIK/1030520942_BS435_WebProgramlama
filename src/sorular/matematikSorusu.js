import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Container, Modal, ProgressBar, Row} from "react-bootstrap";

export const MatematikSorusu = ({onChange, value, onClick, sayi1, sayi2,sayac}) => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{textAlign:"center"}}>soru 1 : matematik</h2>
                        <div>
                            <span><strong>{sayi1} * {sayi2}</strong> işleminin sonucu kaçtır?</span>
                        </div>

                        <input type="number" onChange={onChange} value={value}/>
                        <br />
                        <Button variant={"success"}  onClick={onClick}>
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