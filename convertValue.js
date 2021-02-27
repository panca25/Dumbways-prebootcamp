function convertValue (nilai){
    let konversi;
    if (nilai >=86 && nilai <=100){
        konversi = "A";
    } else if (nilai >= 70 && nilai <= 85){
        konversi = "B";
    } else if (nilai >=50 && nilai <= 69){
        konversi = "C";
    } else if (nilai >= 30 && nilai <= 49){
        konversi = "D";
    } else {
        konversi = "E"
    }

    document.write("Nilai Konversi adalah " + konversi);
}

convertValue(80);