function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, "10"); // This line will not cause a compile-time error but will result in unexpected behavior at runtime
console.log(result);