function output(nama, golongan, lamaBekerja){
    let gajiPerhari;
    let gajiPerbulan;
    let gajiLembur; 
    let totalGaji;
    
    switch (golongan){
        case "A":
            gajiPerhari = 1000 * lamaBekerja;
            break;
        case "B":
            gajiPerhari = 2000 * lamaBekerja;
            break;
        case "B":
            gajiPerhari = 3000 * lamaBekerja;
            break;
        case "B":
            gajiPerhari = 4000 * lamaBekerja;
            break;
    } 
    gajiPerbulan = gajiPerhari * 30;

    if (lamaBekerja * 30 > 200){
        gajilembur = lamaBekerja * 30 - 200;
    } else gajilembur = 0;

    totalgaji = gajiPerbulan + gajiLembur;

    document.write(`Nama: ${nama}` +"<br/>"+ `Golongan: ${golongan}` +"<br/>"+ `Gaji perhari: ${gajiPerhari}` 
    +"<br/>"+ `Gaji bulanan: ${gajiPerbulan}` +"<br/>"+ `Lembur: ${gajiLembur}` +"<br/>"+ `Total Keseluruhan: ${totalGaji}`);

}
output("Bapak Andi", "A", 8);