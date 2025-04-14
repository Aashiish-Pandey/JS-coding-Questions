// create Stack
// Sort Stack
// delete the middle element of the stack

// reverse a stack in O(1)

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) return "underflow";
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    if (this.items.length === 0) return true;
  }

  printStack() {
    return this.items;
  }
  stackSize() {
    return this.items.length;
  }
}

let stack1 = new Stack();

stack1.push(2);
stack1.push(4);
stack1.push(1);
stack1.push(9);
stack1.push(3);
console.log(stack1);
// console.log(stack1.top())
// console.log(stack1.pop())
// console.log(stack1)
// console.log(stack1.top())

// console.log(stack1.isEmpty());
// console.log(stack1.printStack()); [2,4,1,9,3]
// console.log(stack1.pop());
// console.log(stack1.printStack());

// sort stack :

// function sortStack() {
//   if (stack1.isEmpty || stack1.printStack.length == 1) return;

//   let temp = stack1.pop();
// }

// delete the middle element of a stack
// middle = n+1/2 , where n is total element in the stack

let k = Math.floor(stack1.stackSize() / 2 + 1);

function delMiddle(stack, k) {
  if (stack.stackSize() === 1) {
    stack.pop();
    return;
  }

  let temp = stack.top();
  stack.pop();
  delMiddle(stack, k - 1);
  stack.push(temp);
}

console.log(stack1.printStack());
delMiddle(stack1, k);
console.log(stack1);

// reverse the stack

function revStack(stack) {
  if (stack.stackSize() === 1) {
    return;
  }

  let temp = stack.pop();

  revStack(stack);
  insert(stack, temp);
}

function insert(stack, temp) {
  if (stack.stackSize() === 0) {
    stack.push(temp);
    return;
  }

  let newTemp = stack.pop();
  insert(stack, temp);
  stack.push(newTemp);
}

console.log(stack1.printStack());
revStack(stack1);
console.log(stack1.printStack());
