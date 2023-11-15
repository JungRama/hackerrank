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

// timeConversion function
function timeConversion(s) {
    const timeFormat = s.substr(s.length-2, 2)
    const isPM = timeFormat == 'PM'
    const time = s.split(':')
    const hour = time[0]
    const minute = time[1]
    const second = time[2].replace(timeFormat, '')
    
    let timeConverted = null 
    
    if(isPM) {
        const parsedHours = () => {
            if(parseInt(hour) + 12 >= 24) {
                return '12'
            }else {
                return parseInt(hour) + 12
            }
        }
        
        timeConverted = `${parsedHours()}:${minute}:${second}`
        console.log(timeConverted)
    }else {
        
        timeConverted = `${hour == '12' ? '00' : hour}:${minute}:${second}`
        console.log(timeConverted)
    }
    
    return timeConverted
}

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */
function matchingStrings(strings, queries) {
    const result = [];
    queries.forEach((item, index) => {
        const lengthTotal = strings.filter(_ => _ === item).length
        result.push(lengthTotal)
    })
    
    return result
}


/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    const helpers = []
    
    a.forEach((item) => {
        helpers.push({
            key: item,
            total: a.filter(n => item === n).length
        })
    })
    
    return helpers.filter(item => item.total <= 1)[0].key
}
