// f(x) = f(x-1) + f(x-2)
function fibo(x,a=0,b=1) {
    if(x==1 ) return b ;
    if(x==0 ) return a ;
    return fibo(x-1,b,a+b) ;
}

fibo(1)
Infinity