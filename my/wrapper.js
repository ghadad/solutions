function wrap(cb) { 
    if(!hasOwnProperty in wrap.prototype) {
        wrap.prototype.failed = false;
    }
    let f = (str) => ()=>  { 
        console.log("wrap.prototype.failed",wrap.prototype.failed)
        return  wrap.prototype.failed == true ? 'Failed' :str ;
    } 

    if(wrap.prototype.failed)
       return f('Failed')
    try {
        let result = cb()
        return f(result) ; 
    } catch(e) { 
        wrap.prototype.failed = true;
        return f("Failed")
    }
         
}


let f=  wrap(function() { 
    throw 'Error';
})
let f2 =  wrap(function() { 
    return 'Result';
})

console.log(f2())

console.log(f2())