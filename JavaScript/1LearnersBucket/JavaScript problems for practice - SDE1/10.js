const question = {
//     groupBy() polyfill
// Success rate: 7.58%
// Write the polyfill for the groupBy() method that accepts a collection and iteratee as arguments and returns the object that has grouped the collection values using iteratee as the key.

// Example
// Input:
// groupBy([6.1, 4.2, 6.3], Math.floor);
// groupBy(["one", "two", "three"], "length");

// Output:
// // { 6: [6.1, 6.3], 4: [4.2] }
// // { 3: ['one', 'two'], 5: ['three'] }
// Note - Here the iteratee can be a function or a property.
//
 }


 const Employee = [
    {name :'Ashish' ,role : 'dev'},
    {name :'Prince' ,role : 'BA'},
    {name :'Praveen' ,role : 'BA'},
    {name :'Diplai' ,role : 'Manager'},
    {name :'Siddharth' ,role : 'QA'},
    {name :'Amit' ,role : 'QA'},
    {name :'Sachin' ,role : 'cricket'},
    {name :'Dhoni' ,role : 'cricket'},
 ]

//  const grouping= Object.groupBy(Employee ,(employee)=>employee.role)

//  console.log(grouping)

const groupBy = function(collection ,iteratee) {


    const ans = {}

    const keyfn = typeof iteratee ==='function' ? iteratee : (item)=>item[iteratee]
  for(let item of collection) {

    let key = keyfn(item)
   if(key) {
     if(ans[key]) {
        ans[key].push(item)
    } else {
        ans[key]=[item]
    }
   }
  }

return ans
}

// console.log(groupBy(Employee ,'role'))

console.log(groupBy(["one", "two", "three"], "length"))