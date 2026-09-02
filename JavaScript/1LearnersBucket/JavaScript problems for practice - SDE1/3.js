// Write a polyfill without using ES6 features to flatten an N depth array.

// Flattening an array is simple process of merging different N dimensional sub arrays to form a single array.

// Example:

// Input:
// [[[1, [1.1]], 2, 3], [4, 5]]

// Output:
// [1, 1.1, 2, 3, 4, 5]

const arr =[1,2,[3,4],[5,6,[7,8]],[9,[10,[11,12]]]]

Array.prototype.flatArray = function (depth) {


    let result =[]

    function flat(arr,depth) {

        for (let i=0;i<arr.length;i++) {
            if(depth>0 && Array.isArray(arr[i])) {
                flat(arr[i] ,depth-1)

            } else {
                result.push(arr[i])
            }
        }

    }

    flat(this,depth)
    return result

}



console.log(arr.flatArray(Infinity))
