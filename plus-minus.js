// kalkulasi rasio dari element yg positif, negatif, dan nol. 
// Print nilai decimal dari setiap fraction dengan 6 digit dibelakang koma

let arr = [1,1,0,-1,-1]

let plusMinus = (arr) => {
    let positive = 0, negative = 0, zero = 0
    for(let i = 0; i < arr.length; i++) {
        // hit n miss
        if(arr[i] > 0){
            positive += 1
        } else if (arr[i] < 0) {
            negative += 1
        } else {
            zero += 1
        }
    }

    // calculate fraction
    // toFixed: add N digit after coma
    console.log((positive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}

plusMinus(arr)