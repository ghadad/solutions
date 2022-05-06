function reduceSumDigits(n) {
    if(n<10) return n;
     return reduceSumDigits(n.toString().split('').map(e=>1*e).reduce((a,b) => a+b))
}

console.log(reduceSumDigits(28912221))