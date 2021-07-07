let arr = [1, 2, 3, 4, 5]

let miniMaxSum = arr => {
    let min = arr[0]
    let max = min
    let sum = 0

    arr.forEach(el => {
        sum += el

        if (max < el) {
            max = el
        }

        if (min > el) {
            min = el
        }
    });

    return [sum - max, sum - min]
}

console.log(miniMaxSum(arr))