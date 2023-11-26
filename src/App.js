
import './App.css';
import React, {useEffect, useState} from "react";
import {Button, ProgressBar} from "react-bootstrap";
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
function App() {

    const [sayi , setSayi] = useState(Math.floor(Math.random()*100))
    const [tahmin, setTahmin] = useState(null)
    const [asmaca, setAsmaca] = useState(imgler[0])
    const[index, setIndex] = useState(1)

    const sayiUret = () => {
        setSayi(Math.floor(Math.random()*100))
        setIndex(1)
        setAsmaca(imgler[0])
    }
    const handleChange = event => {
        setTahmin(event.target.value);

    };
    const kontrolEt = () =>{
        if(index <= 6 && tahmin == sayi){
            alert("kazandın")
            setIndex(index)
            setAsmaca(imgler[8])
        }
        else if(tahmin <= sayi) {
            alert("lütfen daha büyük bir sayı tahmin edin")
            setIndex(index+1)
            setAsmaca(imgler[index])

        }
        else if(tahmin => sayi) {
            alert("lütfen daha küçük bir sayı tahmin edin")
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
        }



    }

    return (
        <div className="App">
            <h3>Sayı Tahmini Oyununa Hoşgeldin!</h3>
            <div>
                <button onClick={sayiUret}>Yeni Bir Random Sayı Üret</button>
                <span>{sayi}</span>
            </div>
            <p><strong>İPUCU!!: </strong> Aşağıda ki bar 0 ile 100 arasındadır. barın dolu tarafı üretilen sayıdır. bırdan yola çıkarak sayıyı 6 hamlede bulmaya çalış.</p>
            <div className={"yardimciBar"}>
                <ProgressBar >
                    <ProgressBar striped variant="warning" now={sayi} key={1} />
                    {/*<ProgressBar variant="warning" now={sayi/3} key={2} />*/}
                    {/*<ProgressBar striped variant="danger" now={sayi/3} key={3} />*/}
                </ProgressBar>
            </div>

            <label>Lütfen bir sayı tahmin ediniz
                <input className="input-tahmin" type="number" onChange={handleChange} value={tahmin}/>
            </label>
            <Button variant={"success"} onClick={kontrolEt}>kontrol et</Button>

            <Resimler resim={asmaca} />





        </div>
    );
}

export default App;


