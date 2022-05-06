var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for(let currentPrice of prices) {
        if (currentPrice > minPrice) 
            maxProfit = Math.max(maxProfit, currentPrice - minPrice)
        else
            minPrice = currentPrice
            
    }
    return maxProfit;
  };
  
  
    console.log(maxProfit([1,2,7]))