function power10(n=0){
    for(let i=1 ; i<=10;i++){
        console.log(ipower(i,n))
    }
}

function ipower(i,n) { 
  if(n==0) return 1;
   return i*ipower(i,n-1)
}

power10(4)