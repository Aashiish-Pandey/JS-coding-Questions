const mylist = document.getElementById('list')

mylist.before('Before list')

let l1= document.createElement('li')
l1.textContent='l1'
let l2= document.createElement('li')
l2.textContent='l2'
let l3= document.createElement('li')
l3.textContent='l3'
let l4=document.createElement('li')
l4.textContent='l4'

mylist.prepend(l1)
mylist.after('After list')
const list2 = document.createElement('ul')
mylist.replaceWith(list2)
// mylist.replaceWith()

