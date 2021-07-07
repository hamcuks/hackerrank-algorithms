// give 5 positive int, find min and max, then subtract sum of array with min and max value

let arr = [1, 2, 3, 4, 5]

let miniMaxSum = arr => {
    let min = arr[0]
    let max = min
    let sum = 0

    arr.forEach(el => {
        // find sum of array value
        sum += el

        // find max value
        if (max < el) {
            max = el
        }
        
        // find min value
        if (min > el) {
            min = el
        }
    });

    return [sum - max, sum - min]
}

console.log(miniMaxSum(arr))