function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addWithGuard(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)){
    return a + b;
  } else {
    throw new Error("Invalid input: Both parameters must be numbers");
  }
}

const result1 = addSafe(5, 10); // Correct usage
const result2 = addWithGuard(5, "10"); //Throws error at runtime
const result3 = addWithGuard(5, 10); // Correct usage
console.log(result1); // 15
console.log(result2); //Throws Error
console.log(result3); //15