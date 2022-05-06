function reverseWords(str) { 
    let s = [] ;
    let word ='';
    
    for(let i=0;i<str.length;i++) { 
        if(str[i] !== ' ') {
            word+=str[i]
        }
        if (str[i] ==' ' || i==str.length-1) {
            if(word.length>0 ){
              s.push(word)
              word ='';
            }
        } 
     }

     for(let i = 0 ; i< s.length/2;i++) { 
          s.push(s.shift())
     }
    return (s)

}

console.log(reverseWords("abc efg dddd"))