function combinationSum(arr=[],num) {
    let sum  = 0 ; 
    
    function isum(sum=0,result=[],i=0){
         if(i==arr.length-1)
           return result;
        
        if(sum  < num ) {
            result.push(arr[i]) ;
            console.log("lt result:",result,"sum:",sum,"index:",i,"num:",num)
            isum(sum+=arr[i],result,i+1)
        } else if(sum  == num ) {
              console.log("eq result:",result,"sum:",sum,"index:",i,"num:",num)
             return result ;
          } else if(sum>num) {
              console.log("gt result:",result,"sum:",sum,"index:",i,"num:",num)
              isum(sum - result.pop() ,result,i+1);
        }

        return result;
    }
    let all = []
    for(let j = 0 ;j<arr.length;j++) { 
        sum = 0;
        all.push(isum(sum,[],j))
    }
    return all;

}

combinationSum([2,2,3,1],4)