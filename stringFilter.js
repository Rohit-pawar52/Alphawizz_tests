var A = "accaessssssssfrrjwworpssjj";
var B = A.split("");

  for (j = 0; j < B.length; j++) {
    if (B[j] == B[j + 1]) {
      // console.log(B[j], B[j + 1]);
      B.splice(j, 2);
      j--;
    }
  }
  var A = B.join("");
console.log(A)