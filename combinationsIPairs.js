var array = ["apple", "banana", "lemon", "mango"];

var result = array.flatMap(
    (v, i) => array.slice(i+1).map( w => v + ' ' + w )
);

console.log(result);
