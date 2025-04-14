/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

let matrix =[[1,2,3],[4,5,6],[7,8,9]]
var spiralOrder = function(matrix) {
    let ans =[]
    let n= matrix.length
    let m= matrix[0].length
    let sRow =0
    let endCol=m-1
    let sCol =0
    let endRow= n-1
    let total=m*n
    let count =0
    while(count<total) {

        // print starting row

        for(let i=sCol;total>count && i<=endCol;i++) {
            ans.push(matrix[sRow][i])
            count++
        }
        sRow++
        // print end col

        for(let i= sRow;total>count && i<=endRow;i++) {
            ans.push(matrix[i][endCol])
            count++
        }
        endCol--

        // print end row

        for(let i= endCol;total>count && i>=sCol;i--) {
            ans.push(matrix[endRow][i])
            count++
        }
        endRow--

        // print starting col
        for(let i=endRow;total>count && i>=sRow;i--) {
            ans.push(matrix[i][sCol])
            count++
        }
        sCol++

    }
return ans
    
    
};

console.log(spiralOrder(matrix))