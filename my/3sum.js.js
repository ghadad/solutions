function  naiveThreeSum(arr=[],sum = 0) {
    // arr[i] + arr[j]+ arr[x] = 0 ;
console.log(arr)
 //     sum - (arr[i] + arr[j]) == arr[x]
        arr.sort((a,b) => a-b)

        let result = [];
        for(let i = 0;i < arr.length  ; i++){
           console.log(arr[i])
        }
        return result ;
  }

naiveThreeSum([1,1,1,2,0],3)
