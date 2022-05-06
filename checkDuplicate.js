function checkDuplicate(arr=[]) { 
    let exists = {}
    for(let i = 0 ; i < arr.length;i++) {
        if(exists[arr[i]])
          return true;
        exists[arr[i]] = true;
    }
    return false;
}

console.log(checkDuplicate([1,1]))