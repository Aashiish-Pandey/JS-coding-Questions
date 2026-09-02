// by dev tech tools 
// https://www.youtube.com/watch?v=SCHK40yvIdM&list=PL4ruoTJ8LTT8L0AV6yHM0-QBfPz0m634W&index=2



const executerFn = (resolve, reject) => {
  resolve(10);
  reject(20);

  // PENDING
  //resolve() => PENDING TO FULLFILLED (TERMINAL)
  //reject()=> PENDING TO REJECTED (TERMINAL)
};

const STATES = {
  PENDING: "PENDING",
  FULLFILLED: "FULLFILLED",
  REJECTED: "REJECTED",
};

class CustomPromise {
  #value = 0;
  #state = STATES.PENDING;

  #_resolve(value) {
    queueMicrotask(() => {
      if (this.#state !== STATES.PENDING) {
        return;
      }
      this.#value = value;
      this.#state = STATES.FULLFILLED;
    });
  }

  #_reject(value) {
    queueMicrotask(() => {
      if (this.#state !== STATES.PENDING) {
        return;
      }
      this.#value = value;
      this.#state = STATES.REJECTED;
    });
  }
  constructor(executerFn) {
    this.resolve = this.#_resolve.bind(this);
    this.reject = this.#_reject.bind(this);
    try {
      executerFn(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }
  then(resolutionHandler ,rejectionHandler) {

    new CustomPromise((resolve,reject)=>{

    })

  }

  catch() {

  } 
}

const p = new CustomPromise(executerFn);
// p.then()
// p.catch()

function init() {
  return new CustomPromise((r) => r + 10);
}
init().then(
  (v) => console.log(v + 1), //Resolution handler
  (err) => console.log(err), // Rejection Handler
);
