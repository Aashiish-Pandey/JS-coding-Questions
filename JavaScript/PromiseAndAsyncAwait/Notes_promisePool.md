# 🔥 1. Promise Pool (Concurrency Limit) – MOST ASKED QUESTION

### ❓ Problem

* Fetch 10 APIs
* Only **3 parallel at a time**
* Preserve order
* Return final results


# ✅ Example we’ll use

function fakeApi(name, data, delay = 1000, fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        console.log(`❌ ${name} failed`);
        reject(name + " failed");
      } else {
        console.log(`✅ ${name} done`);
        resolve(data);
      }
    }, delay);
  });
}



const tasks = [
  () => fakeApi("A", 1, 1000),
  () => fakeApi("B", 2, 1000),
  () => fakeApi("C", 3, 1000),
  () => fakeApi("D", 4, 1000),
  () => fakeApi("E", 5, 1000),
];
```

```js
promisePool(tasks, 3);
```

---

# 🧩 Your code (simplified)

```js
async function promisePool(tasks, limit) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const current = index++;
      results[current] = await tasks[current]();
    }
  }

  const workers = Array.from({ length: limit }, worker);
  await Promise.all(workers);
  return results;
}
```

---

# 🧠 Step-by-step FLOW (VERY IMPORTANT)

---

## 🟢 Step 1: Initialization

```js
results = []
index = 0
limit = 3
tasks.length = 5
```

Nothing has started yet.

---

## 🟢 Step 2: Create workers

```js
const workers = Array.from({ length: 3 }, worker);

Array.from({ length: 3 }, worker)
        ↓
[ worker(0), worker(1), worker(2) ]
        ↓
3 async workers running in parallel


This calls `worker()` **3 times immediately**.

So now we have:

```
worker #1 started
worker #2 started
worker #3 started
```

⚠️ **Important**:
Workers start running immediately because `worker()` is called.

---

# 🧵 Step 3: Workers start competing for tasks

All workers share **the same `index` variable**.

### Worker 1

```js
current = index++  // 0
runs task[0] → A
awaits it
```

### Worker 2

```js
current = index++  // 1
runs task[1] → B
awaits it
```

### Worker 3

```js
current = index++  // 2
runs task[2] → C
awaits it
```

### ✅ Now 3 tasks are running in parallel:

```
A, B, C
```

---

# 🕒 After 1 second (task A finishes first)

Worker 1 resumes:

```js
results[0] = 1
```

Worker 1 loop continues:

```js
current = index++  // 3
runs task[3] → D
```

---

# 🕒 After another moment (task B finishes)

Worker 2 resumes:

```js
results[1] = 2
current = index++ // 4
runs task[4] → E
```

---

# 🕒 Worker 3 finishes task C

```js
results[2] = 3
index = 5 → loop ends → worker exits
```

---

# 🕒 Remaining tasks finish

| Worker  | Task | Result index |
| ------- | ---- | ------------ |
| worker1 | D    | results[3]   |
| worker2 | E    | results[4]   |

All workers exit.

---

# 🟢 Step 4: Promise.all waits for workers

```js
await Promise.all(workers);
```

Now all workers are done → resolve.

---

# 🟢 Step 5: Return results

```js
return results;
```

Final result:

```js
[1, 2, 3, 4, 5]
```

Order preserved ✔️
Max 3 parallel ✔️
Fast ✔️
No race condition ✔️

---

# 🧠 Visual Timeline

```
Time →
Worker1: A -------- D --------|
Worker2: B -------- E --------|
Worker3: C --------|
```

---

# 🎯 Why this pattern is genius (interview gold)

### ✅ Shared index = task queue

### ✅ While loop = keeps worker alive

### ✅ limit = number of workers

### ✅ await = frees event loop

### ✅ Promise.all = join point

---

# 💡 One-line explanation for interview

> We create N async workers that pull tasks from a shared index until all tasks are consumed, ensuring concurrency control while preserving order.

---

# ⚠️ Common confusion

### ❌ Why no race condition?

Because:

```js
const current = index++;
```

is **synchronous** (JS is single-threaded)

---

# ⚠️ Why not use for loop?

Because:

* for loop = sequential
* worker pool = parallel

---

# 🏁 Final mental model

```
Task queue → Workers → Results
```

```
Workers pull tasks one by one
until queue is empty
```

---

If you want, I can show:

* diagram version
* how to write this in interviews
* common mistakes
* async/await vs promise version
* how Netflix/YouTube uses this

Just tell me 🔥
