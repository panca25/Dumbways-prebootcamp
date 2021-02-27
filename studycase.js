function usia(number){
    if (number >= 0 && number <= 1){
        document.write(`Umur ${number} tahun adalah Bayi`);
    } else if (number >= 2 && number <= 10){
        document.write(`Umur ${number} tahun adalah Anak-anak`);
    } else if (number >= 11 && number <= 19){
        document.write(`Umur ${number} tahun adalah Remaja`);
    } else if (number >= 20 && number <= 60){
        document.write(`Umur ${number} tahun adalah Dewasa`);
    } else if (number >= 60){
        document.write(`Umur ${number} tahun adalah Lanjut usia`);
    } else {null}
}
usia(3);