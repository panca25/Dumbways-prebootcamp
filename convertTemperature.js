function convertTemperature(suhuAwal, nilai, suhuAkhir){
    let suhuKonversi;

    switch (suhuAwal){
        case "Celcius":
            if (suhuAkhir == "Kelvin"){
                suhuKonversi = nilai + 273;
                break;
            } else if (suhuAkhir == "Reamur"){
                suhuKonversi = (4/5) * nilai;
                break;
            } else if (suhuAkhir == "Fahrenheit"){
                suhuKonversi = (9/5) * nilai + 32;
                break;
            } else if (suhuAkhir == "Celcius"){
                suhuKonversi = nilai;
                break;
            } else {null}
        
        case "Reamur":
            if (suhuAkhir == "Kelvin"){
                suhuKonversi = (5/4) * nilai + 273;
                break;
            } else if (suhuAkhir == "Celcius"){
                suhuKonversi = (5/4) * nilai;
                break;
            } else if (suhuAkhir == "Fahrenheit"){
                suhuKonversi = (9/4) * nilai + 32;
                break;
            } else if (suhuAkhir == "Reamur"){
                suhuKonversi = nilai;
                break;
            } else {null}
        
        case "fahrenheit":
            if (suhuAkhir == "Kelvin"){
                suhuKonversi = 5/4 * (nilai-32) + 273;
                break;
            } else if (suhuAkhir == "Reamur"){
                suhuKonversi = 4/9 * (nilai-32);
                break;
            } else if (suhuAkhir == "Celcius"){
                suhuKonversi = 5/9 * (nilai-32);
                break;
            } else if (suhuAkhir == "Fahrenheit"){
                suhuKonversi = nilai;
                break;
            } else {null}
    
        case "Kelvin":
            if (suhuAkhir == "Celcius"){
                suhuKonversi = nilai - 273;
                break;
            } else if (suhuAkhir == "Reamur"){
                suhuKonversi = 4/5 * (nilai-273);
                break;
            } else if (suhuAkhir == "Fahrenheit"){
                suhuKonversi = (9/5 * (nilai-273)) + 32;
                break;
            } else if (suhuAkhir == "Kelvin"){
                suhuKonversi = nilai;
                break;
            } else {null}
    }
    document.write(`${nilai} ${suhuAwal} sama dengan ${suhuKonversi} ${suhuAkhir}`);
}
convertTemperature("Celcius", 35, "Kelvin");