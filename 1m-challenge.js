// 1. plus minus
// input [-2, -3, 3, 4, 0]
// 
function plusMinus(arr) {
    const arrLength = arr.length
    const plus = arr.filter(item => item > 0).length / arrLength 
    const minus = arr.filter(item => item < 0).length / arrLength
    const zero = arr.filter(item => item == 0).length / arrLength
    
    console.log(plus)
    console.log(minus)
    console.log(zero)
}

// Find min max val
function minMaxSum(arr) {
    let sumVal = []
    arr.forEach((_, index) => {
        const sum = arr.filter((__, indexNum) => indexNum != index).reduce((prev, current) => {
            return prev + current
        })
        sumVal.push(sum)
    })
    
    console.log(`${Math.min(...sumVal)} ${Math.max(...sumVal)}`)
}
