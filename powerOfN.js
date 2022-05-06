
function rpn(i,n) { 
    if(n==0)
    return 1;
    return i * rpn(i,n-1)
}

function powerOfN(n){
    for(let i = 1; i<=10;i++) {
        console.log(rpn(i,n))
    }
}

powerOfN(5)

