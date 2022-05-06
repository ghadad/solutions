function swapForMax(n=0){
    let arr = n.toString().split('')
    let t=0;
    for(let i = 0   , j = arr.length -1 ; i<j ; ){
        if(arr[i] ==9) i++ ;
        if(arr[j] ==0) j-- ;

       t++;
        if(arr[j]>[arr[i]]){
            let tmp  = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp ;
        } else {
            j--;
        }
        if(i+1==j){
            i++;
            j= arr.length -1;
        }
    }
    console.log("times:",t)

    let result = 0  ; 
    arr.forEach( (e,i)=> { result *= 10 ; result+= e*1; });
    return result;

}

//swapForMax(12399393999)

function swapForMax2(n) {
    console.log("n=",n)
     let arr = n.toString().split('');
     arr=arr.map((e,i)=>e*Math.pow(10,arr.length-i-1))
     console.log(arr)
     let maxDiff =  0  ,minValue = arr[0];
     let leftIndex , rightIndex;
     for(let i = 0 ; i<arr.length ;i++){
         rightIndex = i ;
         if( minValue - arr[i] > maxDiff) { 
            maxDiff = minValue - arr[i] ;
            minValue = arr[i];
            leftIndex = i ;
              console.log(leftIndex,rightIndex,maxDiff)
         }
         console.log(leftIndex,rightIndex,maxDiff)
        
     }

 return maxDiff;
 }

swapForMax2(123)