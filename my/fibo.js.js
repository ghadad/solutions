// f(x) = f(x-1) + f(x-2) 

function fibo(x) { 
   
   let mem =  {}
   function fiboi(x){
        console.log(mem)
      if(mem[x]) return mem[x] ;
      if( x <= 2 ) return 1 ;    
      mem[x] = fiboi(x-1) + fiboi(x-2)
      return mem[x]
   }

    return fiboi(x-1) + fiboi(x-2)
}

fibo(123)