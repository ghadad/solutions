function f(n,k){
    let str = n.toString();
    let c = '' +k;
    for(let i=0;i<str.length;i++) { 
        if(c>str[i] && n>0) { 
            return str.substr(0,i) + c + str.substr(i)
        } else if(c<str[i] && n<0){
            return str.substr(0,i) + c + str.substr(i)
        }
    }
    return (str + c) *1;
}

console.log(f(-391234,5))

