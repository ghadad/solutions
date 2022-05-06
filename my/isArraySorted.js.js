var arr = [] ;

function isSorted(arr=[]) { 
for(let i = 0 ; i<arr.length-1;i++) {
    if(arr[i+1] < arr[i])
    return false;
}
return true;
}

isSorted(arr)