import { coordinates } from "../context/gameState"

const excludeCoordinates = (firstArr: coordinates, secondArr: coordinates): coordinates => {
    // This function substracts elements secondArr from firstArr
    // firstArr - secondArr
    // [[1,1], [2,2], [3,3]] - [[1,1]] = [[2,2], [3,3]]
    return firstArr.filter((firstArrElement) => !secondArr.some(secondArrElement => firstArrElement[0] === secondArrElement[0] && firstArrElement[1] === secondArrElement[1]))
}

export default excludeCoordinates