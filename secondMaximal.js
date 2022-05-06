function secondMaxmial(arr=[]) {
    if(!arr.length)
    return null;

   let max = arr[0],secMax= arr[0] ;
    for(let i = 0;i<arr.length;i++) { 
       if(arr[i]>max) {
           secMax = max;
           max = arr[i];
       }
   }
   return secMax;

}

console.log(secondMaxmial([1,2,19 ]))