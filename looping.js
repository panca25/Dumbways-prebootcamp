// Naik 1 angka
const naikSatu = (number) => {
    for (let i = 1; i <= number; i++){
        document.write(i + " ");
    }
}
naikSatu(15);

document.write("<br/>");

// Kuadrat
const kuadrat = (number) => {
    for (let i = 1; i <= number; i++){
        document.write(i * i + " ");
    }
}
kuadrat(15);

document.write("<br/>");

// Kelipatan tiga
const kelipatanTiga = (number) => {
    for (let i = 1; i <= number ; i++){
        document.write(i * 3 + " ");
    }
}
kelipatanTiga(20);