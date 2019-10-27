function bandingkanAngka(num1, num2){
    if (num1 < num2){
        console.log('true');
        return num1;
        return num2;
    }else if (num1 > num2){
        console.log('false');
        return num1;
        return num2;
    }else if(num1 = num2){
        console.log('-1');
        return num1;
        return num2;
    }
}   

console.log(bandingkanAngka(2,7));
console.log(bandingkanAngka(5, 8)); 
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false