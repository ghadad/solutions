var maxSubArray = function(nums) {
    const len = nums.length
    if (len <= 0) { return 0 }
    const dp = [nums[0]]
    for (let i = 1; i < len; i++) {
      dp[i] = Math.max(dp[i-1], 0) + nums[i]
    }
    return Math.max(...dp)
  };



  console.log(maxSubArray([1,2,7]))