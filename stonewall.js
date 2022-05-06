function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let head = H[0]
    let blocks = 0;
    let currentSum = 0
    index = 0
    count = 0
    stackIndex = 0
    let stack = []



    for (index = 0; index < H.length; index++){
        while (stackIndex > 0 && stack[stackIndex - 1] > H[index]) {
            stackIndex--
        }
        if (stackIndex > 0 && stack[stackIndex -1] === H[index] ){
            continue 
        } else {
            blocks++
            stack[stackIndex] = H[index]
            stackIndex++
        }
    }

    return blocks
}   
