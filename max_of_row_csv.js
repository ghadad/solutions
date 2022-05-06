function solution(S, C) {
    
    let lines = S.split(/\n/);
    let headers = lines[0].split(/,/);
    let rowIndex = headers.indexOf(C);
    if(rowIndex<0)
        return null ;
    let maxOfRow = -Infinity;
    for (let i = 1; i< lines.length ;i++) { 
        let lineArr = lines[i].split(/,/).map(e=>e*1)
         if(lineArr[rowIndex] > maxOfRow )
           maxOfRow = lineArr[rowIndex] ;
    }
    return maxOfRow;
}
/* 
city,temp2,temp
Paris,7,-3
nPorto,-1,-2
*/
console.log(solution('city,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2', 'temp'),typeof(solution('city,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2', 'temp')))