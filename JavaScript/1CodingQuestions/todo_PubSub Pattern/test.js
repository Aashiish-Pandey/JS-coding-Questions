class Move {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(subscriber) {
    this.subscribers.add(subscriber);
  }
  run(distance) {
    for (let subscriber of this.subscribers) {
      subscriber(distance);
    }
  }
}

const sub1 = (data) => console.log("sub1 ,", data);
const sub2 = (data) => console.log("sub2 ,", data);
const sub3 = (data) => console.log("sub3 ,", data);

const move = new Move();
move.subscribe(sub1);
move.subscribe(sub2);
move.subscribe(sub3);
move.run(1000)