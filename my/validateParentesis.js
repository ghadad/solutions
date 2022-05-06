function v(str) { 
    let q = [];
    let oppeners    =  { 
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for(let i = 0 ; i< str.length;i++) {
        console.log("q:",q,"str[i]",str[i],"o" ,oppeners[str[i]])
        if(['{','(','['].includes(str[i])) {
            q.push(str[i])
        }
        else if (q[q.length-1] == oppeners[str[i]]) {
            q.pop()
        }         
          else {
            return false;
          }
    }
    return q.length ? false:true;
}

console.log(v('{}['))