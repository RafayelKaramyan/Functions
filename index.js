//1.Create a JavaScript function which converts the given array of numbers to an array of booleans. Each element is true if the number is a prime number, and false otherwise.
function primeValues(arr) {
  return arr.map(element => {
    const x = Math.abs(element);
    if(x <= 2) return true;
    if(x % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(x); i+=2) {
      if(x % i === 0) {
        return false;
      }
    }
    return true;
  });
}
console.log(primeValues([4, 2, 7, 10, 13]));
console.log(primeValues([17, 3, 21]));