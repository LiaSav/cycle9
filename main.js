let n = prompt("Hi, friend! \nEnter a number N, greater than 0.");
if (n) {
  alert(
    "The function returns the value of the double factorial\n\n" +
      cycle(n)
  );
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = 1;
  for (let i = n; i >= 1; i -= 2) {
    if (n) {
      x *= i;
    }
  }
  return x;
}
