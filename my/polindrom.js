function isPolindrome( str )
{
    reverseStr = ""
    for(let i = str.length-1 ;i>=0;i--){
        reverseStr+=str[i]
    }
  return (reverseStr === str);
}

console.log(isPolindrome("receecer"))