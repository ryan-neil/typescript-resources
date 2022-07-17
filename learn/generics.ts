// generic types:
// "T" is going to be replaced with whatever is in initial state
const simpleState = <T>(initialValue: T): [() => T, (v: T) => void] => {
  let val: T = initialValue

  return [
    () => val,
    (v: T) => {
      val = v
    },
  ]
}

const [state1Getter, state1Setter] = simpleState(10) // since initial is now 10 "T" becomes type number
console.log(state1Getter()) // -> 10
state1Setter(50)
console.log(state1Getter()) // -> 50

// override "T"
const [state2Getter, state2Setter] = simpleState<string | null>(null)
console.log(state2Getter()) // -> null
state2Setter('Some string')
console.log(state2Getter()) // -> Some string
