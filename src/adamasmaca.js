
import './App.css';
import React, {useEffect, useState} from "react";
import {Alert, Button, Col, Modal, ProgressBar, Row} from "react-bootstrap";
import {Resimler} from "./Resimler";
import Resim1 from "./images/1.png"
import Resim2 from "./images/2.png"
import Resim3 from "./images/3.png"
import Resim4 from "./images/4.png"
import Resim5 from "./images/5.png"
import Resim6 from "./images/6.png"
import Resim7 from "./images/7.png"
import Resim8 from "./images/8.png"
import Resim9 from "./images/9.png"


const imgler = [Resim1, Resim2, Resim3, Resim4, Resim5, Resim6, Resim7, Resim8, Resim9]
export const Adamasmaca = () => {
    const [sayi , setSayi] = useState(Math.floor(Math.random()*100))
    const [tahmin, setTahmin] = useState(null)
    const [asmaca, setAsmaca] = useState(imgler[0])
    const[index, setIndex] = useState(1)
    const [gameOver, setGameOver] = useState(false);
    const [bk, setbk] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sayiUret = () => {
        setSayi(Math.floor(Math.random()*100))
        setIndex(1)
        setAsmaca(imgler[0])
        setGameOver(false)
    }
    const handleChange = event => {
        setTahmin(event.target.value);

    };
    const kontrolEt = () =>{
        if(index <= 6 && tahmin == sayi){
            setIndex(index)
            setAsmaca(imgler[8])
            setGameOver(true)
        }
        else if(tahmin <= sayi) {
            //daha büyük sayı girilmesi gerekiyor.
            setbk(true)
            setIndex(index+1)
            setAsmaca(imgler[index])

        }
        else if(tahmin => sayi) {
            //daha küçük sayı girilmesi gerekiyor.
            setbk(false)
            setIndex(index+1)
            setAsmaca(imgler[index])
        }


        else {
            alert("lütfen geçerli bir değer girin!")
            setIndex(index+1)
            setAsmaca(imgler[index])
        }
        if (index == 6 && tahmin != sayi){
            setTimeout(()=>{
                setIndex(index)
                setAsmaca(imgler[index+1])
            },1000);
            setGameOver(true)
        }



    }
    const [show, setShow] = useState(true);
    return (
        <div className="App">
            {/*<Button variant={"primary"} onClick={sayiUret}>
                Yeni Bir Random Sayı Üret
            </Button>
            <span>{sayi}</span>*/}

            <Alert show={show} variant="primary" style={{ maxWidth: '80%', margin: '0 auto' }}>
                <Alert.Heading><strong style={{color: "red"}}>İPUCU!!</strong></Alert.Heading>
                <p>
                    Aşağıdaki bar 0 ile 100 arasındadır. Barın dolu tarafı üretilen sayıdır. Bir anda yola çıkarak sayıyı 6 hamlede bulmaya çalış.

                    {bk ? (
                        <p><strong style={{fontSize: "25px"}}>daha büyük sayı tahmin et</strong></p>
                    ) : (
                        <p><strong style={{fontSize: "25px"}}>daha küçük sayı tahmin et</strong></p>
                    )}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-danger">
                        İpucuyu Kapat
                    </Button>
                </div>
            </Alert>

            {!show && (
                <Button variant={"success"} onClick={() => { setShow(true); setGameOver(false); }}>
                    İpucuyu Göster
                </Button>
            )}

            <div>
                <Row>
                    <Col>
                        <div className={"yardimciBar"}>
                            <ProgressBar style={{backgroundColor: "yellow"}}>
                                <ProgressBar striped variant="warning" now={sayi} key={1} />
                            </ProgressBar>
                        </div>

                        <label>Lütfen bir sayı tahmin ediniz
                            <input className="input-tahmin" type="number" onChange={handleChange} value={tahmin} />
                        </label>
                        <Button variant={"success"} onClick={kontrolEt}>Kontrol et</Button>
                    </Col>
                    <Col>
                        <Resimler resim={asmaca} />
                    </Col>
                </Row>
            </div>

            {/* Oyun bittiğinde gösterilecek popup */}
            <Modal show={gameOver} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Oyun Bitti!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {tahmin == sayi ? (
                        <p>Tebrikler, Oyunu kazandın. Yeni bir oyun başlatın!</p>
                    ) : (
                        <p>Maalesef, haklarınız tükendi. Sayı: {sayi} Yeni bir oyun başlatın!</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={sayiUret}>
                        Yeni Oyun
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Adamasmaca;
