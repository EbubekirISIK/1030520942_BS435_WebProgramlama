const tarih = [
    {
        question: "Türkiye Cumhuriyeti ilan edildiği tarihtir",
        answers: 1923,
    },
    {
        question: "İstanbul'un adının değiştirildiği tarihtir.",
        answers: 1930,
    },
    {
        question: "Türkiye'nin NATO'ya üyeliğinin gerçekleştiği tarihtir",
        answers: 1952,
    },
    {
        question: "Osmanlı İmparatorluğu'nun kuruluş tarihidir",
        answers: 1299,
    },
    {
        question: "Türk devletlerinden Karahanlılar Devletinin kurulduğu yıldır",
        answers: 840,
    },
    {
        question: "I. Dünya Savaşı'nın başladığı yıldır.",
        answers: 1914,
    },
    {
        question: "İstanbul'un fethedildiği tarihtir",
        answers: 1453,
    },
    {
        question: "Kurtuluş Savaşı'nın sona erdiği yıldır",
        answers: 1922,
    }, {
        question: "Amerika'nın bağımsızlık ilan ettiği yıldır",
        answers: 1776,
    }, {
        question: "Fransız Devrimi'nin başladığı yıldır",
        answers: 1789,
    },
    {
        question: "II. Dünya Savaşı'nın başladığı yıldır",
        answers: 1939,
    },
    {
        question: "Hiroşima'ya atom bombası atıldığı tarihtir",
        answers: 1945,
    }, {
        question: "Napolyon'un Waterloo Muharebesi'nde mağlup olduğu yıldır.",
        answers: 1815,
    },
    {
        question: "Osmanlı İmparatorluğu'nun Yavuz Sultan Selim tarafından Memlük Sultanlığı'na karşı kazanılan zaferin tarihidir.",
        answers: 1517,
    }, {
        question: "Rusya'da Ekim Devrimi'nin gerçekleştiği tarihtir",
        answers: 1917,
    },
    {
        question: "Çin Halk Cumhuriyeti'nin kuruluş yılıdır",
        answers: 1949,
    },
    {
        question: "Almanya'nın Berlin Duvarı'nı yıktığı yıldır",
        answers: 1989,
    },
    {
        question: "ABD'nin Bağımsızlık Bildirgesi'nin kabul edildiği tarihtir",
        answers: 1776,
    },
    {
        question: "Meksika'nın bağımsızlık mücadelesinin başladığı yıldır",
        answers: 1810,
    },
    {
        question: "Türk devletlerinden Gazneliler Devleti'nin kuruluş yılıdır",
        answers: 962,
    },
    {
        question: "Osmanlı İmparatorluğu'nun kurucusu Osman Gazi'nin vefat ettiği yıldır",
        answers: 1326,
    },
    {
        question: "Osmanlı İmparatorluğu'nun en yüksek nüfusu hangi yüzyılda kaydedilmiştir",
        answers: 16,
    },
    {
        question: "I. Dünya Savaşı'nda Osmanlı İmparatorluğu'nun kaybettiği topraklar kaç kilometrekare olarak hesaplanır",
        answers: 700000,
    },
    {
        question: "Türk devletlerinden Büyük Selçuklu İmparatorluğu'nun kuruluşu ile sona erdiği yıl arasındaki geçen süredir.(yıl olarak)",
        answers: 209,
    },
    {
        question: "Osmanlı Devleti'nin Balkanlardan çekildiği Londra Konferansı'nda kararlaştırıldığı yıldır",
        answers: 1912,
    },
    {
        question: "Türkiye'de ilk demokratik seçimler hangi gerçekleştirilfiği yıldır",
        answers: 1950,
    }


];
const bilim = [
    {
        question: "Evrende kaç tane bilinen element bulunmaktadır",
        answers: 118,
    },
    {
        question: "Bir hidrojen atomundaki proton sayısı nedir",
        answers: 1,
    },
    {
        question: "Dünya'nın yüzey sıcaklığı kaç derecedir",
        answers: 14,
    },
    {
        question: "Dünya'nın atmosferindeki oksijen oranı nedir",
        answers: 21,
    },
    {
        question: "Bir molekül DNA'da toplam kaç milyar çift baz bulunur",
        answers: 3,
    },
    {
        question: "Altının atom numara sayısıdır",
        answers: 79,
    },
    {
        question: "Evrenin genişleme hızı kaç km/saniye/megaparsek'tir",
        answers: 70,
    },
    {
        question: "Evrende kaç tane gezegen vardır",
        answers: 8,
    },
    {
        question: "İnsan vücudundaki kaç temel amino asit bulunmaktadır",
        answers: 20,
    }

];

const spor = [
    {
        question: "spor buluş",
        answers: 1923,
    },
    {
        question: "spor  bak",
        answers: 1907,
    },
    {
        question: "spor ne",
        answers: 1987,
    },

];

export const getRandomTarihQuestion = () => {
    const randomIndex = Math.floor(tarih.length*Math.random());
    return  tarih[randomIndex]

}
export const getRandomBilimQuestion = () => {
    const randomIndex = Math.floor(bilim.length*Math.random());
    return  bilim[randomIndex]
}
export const getRandomSporQuestion = () => {
    const randomIndex = Math.floor(spor.length * Math.random());
    return spor[randomIndex];
};