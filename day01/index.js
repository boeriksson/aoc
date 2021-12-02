import fs from 'fs'

const calcInc = (rowArray, compare) => {
    let inc = 1
    for (let i = 0; i < rowArray.length; i++) {
        inc = inc + compare(rowArray, i)
    }
    console.log(inc)
}

const singleCompare = (rowArray, i) => rowArray[i] > rowArray[i-1] ? 1 : 0
const getSlide = (rowArray, i) => parseInt(rowArray[i]) + parseInt(rowArray[i + 1]) + parseInt(rowArray[i + 2])
const slideCompare = (rowArray, i) => {
    console.log(`left: ${getSlide(rowArray, i)} right: ${getSlide(rowArray, i + 1)} increase: ${getSlide(rowArray, i) < getSlide(rowArray, i + 1) ? 1 : 0}`)
    return getSlide(rowArray, i) < getSlide(rowArray, i + 1) ? 1 : 0;
}

const getLargerMeasurements = (part) =>
    fs.readFile('input.txt', (error, data) =>
        calcInc(data.toString().split('\n'), part === "part1" ? singleCompare : slideCompare))

getLargerMeasurements(process.env.part || "part2")