const v = function(str="") {

    if(str.length < 8) {
        return false;
    }
    let must = ["[A-Z]","[a-z]","[0-9]"]

    for(let exp of must) {
        console.log(exp)
        let re = new RegExp(exp)
        
        if(!re.test(str)) {
            return false;
        }
    }

    return true;
}

console.log(v("ddddd"))
