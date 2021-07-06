// - - - - - -
//      # 
//     ## 
//    ### 
//   #### 
//  #####
// ######

let stairCase = n => {
    for (let i = 0; i <= n; i++) {
        let output = ''

        for (let j = n - 1; j >= i; j--) {
            output += ' '
        }

        for (let j = 0; j <= i; j++) {
            output += '#'
        }

        console.log(output)
    }
}

stairCase(6)
