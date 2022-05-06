function mapPlayers(arr=[]) {
    let arr2 = [...arr]
    console.log(arr,arr2)
    let result = {} ;
    for(let i = 0;i<arr.length;i++) {
        let pick = Math.ceil(Math.random() * arr2.length) -1;
        console.log(i,arr2[pick])
        result[arr[i]]  = arr2[pick]
        arr2.splice(pick,1)
    }
    return result;
}


console.log(mapPlayers(['Avi','Yossi','Haim','Dikla','Esti','Fux','Galit','Hajaj']))