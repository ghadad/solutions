const lss  =  function(str="Dddd") {
     
    let len = str.length ; 
   
    if(len<=1) return 1;
    let i = 0 ;
    let visited = {}
    let max = 0; 
    let counter = 0 ;

    while(i++ < len){
        console.log("counter:",counter)
        if(visited[str[i]]) {
            if(counter>=max) {
                max=counter;
                counter=0
            }
            visited[str[i]] = i ;     
            i = visited[str[i]] +1;
        } else {
            counter++;
            visited[str[i]] = i ;     
        }
        
    }
     return  counter > max ? counter:max;
}

"result:" + lss("bdddaebc3hsaff")