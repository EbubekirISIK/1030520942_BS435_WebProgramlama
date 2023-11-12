import React, {useState} from "react";
import ReactDOM from "react-dom";

//import {getRandomQuizzes} from "./quizzes";
import {barileri, sayigetir} from "./app";
import Button from "react-bootstrap/Button";
const A = () => {
    const [sayi, setSayi] = useState(sayigetir());
    return (
        <div>
            <button onClick={() => setSayi(sayigetir())}>Yeniden Üret</button>
            <div id="sayi">{sayi}</div>
        </div>
    );
}
ReactDOM.render(<A/>, document.getElementById("root2"));

let i = 1;
let kalanHak = 4;
const As = () => {
  return (<div>{kalanHak}</div>);
}
ReactDOM.render(<As/>, document.getElementById("a"));
const Resim = () => {
    i +=1;
    return (
        <div>
            <img src={`${i}.jpg`}/>
        </div>);
};
const Resim2 = () => {
    return (
        <div>
            <img src={`6.jpg`}/>
        </div>);
};
const Resim1 = () => {
        return (<div>
            <img src={`7.jpg`}/>
        </div>);
};
const Bar = () => {
    const sayi1 = parseInt(document.getElementById('sayi').innerText);
    const sayi2 = parseInt(document.getElementById('input').value);

    // const [barSayi, setBarSayi] = useState(barileri(sayi1, sayi2)); /*hocaya sor.*/
    const bss = barileri(sayi1, sayi2)
    const barStyle = {
        width: bss + '%'
    };

    return (
        <div id="q" className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={barStyle}>
                <span className="sr-only">70% Complete</span>
            </div>
        </div>
    );
}
const kontrolEt = () =>
    {
        const tahmin = parseInt(document.getElementById('input').value, 10);
        const sayiElementi = document.getElementById('sayi');
        const sayiMetni = sayiElementi.innerText;
        const sayi = parseInt(sayiMetni, 10);
        if (isNaN(tahmin)) {
            alert('Geçerli bir sayı giriniz.');
        } else if (tahmin === sayi) {
            alert('Tebrikler, doğru tahmin!');
            ReactDOM.render(<Resim1 />, document.getElementById("resim"));
            ReactDOM.render(<Bar/>, document.getElementById("q"));

        } else if (tahmin < sayi) {
            alert('Daha yüksek bir sayı deneyin.');
            ReactDOM.render(<Resim />, document.getElementById("resim"));
            kalanHak -=1;
            ReactDOM.render(<As/>, document.getElementById("a"));
            ReactDOM.render(<Bar/>, document.getElementById("q"));
        } else {
            alert('Daha düşük bir sayı deneyin.');
            ReactDOM.render(<Resim />, document.getElementById("resim"));
            kalanHak -=1;
            ReactDOM.render(<As/>, document.getElementById("a"));
            ReactDOM.render(<Bar/>, document.getElementById("q"));
        }

    }


document.getElementById('btn-kontrol').addEventListener('click', kontrolEt);

