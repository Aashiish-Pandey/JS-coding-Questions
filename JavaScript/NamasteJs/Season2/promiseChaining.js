//😎😎😎😎😎😎😎😎 Promise Creation  😎😎😎😎😎😎😎😎

// const cart = ["Shoes", "Shirt", "Pant"];
// const promise = createOrder(cart);
// console.log(promise)

// promise.then(function (orderId) {
// //   proceedToPayment(orderId);
// console.log(orderId)
// console.log(promise)
// }).catch(data=>{
//     console.log(data)
//     console.log(promise)
// })

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const error = new Error("Cart is not valid");
//       setTimeout(function(){
//         reject(error)
//       },2000)
//     }
//     const orderId ="12345"
//     if(orderId) {
//         setTimeout(function(){
//             resolve(orderId)
//         }, 5000)

//     }
//   });
//   return pr;
// }

// function validateCart(cart) {
//     return false
// }

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎 Promise Chaining 1 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// const cart = ["Shoes", "Shirt", "Pant"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);

//     return orderId;   // note:🧐🧐🧐 we can return any data or a promise in promise chain
//                       // and that will pe passed down to the chain
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const error = new Error("Cart is not valid");
//       setTimeout(function () {
//         reject(error);
//       }, 2000);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function validateCart(cart) {
//   return true;
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve("Payment Successfull");
//   });
// }

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎 Promise Chaining 2 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// Suppose we want to go to payment even if cart is not valid

// const cart = ["Shoes", "Shirt", "Pant"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);

//     return orderId;
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .then(function (orderId) {
//     console.log(orderId)
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const error = new Error("Cart is not valid");
//       setTimeout(function () {
//         reject(error);
//       }, 2000);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function validateCart(cart) {
//   return false;
// }

// function proceedToPayment(orderId) {
//   console.log(orderId)
//   return new Promise((resolve, reject) => {
//     resolve("Payment Successfull");
//   });
// }

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎 Promise Chaining 3 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// Note🧐🧐🧐 catch will handle any error that is coming before it in the promise chain.
// then will get executed  even if it is present after catch.

const cart = ["Shoes", "Shirt", "Pant"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);

    return orderId;
  })
  .catch((data) => {
    console.log("Hello Hello");
  })

  .then(function (orderId) {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log("No matters what happens , I will be called");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid");
      setTimeout(function () {
        reject(error);
      }, 2000);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  console.log(orderId);
  return new Promise((resolve, reject) => {
    resolve("Payment Successfull");
  });
}
