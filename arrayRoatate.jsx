var A = [0, 1, 2, 4, 5, 6, 7];
var B = (A[(Math.floor(Math.random() * A.length))]);
console.log(B)

var array = [];
for (var i = B; i < A.length; i++) {
  array.push(A[i]);
}
for (var j = 0; j < B; j++) {
  array.push(A[j]);
}
console.log(array);
