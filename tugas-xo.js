function xo (str){
    var x = 'x'
    var o = 'o'
    if(x.length == o.length){
        console.log('true');    
    }else {
        console.log('false');
    }
    return;
}   

function panjang (str){
    var o ='o';
    console.log(o.length);
}
console.log(panjang('xoooxx'));





console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true