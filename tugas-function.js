//function 1
function shoutOut(){
    console.log("Halo Function!");
}

console.log(shoutOut());

//function 2
function calculateMultiply(num1,num2){
    return num1 * num2;
   
}


var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);

//function 3
function processSentence(name, age, address, hobby){
    console.log('Nama saya '+ name + ', ' +'umur saya '+ age +'tahun, alamat saya di '+ address +' dan saya punya hobby yaitu ' + hobby + '!')
}

processSentence("Agus",30,"Jln. Malioboro, Yogjakarta","gaming");