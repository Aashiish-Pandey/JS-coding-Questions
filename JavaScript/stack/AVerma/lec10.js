// https://www.youtube.com/watch?v=asf9P2Rcopo&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd&index=10
// https://www.geeksforgeeks.org/design-and-implement-special-stack-data-structure/

// Design a Data Structure SpecialStack that supports all the
// stack operations like push(), pop(), isEmpty(), isFull() and an
// additional operation getMin() which should return minimum element from the SpecialStack

// Implement minStack   😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(el) {
    if (
      !this.minStack.length ||
      el <= this.minStack[this.minStack.length - 1]
    ) {
      this.stack[this.stack.length] = el;
      this.minStack[this.minStack.length] = el;
    } else {
      this.stack[this.stack.length] = el;
    }
  }
  pop() {
    if (this.stack.length) {
      if (this.stack.getTop() === this.minStack[this.minStack.length - 1]) {
        this.stack.length--;
        this.minStack.length--;
      } else {
        this.stack.length;
      }
    } else {
      alert("under flow");
    }
  }

  getMin() {
    if (!this.minStack.length) {
      alert("stack is empty");
    } else {
      return this.minStack[this.minStack.length - 1];
    }
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(5);
s1.push(3);
s1.push(8);
s1.push(0);

console.log(s1.getMin());
