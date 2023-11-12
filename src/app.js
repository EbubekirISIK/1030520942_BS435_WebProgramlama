
const resimler = [
       "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
]
//randomQuiz

export const sayigetir = () => {
    const rastgeleOndalik = Math.random() * 100;
    const rastgeleTamsayi = Math.floor(rastgeleOndalik); // Ondalık sayıyı tamsayıya dönüştürmek
    return rastgeleTamsayi;
}

export const barileri = (tutlanSayi, tahminEdilenSayi) =>
{
    var fark = (Math.abs((tutlanSayi-tahminEdilenSayi)));
    var uzaklik = (100 - (fark / 100) * 100);
    return uzaklik;
}

