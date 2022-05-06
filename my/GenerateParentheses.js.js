function GenerateParentheses(n=0) {
    if(n==0) return []
    let q = [{path:"(",open:1,close:0}]
    while(true){
     const {path,open,close } =   q.shift() ;
     
     if(open + close == n*2) {
         q.unshift({path:'(',open:open+1,close:close})
         break ;
     }
     
     if(open < n ) {
         q.push({path:path+'(',open:open+1,close:close})
     }

     if (close < open) {
      q.push({
        path: path + ')',
        open,
        close: close + 1,
         })
        }
      }
    return q ;
}

function v2(n=0)  {
    let path = "(";
    let open = 1 ; 
    let close  = 0;
    let max = n *2; 
    let result  = [];

    function rec(path,open,close,max){
console.log(open,close)
console.log(open,close,max)

        if(open + close == max  ) 
            return result.push(path) ;
        if(close < open) 
          rec(path+")",open,close+1,max); 
     
          rec(path+"(",open+1,close,max);
        }
    rec(path,open,close,max)
    return result ;
}

//GenerateParentheses(4)
v2(4)
