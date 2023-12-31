import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import SoruComponent from "./sorular/soruComponent";
import {getRandomBilimQuestion, getRandomSporQuestion, getRandomTarihQuestion} from "./sorular/sorular";
import {MatematikSorusu} from "./sorular/matematikSorusu";

export const Oyuniki = ()=>{
    //matematik Sorusu
    const [sayi1, setSayi1] = useState(Math.floor(Math.random()*8+2))
    const [sayi2, setSayi2] = useState(Math.floor(Math.random()*40+10))
    const sayi =sayi1*sayi2;
    const [sayac, setSayac] = useState(15);
    const [dogruMu, setDogruMu] = useState(false);
    //modal
    const handleClose = () => setDogruMu(false);
    const handleShow = () => setDogruMu(true);
    const [sure, setSure] = useState("")
//sorular
    const [aktifSoruIndex, setAktifSoruIndex] = useState(0);
    const [skor, setskor] = useState(10000);
    const [tahmin, setTahmin] = useState('');

    const [ilk, setIlk] = useState(true);
    const [basamak, setBasamak] = useState(false)
    const [rakamToplam, setRakamToplam] = useState(false)
    const [asalSayi, setAsalSayi] = useState(false)
    const [tarihQuiz, setTarihQuiz] = useState(getRandomTarihQuestion());
    const [bilimQuiz, setBilimQuiz] = useState(getRandomBilimQuestion());
    const [sporQuiz, setSporQuiz] = useState(getRandomSporQuestion());
    const sorular = [
        {
            alan: "Soru 2: Tarih",

            question: tarihQuiz.question,

            answers: tarihQuiz.answers,
        },
        {
            alan: "Soru 3: Bilim",
            question:bilimQuiz.question,
            answers: bilimQuiz.answers,
        },
        {
            alan: "Soru 4: Spor",
            question:sporQuiz.question,
            answers: sporQuiz.answers,
        },
        {
            alan: "GameOver",
            question:"a",
            answers: 1,
        },
        // Daha fazla tarih sorusu ekleyebilirsiniz...
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            if (sayac > 0) {
                setSayac(prevSayac => prevSayac - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        // useEffect içinde clean-up fonksiyonu
        return () => clearInterval(interval);
    }, [sayac]);

    const kontrol = () => {
        if (sayac >0 && parseInt(tahmin) === sayi){
            setskor(skor + 2500);
            setDogruMu(true);
            setIlk(false);
            setSure("Tebrikler Doğru cevap! +2500 puan")

        }else{
            setskor(skor - 2000);
            setDogruMu(true);
            setIlk(false);
            setSure("Maalesef yanlış cevap! -2000 puan")
        }

    }
    if(sayac < 1 && ilk){
        setskor(skor - 2000);
        setDogruMu(true);
        setIlk(false);
        setSure("15 saniye içinde cevap veremedin. Süren btti! -2000 puan")
    }

    const handleChange = (event) => {
        setTahmin(event.target.value);
    };

    const kontrolEt = () => {
        const dogruCevap = sorular[aktifSoruIndex].answers;
        if (parseInt(tahmin) === dogruCevap) {
            setAktifSoruIndex(aktifSoruIndex + 1);
            setskor(skor + 2500);
            setBasamak(false);
            setRakamToplam(false);
            setAsalSayi(false)
            setDogruMu(true);
            setSure("Tebrikler Doğru cevap! +2500 puan")
        } else {
            setskor(skor - 2000);
            setAktifSoruIndex(aktifSoruIndex + 1);
            setTahmin('');
            setBasamak(false);
            setRakamToplam(false);
            setAsalSayi(false)
            setDogruMu(true);
            setSure("Maalesef yanlış cevap! -2000 puan")
        }
    };
    const basamakSayisiniGor = () =>{
        setBasamak(true)
        setskor(skor-200)
    }
    const rakamToplaminiGor = () =>{
        setRakamToplam(true)
        setskor(skor-200)
    }
    const asalSayiOgren = () =>{
        setAsalSayi(true)
        setskor(skor-200)
    }
    return (
        <div style={{height:"100%"}}>
            <div style={{textAlign:"end", fontSize:"30px", fontWeight:600, color:"#0f0"}}><strong>Puan:</strong> {skor}</div>
            {ilk && sayac > 0 ?
                (<MatematikSorusu

                sayi1 = {sayi1}
                sayi2 = {sayi2}
                sayac = {sayac}
                onChange={handleChange}
                value={tahmin}
                onClick = {kontrol}
                skor = {skor}
                />) :
                (<SoruComponent
                alan={sorular[aktifSoruIndex].alan}
            soru={sorular[aktifSoruIndex].question}
            onChange={handleChange}
            value={tahmin}
            cevap = {sorular[aktifSoruIndex].answers}
            basamakSayisiniGor = {basamakSayisiniGor}
            rakamToplaminiGor={rakamToplaminiGor}
            asalSayiOgren={asalSayiOgren}
            ipucuB = {basamak}
            ipucuR = {rakamToplam}
            ipucuA={asalSayi}
            onClick={kontrolEt}
                show={dogruMu}
                handleClose = {handleClose}
                sure = {sure}
                score = {skor}
            />)

            }

        </div>
    );
}