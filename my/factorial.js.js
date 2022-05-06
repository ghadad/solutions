// fact(n) = n*f(n-1) 

function fact(n){
    if(n==1) return 1;
    return n*fact(n-1);
}

function t_fact(n,result=n){
    console.log(n,result)
    if(n==1) return result;
    return t_fact(n-1,result *= (n-1));
}

t_fact(13)