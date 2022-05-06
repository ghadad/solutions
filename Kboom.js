function kboom(n,k) { 
    for(let i=k;i<=n;i++) {
      if(i%k===0 || i.toString().split('').includes('' +k)) {
        console.log(i," boom !") ;
    } else {
        console.log(i)
    }
}
}

console.log(kboom(120,7))