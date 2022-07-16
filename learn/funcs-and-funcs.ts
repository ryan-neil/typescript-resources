// functions with function parameters
export const printToFile = (text: string, callback: () => void): void => {
  console.log(text)
  callback()
}

export const arrayMutate = (
  numbers: number[],
  mutate: (v: number) => number
): number[] => {
  return numbers.map(mutate)
}

// console.log(arrayMutate([1, 2, 3], (v) => v * 10)) // -> [ 10, 20, 30 ]

// refactored
type MutationFunctionType = (v: number) => number
export const arrayMutateRefactor = (
  numbers: number[],
  mutate: MutationFunctionType
): number[] => {
  return numbers.map(mutate)
}

// console.log(arrayMutateRefactor([10, 20, 30], (v) => v * 10)) // -> [ 100, 200, 300 ]

// functions that return functions (closure)
type AdderFunctionType = (val: number) => number
export const createAdder = (num: number): AdderFunctionType => {
  return (val: number) => num + val
}

const addOne = createAdder(1)
console.log(addOne(100)) // -> 101
