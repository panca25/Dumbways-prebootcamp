function oddEven(numbers){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            console.log('genap');
        } else {
            console.log('ganjil');
        }
    }
}
oddEven([1,2,3,4,5,6,7,8]);