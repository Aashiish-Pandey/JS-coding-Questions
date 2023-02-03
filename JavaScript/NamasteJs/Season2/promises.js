// const cart = ["shirt", "Shoe", "Belt"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });


const API = 'https://jsonplaceholder.typicode.com/todos/1'

const apiData = fetch(API)

apiData.then(response=>console.log(response))