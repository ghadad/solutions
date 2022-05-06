function solution(A, D) {
    let hash = {};
    for (let i = 0; i < D.length; i++) {
         let m = D[i].substr(5, 2)

         if (hash[m] == undefined) hash[m] = {
            month: m,
            total: 0,
            totalCC:0,
            lines: 0,
            totalOutcome: 0,
            totalCCAmount:0
        }

        hash[m].total += A[i];
         if(A[i] <0 ){
            hash[m].totalCC++;
            hash[m].totalCCAmount += (A[i]*-1)
        }
        hash[m].lines++;
        if (A[i] > 0)
            hash[m].totalOutcome++;
    }

    let extraFeeMonths = 0;
    let totalBill = 0
        
     for (let m of ['01','02','03','04','05','06','07','08','09','10','11','12']) {
       
        if (!(m in hash)) { 
            extraFeeMonths++;
            continue;
        }
      
         if (hash[m].totalCC < 3 || hash[m].totalCCAmount < 100) {
            extraFeeMonths++;
        }
      //  console.log(m,"totalcc:",hash[m].totalCC,"total cc amt",hash[m].totalCCAmount)
        totalBill += hash[m].total;
        
        //console.log("total bill:",totalBill, extraFeeMonths)
      
    }
   // console.log(totalBill,extraFeeMonths)
    return totalBill - (extraFeeMonths * 5)
}


console.log("total:",solution([100, 100, 100, -10], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"]))
console.log("total:",solution([180, -50, -25, -25], ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"]))
console.log("total:",solution([1, -1, 0, -105,1], ["2020-12-31", "2020-04-04", "2020-04-07","2020-04-14", "2020-07-12"]))
console.log("total:",solution([100,100, -10,-20, -30], ["2020-01-31", "2020-02-04", "2020-02-07","2020-02-14", "2020-02-12"]))