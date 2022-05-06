function sumOfTwoNumber(arr=[],n) {
    let exists = {}
    for(let i = 0 ; i< arr.length;i++) { 
        if(exists[n - arr[i]] !== undefined) 
          return [arr[exists[n-arr[i]]],arr[i]] ;
          exists[arr[i]] = i;
    }

    return []
}

console.log(sumOfTwoNumber([3,7,1,8,3],11))