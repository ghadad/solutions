const arr = [4, 2, -1, 0, 3, 9, 1, -5,17,5,6,7,8];
const findSmallestMissing = (arr = []) => {
   // O(n) -> find max 
   
   let count = 1;
   let maxNumber =  arr[0]
   let exists = {} ;

   for(let i = 0 ;i< arr.length;i++) {
   // O(n) scan array 

     if(arr[i]>maxNumber && arr[i]>0  ) 
       maxNumber=arr[i];
    if(arr[i]>0)
         exists[arr[i]] = true ;
   }

   if(maxNumber<0) 
       return count ;
   
   if(!arr?.length){
      return count;
   };
   // Worst O(n) - find the smallest that doesn't exist 

   while(count<maxNumber){
       if(!exists[count])
         return count;
      count++;
   };
   return count;
};
console.log(findSmallestMissing(arr));