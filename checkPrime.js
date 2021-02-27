let isPrime = true;

function checkPrime(number){
    if (number > 1 ){
        for (let pembagi = 2; pembagi < number; pembagi++){
            if (number % pembagi == 0){
                isPrime = false; //error disini
                break;
                } 
            } 
        } if (isPrime){
            console.log(`Nomor: ${number} adalah bilangan prima`);
    // jika number kurang atau sama dengan satu bukan bilangan prima
    } else {
        console.log(`Nomor: ${number} bukan bilangan prima`);
    }
}
checkPrime(23)