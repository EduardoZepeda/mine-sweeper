type coordinate = [number, number]
type coordinates = coordinate[]

const getAdjacentTiles = (coordinate: coordinate): coordinates => {
  const x = coordinate[0]
  const y = coordinate[1]
  return [
    [x + 1, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x - 1, y + 1],
    [x - 1, y - 1],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1]
  ]
}

export default getAdjacentTiles
