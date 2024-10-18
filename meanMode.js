// code for mean median
let data = [12, 48, 65, 62, 62, 62, 62, 41, 64, 14, 35, 48, 58, 7];
totle = data.length;
let sum = 0;
for (i = 0; i < totle; i++) {
  sum += data[i];
  for (j = 0; j < totle; j++) {
    if (data[j] > data[i]) {
      [data[i], data[j]] = [data[j], data[i]];
    }
  }
}
console.log("Mean of data is: ", sum / totle);
console.log("after sorting data: ", data);

median = Math.floor(totle / 2);
if (totle % 2 !== 0) {
  console.log("median of odd data is: ", data[median]);
} else {
  console.log("median of even data is: ", data[median - 1], data[median]);
}

// code for mode
const result = [];
let inc = 0; 
let mode = null; 

for (let i = 0; i < data.length; i++) {
  let count = 0;

  for (let j = 0; j < data.length; j++) {
    if (data[i] == data[j]) {
      count++; 
    }
  }

  if (inc < count) {
    inc = count; 
    mode = data[i];
  }
}

console.log("The Mode is:", mode, "reapet times: ", inc);
