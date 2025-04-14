let matrix =[[1,2,3],[4,5,6],[7,8,9]]

var rotate = function(matrix) {
    let ans=[]
    let m= matrix[0].length
    let n= matrix.length
    for(let i=0;i<n;i++) {
        let row=[]
        for(let j=0;j<m;j++) {
            let k= n-1-i
            row.unshift(matrix[j][k])

        }
        ans.unshift(row)
    }
    return ans
    
};

console.log(rotate(matrix))