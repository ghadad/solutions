function atoi(str){
    return str *1 ;
}

function atoi2(str){
    let result = 0 ; 
    let sign = 1; 
    for(let i=0 ;  i<str.length ; i++) {
        if(i==0 && str.charAt(i) == '-') {
            sign =-1;
            continue;
        }
        let d = str.charAt(i) - '0'  ;
        console.log(typeof d) ;
        result = result*10 + d;
    }
    return result * sign;
}

atoi2("-42324") 