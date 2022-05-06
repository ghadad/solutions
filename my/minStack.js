function Stack () { 
    this.s = []
    this.minVal = Infinity;    
    
    this.push = function(v){ 
        this.s.push(v)
        if(v< this.minVal ) {
            this.minVal = v;
        }
    }

    this.pop = function() {
        return this.s.pop()
    }

    this.getMin =  function() { 
        if(this.s.length ==0 )
        return null;

        return this.minVal;
    }

    return this;
    
}


s= new Stack();
s.push(3)
s.push(53)
s.push(23)
s.push(1)

console.log(s.getMin())