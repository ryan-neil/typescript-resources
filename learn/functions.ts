export default function addNumbers(a: number, b: number): number {
  return a + b
}

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`

// default param function
export const addNumberString = (str: string, num: number = 2): string =>
  `${num}${str}`

// union types: certain param to be one of a certain number of diff types
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`

// void function: when we're not returning anything
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param))
}

// promise function: when the function returns a promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

// multiple arguments function
export const introduce = (salutation: string, ...names: string[]): string => {
  return `${salutation} ${names.join(' ')}`
}
