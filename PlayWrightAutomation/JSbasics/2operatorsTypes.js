const flag = true;

if (!flag) {
  console.log("condition is satisfied");
} else {
  console.log("condition not satisfied");
}

var i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
var i = 0;
do {
  i++;
} while (i > 10);
console.log("i este " + i);

let n = 0;
for (let k = 0; k < 73; k++) {
  if (k % 2 == 0 && k % 4 == 0) {
    n++;
    console.log("K este " + k);
    if (n == 3) break;
  }
}
