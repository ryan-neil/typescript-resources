// optional parameters
const printIngredient = (
  quantity: string,
  ingredient: string,
  extra?: string
) => {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`)
}
// printIngredient('1C', 'Flour')
// printIngredient('1C', 'Sugar', 'Flour')

// optional fields
interface User {
  id: string
  info?: {
    email?: string
  }
}

const getEmail = (user: User): string => {
  return user?.info?.email ?? ''
}
// console.log(getEmail({ id: '0', info: { email: 'user@email.com' } }))

// optional callbacks
const addWithCallback = (x: number, y: number, callback: () => void) => {
  console.log(x, y)
  if (callback) {
    callback()
  }
  // or
  callback?.()
}
