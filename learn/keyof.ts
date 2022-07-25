// function that takes a list of items and it grabs whatever a given
// key is from all of the items
// they will all have the same keys but if we want one key in particular
// and we want that returned as an array
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  // KeyType has to be one of the keys in DataType
  key: KeyType
  // the return type is going to be DataType dereferenced by KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key])
}

const users = [
  { name: 'Katie', email: 'katie@test.com' },
  { name: 'Luke', email: 'luke@test.com' },
  { name: 'Han', email: 'han@test.com' },
]

console.log(pluck(users, 'name')) // -> [ 'Katie', 'Luke', 'Han' ]

// ...

interface BaseEvent {
  time: number
  user: string
}
interface EventMap {
  // the add to cart event it the sum of BaseEvent and the object below
  addToCart: BaseEvent & { quantity: number; productId: string }
  checkout: BaseEvent
}
function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data])
}

sendEvent('addToCart', {
  productId: 'foo',
  user: 'bar',
  quantity: 10,
  time: 2000,
})
sendEvent('checkout', { time: 20, user: 'Katie' })
