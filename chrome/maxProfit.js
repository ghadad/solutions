 var getMaxProfit = function(nums) {
  let maxProfit = -99999999 ;
  let minPrice = nums[0] ; 
   
  for(let i = 0  ; i< nums.length ; i++ ) {
    if((nums[i]  -  minPrice) > maxProfit ) { 
        maxProfit = nums[i]  - minPrice ;       
       } else {
         minPrice = nums[i]
       }
        console.log(nums[i] - minPrice,nums[i],maxProfit)      
      
  }
    return maxProfit; 
  
};
  
   let nums = [1,2,-9,19,1,10,45]
   
   console.log([getMaxProfit(nums)])