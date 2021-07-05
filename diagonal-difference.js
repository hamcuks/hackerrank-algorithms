let arr = [
    [1,2,3],
    [4,5,6],
    [9,8,9],
]

let diagonalDifference = (arr) => {
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr.length; i++) {
        a += arr[i][i]
        b += arr[i][(arr.length - 1) - i]
    }

    return Math.abs(a-b)
}

console.log(diagonalDifference(arr))