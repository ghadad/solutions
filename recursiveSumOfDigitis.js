function s(n) {
    function f(n) {
        if (n < 10) return n;
        let rest = n % 10;
        return rest + f((n - rest) / 10)
    }
    let result = n;
    while (result >= 10) {
        console.log(result);
        result = f(result)
    }
    return result;
}

console.log(s(8989))