type ThreeDCoordinate = [x: number, y: number, z: number]

const addThreeDCoordinate = (
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate => {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}
console.log(addThreeDCoordinate([20, 40, 60], [80, 100, 120])) // -> [ 100, 140, 180 ]

// tuples with different types (useState tuple)
const simpleStringState = (
  initialValue: string
): [() => string, (v: string) => void] => {
  let str: string = initialValue

  return [
    () => str,
    (v: string) => {
      str = v
    },
  ]
}

const [str1Getter, str1Setter] = simpleStringState('Hello')
const [str2Getter, str2Setter] = simpleStringState('Katie')
console.log(str1Getter()) // -> Hello
console.log(str2Getter()) // -> Katie
str1Setter('Goodbye')
console.log(str1Getter()) // -> Goodbye
console.log(str2Getter()) // -> Katie
