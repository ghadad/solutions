function solution(N, S) {
  const persons = 4;

  totalFamilies = 0;
  let captureHash = {}
  let captureArr = S.split(/\s+/);

  for (let i = 0; i < captureArr.length; i++) {
    captureHash[captureArr[i]] = true;
  }

  for (let i = 1; i <= N; i++) {
    let seatIndex = 0;
    let lineSeats = [i + 'A', i + 'B', i + 'C', i + 'D', i + 'E', i + 'F', i + 'G', i + 'H', i + 'J', i + 'K'];
    let count = 0;
    captureHash[i+'A'] = true;
    captureHash[i+'K'] = true;

    for (let j = 0; j < lineSeats.length; j++) {
      if (captureHash[lineSeats[j]]) {
        count = 0;
      } else {
        count++;
        //if(count==persons) { 
        if (count == persons ) {
          totalFamilies++;
          count = 0;
        }
      }
    }

  }
  return totalFamilies;
}


console.log(solution(12, "1A 2F 1C"))
console.log(solution(11, ""))
console.log(solution(1, "1A 1B"))