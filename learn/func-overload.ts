interface Coordinate {
  x: number
  y: number
}

// parse a coord from an object
export const parseCoordinateFromObject = (obj: Coordinate): Coordinate => {
  return {
    ...obj,
  }
}

export const parseCoordinateFromNum = (x: number, y: number): Coordinate => {
  return {
    x,
    y,
  }
}

function parseCoordinate(obj: Coordinate): Coordinate // object variance
function parseCoordinate(x: number, y: number): Coordinate // number variance
function parseCoordinate(str: string): Coordinate // string variance
// implement function (unknown = "any" but you have to cast it before you use it, safe "any")
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  }

  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    }
  } else if (typeof arg1 === 'string') {
    ;(arg1 as string).split(',').forEach((str) => {
      // string split our new array ['x:12', 'y:32']
      const [key, value] = str.split(':') // ['x': '12', 'y': '32']
      coord[key as 'x' | 'y'] = parseInt(value) // { x: 12, y: 32 }
    })
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }

  return coord
}

console.log(parseCoordinate(10, 20)) // { x: 10, y: 20 }
console.log(parseCoordinate({ x: 75, y: 90 })) // { x: 75, y: 90 }
console.log(parseCoordinate('x:12,y:32')) // { x: 12, y: 32 }
