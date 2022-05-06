var arr = [1,2,3,4,5,6,7,8,9];

var s = 0 ; 
for(var e in arr) {
    s += parseInt(e);
}

console.log(s)
var b = s/2;
console.log(b)
for(var i=0;i<arr.length;i++) {
    if(s<b){
        console.log("entry :",i)
    }
    s -= arr[i];    
}

