# TypeScript Type Coercion Example

This repository demonstrates a subtle but common error in TypeScript: type coercion can lead to runtime errors even if your code compiles without errors.

The `bug.ts` file contains a function that adds two numbers. However, it's called with a string, which TypeScript's type system doesn't prevent. This results in implicit type coercion and an unexpected result at runtime.

The `bugSolution.ts` file shows a solution by using type guards or narrowing the types to prevent this issue.

## How to Reproduce
1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Run the compiled JavaScript to see the unexpected output.