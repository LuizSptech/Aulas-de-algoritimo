let s = [1,2,3,2,4,5,3,6];
let duplicados = 0;
for(let i = 0; i < s.length; i++){
    for(let j = i + 1; j < s.length; j++){
        if(s[i] === s[j]){ duplicados += 1 }
              

    }
console.log(duplicados)  
}