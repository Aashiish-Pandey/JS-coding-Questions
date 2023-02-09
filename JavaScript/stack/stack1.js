class Stack {
  constructor() {
    this.stack = [];
  }
  push(el) {
    this.stack[this.stack.length] = el;
  }
  pop() {
    if (this.stack.length) {
      return this.stack[this.stack.length--];
    } else {
      alert("under flow");
    }
  }
  isEmpty() {
    return this.stack.length ? false : true;
  }
  stackSize() {
    return this.stack.length;
  }
  printStack() {
    return this.stack;
  }
  getTop() {
    return this.stack[this.stack.length - 1];
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(5);
s1.push(3);
s1.pop()


console.log(s1.printStack());
console.log(s1.getTop());
