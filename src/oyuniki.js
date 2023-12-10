import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import SoruComponent from "./sorular/soruComponent";
import {getRandomBilimQuestion, getRandomSporQuestion, getRandomTarihQuestion} from "./sorular/sorular";

export const Oyuniki = ()=>{
    const [aktifSoruIndex, setAktifSoruIndex] = useState(0);
    const [skor, setskor] = useState(0);
    const [tahmin, setTahmin] = useState('');
    const [dogruMu, setDogruMu] = useState(false);
    const [basamak, setBasamak] = useState(false)
    const [rakamToplam, setRakamToplam] = useState(false)
    const [asalSayi, setAsalSayi] = useState(false)
    const [tarihQuiz, setTarihQuiz] = useState(getRandomTarihQuestion());
    const [bilimQuiz, setBilimQuiz] = useState(getRandomBilimQuestion());
    const [sporQuiz, setSporQuiz] = useState(getRandomSporQuestion());
    const sorular = [
        {
            alan: "Soru 1: Tarih",

            question: tarihQuiz.question,

            answers: tarihQuiz.answers,
        },
        {
            alan: "Soru 2: Bilim",
            question:bilimQuiz.question,
            answers: bilimQuiz.answers,
        },
        {
            alan: "Soru : 3 Spor",
            question:sporQuiz.question,
            answers: sporQuiz.answers,
        },
        // Daha fazla tarih sorusu ekleyebilirsiniz...
    ];

    const handleChange = (event) => {
        setTahmin(event.target.value);
    };

    const kontrolEt = () => {
        const dogruCevap = sorular[aktifSoruIndex].answers;
        if (parseInt(tahmin) === dogruCevap) {
            setAktifSoruIndex(aktifSoruIndex + 1);
            alert("dogru")
            setskor(skor + 1000);
            setBasamak(false);
            setRakamToplam(false);
            setAsalSayi(false)
        } else {
            console.log(tahmin);
            console.log(dogruCevap);
            setAktifSoruIndex(aktifSoruIndex + 1);
            setTahmin('');
            alert("yanlış");
            setBasamak(false);
            setRakamToplam(false);
            setAsalSayi(false)
        }
    };
    const basamakSayisiniGor = () =>{
        setBasamak(true)
        setskor(skor+200)
    }
    const rakamToplaminiGor = () =>{
        setRakamToplam(true)
        setskor(skor+200)
    }
    const asalSayiOgren = () =>{
        setAsalSayi(true)
        setskor(skor+200)
    }
    return (
        <div>
            <div style={{textAlign:"end", fontSize:"30px", fontWeight:600, color:"#0f0"}}>Puan: {skor}</div>
            <SoruComponent
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
                dogruMu={dogruMu}/>
        </div>
    );
}