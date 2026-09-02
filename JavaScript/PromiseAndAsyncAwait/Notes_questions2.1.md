Perfect 🔥
Below is **FULLY RUNNING CODE** for **ALL 20 interview patterns**, using **dummy APIs, fake delays, failures, and logs** so you can literally **copy–paste and run in browser / Node** and *see async flow in action*.

I’ll reuse a single helper so everything feels real.

---

# 🔧 Common Fake API Helper (used everywhere)

```js
function api(name, data, delay = 1000, fail = false) {
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
```

---

# 🔥 1. Promise Pool (Concurrency Limit)

```js
async function promisePool(tasks, limit) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

const tasks = Array.from({ length: 10 }, (_, i) =>
  () => api(`API-${i}`, i, 1000)
);

promisePool(tasks, 3).then(r => console.log("POOL RESULT:", r));
```

---

# 🔥 2. Parallel + Chain Mix

```js
function getUser() { return api("user", { id: 1 }); }
function getPosts(id) { return api("posts", ["p1", "p2"]); }
function getComments(id) { return api("comments", ["c1"]); }

getUser()
  .then(u => Promise.all([getPosts(u.id), getComments(u.id)]))
  .then(([p, c]) => console.log({ p, c }));
```

---

# 🔥 3. Retry with Delay

```js
function retry(fn, retries = 3, delay = 500) {
  return fn().catch(err => {
    if (retries === 0) throw err;
    return new Promise(r => setTimeout(r, delay))
      .then(() => retry(fn, retries - 1, delay));
  });
}

let count = 0;
retry(() => api("unstable", "OK", 500, ++count < 3))
  .then(console.log)
  .catch(console.error);
```

---

# 🔥 4. Fetch with Timeout (race)

```js
function fetchWithTimeout(name, ms) {
  return Promise.race([
    api(name, name, 1000),
    new Promise((_, r) => setTimeout(() => r("timeout"), ms))
  ]);
}

fetchWithTimeout("data", 700).then(console.log);
```

---

# 🔥 5. Sequential Validation → Parallel Submit

```js
function validate() { return api("validate", true, 500); }
function saveDB() { return api("db", true); }
function sendMail() { return api("mail", true); }
function notify() { return api("notify", true); }

validate()
  .then(() => Promise.all([saveDB(), sendMail(), notify()]))
  .then(() => console.log("🎉 FORM SUBMITTED"));
```

---

# 🔥 6. Parallel Fetch → Sequential Process

```js
Promise.all([
  api("fetch1", 1),
  api("fetch2", 2),
  api("fetch3", 3)
]).then(async results => {
  for (const r of results) {
    await api("process-" + r, null, 400);
  }
});
```

---

# 🔥 7. Partial Success (allSettled)

```js
Promise.allSettled([
  api("posts", ["p"]),
  api("comments", null, 700, true),
  api("likes", [1,2])
]).then(res => {
  const ok = res.filter(r => r.status === "fulfilled").map(r => r.value);
  console.log("RENDER:", ok);
});
```

---

# 🔥 8. Fallback API (Promise.any)

```js
Promise.any([
  api("primary", null, 500, true),
  api("secondary", "OK", 800),
  api("backup", "OK", 1000)
]).then(console.log);
```

---

# 🔥 9. Cache + Network Mix

```js
function getCache() { return api("cache", null, 300); }

getCache()
  .then(c => c || Promise.all([
    api("api1", 1),
    api("api2", 2)
  ]))
  .then(console.log);
```

---

# 🔥 10. Batch API Requests

```js
async function batchRequests(tasks, size) {
  const results = [];
  for (let i = 0; i < tasks.length; i += size) {
    const batch = tasks.slice(i, i + size);
    results.push(...await Promise.all(batch.map(t => t())));
  }
  return results;
}

batchRequests(
  Array.from({ length: 6 }, (_, i) => () => api("B-" + i, i, 500)),
  2
).then(console.log);
```

---

# 🔥 11. Waterfall Pattern

```js
function waterfall(tasks) {
  return tasks.reduce((p, t) => p.then(t), Promise.resolve());
}

waterfall([
  () => api("step1", 1),
  x => api("step2", x + 1),
  x => api("step3", x + 1)
]).then(console.log);
```

---

# 🔥 12. Async Map (parallel)

```js
(async () => {
  const res = await Promise.all(
    [1,2,3].map(i => api("map-" + i, i * 2))
  );
  console.log(res);
})();
```

---

# 🔥 13. Async Reduce (sequential)

```js
(async () => {
  await [1,2,3].reduce(
    (p, i) => p.then(() => api("reduce-" + i, i)),
    Promise.resolve()
  );
})();
```

---

# 🔥 14. Conditional Chain

```js
api("getUser", { active: true })
  .then(u => {
    if (!u.active) throw "Inactive";
    return api("getData", "DATA");
  })
  .then(console.log)
  .catch(console.error);
```

---

# 🔥 15. Cancelable Promise (AbortController)

```js
const controller = new AbortController();

setTimeout(() => controller.abort(), 500);

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  signal: controller.signal
})
.catch(() => console.log("❌ Aborted"));
```

---

# 🔥 16. Promise Queue

```js
class PromiseQueue {
  constructor() {
    this.queue = Promise.resolve();
  }
  add(task) {
    this.queue = this.queue.then(task);
    return this.queue;
  }
}

const q = new PromiseQueue();
q.add(() => api("Q1", 1));
q.add(() => api("Q2", 2));
q.add(() => api("Q3", 3));
```

---

# 🔥 17. Parallel File Processing

```js
Promise.all([
  api("read1", "file1"),
  api("read2", "file2")
])
.then(files => files.map(f => f.toUpperCase()))
.then(console.log);
```

---

# 🔥 18. Race with Success Only

```js
Promise.any([
  api("fast", null, 300, true),
  api("slow", "OK", 800)
]).then(console.log);
```

---

# 🔥 19. Progressive Loading

```js
api("critical", "HTML", 500)
  .then(html => {
    console.log("Render:", html);
    return Promise.all([
      api("images", true, 1000),
      api("ads", true, 1200)
    ]);
  });
```

---

# 🔥 20. Promise Pipeline

```js
function doA() { return api("A", 1); }
function doB(x) { return api("B", x + 1); }
function doC(x) { return api("C", x + 1); }
function doD(x) { return api("D", x + 1); }
function doE([c, d]) { return api("E", c + d); }

doA()
  .then(doB)
  .then(r => Promise.all([doC(r), doD(r)]))
  .then(doE)
  .then(console.log);
```

---

# 🧠 If you can code & explain these → **Senior / Staff JS Engineer**

These cover **Google, Amazon, Uber, Swiggy, Flipkart, Microsoft, Razorpay interviews**.

---

If you want, I can give you next:

* async/await version of all 20
* event loop diagrams for these
* promise polyfills
* trick output questions

Just tell me 💪🔥
