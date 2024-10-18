let value = 1754;
console.log(value)
let keys = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let val = keys.length;
for (let i = 0; i < val; i++) {
    if (value >= keys[i]){
        res = value % keys[i];
        times = Math.floor(value / keys[i]);
        value = res;
        console.log(keys[i],"*", times)
    }
}