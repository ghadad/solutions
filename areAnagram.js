function areAnagram(s1,s2) {
    if(s1.length !== s2.length)
       return false;
    
    let c1 = { } ;
    let c2  = { } ;
    
    for(let i=0;i<s1.length;i++) { 
        if(s1[i] in c1) {
            c1[s1[i]]++
        } else{
            c1[s1[i]]=1;
        }
        if(s2[i] in c2) {
            c2[s2[i]]++
        } else{
            c2[s2[i]] =1;
        }
    }
    console.log(c1,c2)
    for(let i=0;i<s1.length;i++) {
        if(c1[s1[i]] != c2[s1[i]]) {
            return false;
        }
    }
    return true;

}

console.log(areAnagram("a1dc1","1ac1"))
console.log(areAnagram("1","1"))