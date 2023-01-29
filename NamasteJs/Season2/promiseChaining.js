// Promise Creation

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

// Promise Chaining .........................................................................................

const cart = ["Shoes", "Shirt", "Pant"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    
    return orderId
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  }).then(function(paymentInfo){
    console.log(paymentInfo)
  })
  .catch((data) => {
    console.log(data);
    
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
  return true;
}


function proceedToPayment(orderId) {
    return new Promise((resolve,reject)=>{

        resolve("Payment Successfull")
    })
}