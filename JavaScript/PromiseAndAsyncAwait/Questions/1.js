// Que1 :
// Execute Promises in series :

const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
};
const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
  });
};
const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
  });
};

// Approch1  using async and await

// const executeTasks = async (tasks) => {
//   for (task of tasks) {
//     try {
//       let response = await task();
//       console.log(response);
//     } catch (error) {
//       console.log('error is ' ,error);
//     }
//   }
// };

// approch 2 , without using async await

const solve = (tasks, currentIndex) => {
  if (currentIndex === tasks.length) {
    return;
  }
  tasks[currentIndex]()
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log("error is", error))
    .finally(() => {
      solve(tasks, currentIndex + 1);
    });
};

const executeTasks = (tasks) => {
  solve(tasks, 0);
};
executeTasks([task1, task2, task3]);
