class BigInt { 
    constructor(str) { 
        this.num = str
    }

    add(str) { 
        let carry = 0 ;
        let q = [] ;
        let thisNum = this.num ;
        let addItems =  new Array(Math.max(str.length - thisNum.length,thisNum.length - str.length))
        addItems=  addItems.fill('0').join('')

        
        if(str.length > thisNum.length)  { 
            thisNum = addItems + thisNum;
        } else { 
            str = addItems +  str;
        }

        console.log(addItems,',',str,',',thisNum)
        
        for(let i = str.length-1 ; i>= 0;i-- ){
            let sumOfDigits = Number(thisNum[i]) + Number(str[i]) + carry  ; 
            if(sumOfDigits<10) { 
                q.push(sumOfDigits) ;
                carry =0 ;
            } else {
                q.push(sumOfDigits-10) ;
                carry=1;
            }
        }
        if(carry) 
            q.push(carry) ;

        return q.reverse().join('') ;
    }
}

const bi = new BigInt('1233343434344343')
console.log(bi.add('12133'))