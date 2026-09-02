# 🚀 Episode 24: Promise APIs (all, allSettled, race, any) + Interview Guide

---

## 🔥 Why Promise APIs Matter

A **Promise** represents a value that will be available in the future.
When dealing with multiple asynchronous operations, JavaScript provides **Promise APIs** to handle them **together**, **in parallel**, and **in a predictable way**.

These APIs help solve:

* Parallel API calls
* Timeout handling
* Fallback systems
* Error isolation
* Performance optimization

---

## 📌 The 4 Most Important Promise APIs

1. `Promise.all()`
2. `Promise.allSettled()`
3. `Promise.race()`
4. `Promise.any()`

---

# 1️⃣ Promise.all()

> Waits for **all promises to fulfill** or **fails fast** if any promise rejects.

---

## ✅ Syntax

```js
Promise.all(iterable)
```

---

## ✅ Behavior

* Resolves when **all promises fulfill**
* Rejects as soon as **any promise rejects**
* Returns results **in input order**
* Does **not cancel** other promises on failure

---

## ✅ Example (All Success)

```js
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3]).then(console.log);
// ["A", "B", "C"]
```

---

## ❌ Example (Fail Fast)

```js
const p1 = Promise.resolve("A");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3]).catch(console.error);
// Error
```

---

## 💡 Use Cases

* Parallel API calls
* Page load data
* Dashboard widgets
* Multiple DB queries
* SSR data fetching (Next.js, Remix)

---

## ⚠️ Interview Notes

```js
Promise.all([1, Promise.resolve(2), 3])
// → [1, 2, 3]
```

* Non-promises are auto-wrapped
* Order is preserved
* Promises are NOT cancelled on failure

---

# 2️⃣ Promise.allSettled()

> Waits for **all promises to settle**, regardless of success or failure.

---

## ✅ Syntax

```js
Promise.allSettled(iterable)
```

---

## ✅ Behavior

* Never rejects
* Returns array of objects:

  ```js
  { status, value | reason }
  ```

---

## ✅ Example

```js
const promises = [
  Promise.resolve("Success"),
  Promise.reject("Fail"),
  Promise.resolve("OK")
];

Promise.allSettled(promises).then(console.log);
```

Output:

```js
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Fail" },
  { status: "fulfilled", value: "OK" }
]
```

---

## 💡 Use Cases

* Analytics
* Logging
* Cleanup operations
* Optional widgets
* Background tasks

---

## ⚖️ Comparison with Promise.all()

| Feature          | all | allSettled |
| ---------------- | --- | ---------- |
| Waits for all    | ✅   | ✅          |
| Rejects early    | ✅   | ❌          |
| Safe for logging | ❌   | ✅          |
| Production safe  | ⚠️  | ✅          |

---

# 3️⃣ Promise.race()

> Returns the **first settled promise** (fulfilled or rejected).

---

## ✅ Syntax

```js
Promise.race(iterable)
```

---

## ✅ Example (Fastest Wins)

```js
const p1 = new Promise(r => setTimeout(() => r("slow"), 300));
const p2 = new Promise(r => setTimeout(() => r("fast"), 100));

Promise.race([p1, p2]).then(console.log);
// fast
```

---

## ❌ Example (Fastest Fails)

```js
const p1 = new Promise((_, r) => setTimeout(() => r("error"), 100));
const p2 = new Promise(r => setTimeout(() => r("ok"), 300));

Promise.race([p1, p2]).catch(console.log);
// error
```

---

## 💡 Use Cases

* Timeouts
* Retry logic
* Performance optimization
* Cancel-like behavior (with AbortController)

---

## ⚠️ Interview Trap

`Promise.race()` does NOT cancel other promises.

---

# 4️⃣ Promise.any()

> Returns the **first fulfilled promise**.
> Rejects only if **all promises fail**.

---

## ✅ Syntax

```js
Promise.any(iterable)
```

---

## ✅ Example (First Success)

```js
Promise.any([
  Promise.reject("Fail"),
  Promise.resolve("Success"),
  Promise.resolve("Backup")
]).then(console.log);
// Success
```

---

## ❌ Example (All Fail)

```js
Promise.any([
  Promise.reject("A"),
  Promise.reject("B")
]).catch(err => {
  console.log(err.name);   // AggregateError
  console.log(err.errors); // ["A", "B"]
});
```

---

## 💡 Use Cases

* CDN fallback
* Backup APIs
* High-availability systems
* Mirror servers
* Resilient microservices

---

# ⚔️ Promise.any vs Promise.race

| Feature         | race | any |
| --------------- | ---- | --- |
| First settled   | ✅    | ❌   |
| First fulfilled | ❌    | ✅   |
| Rejects fast    | ✅    | ❌   |
| Reliability     | ❌    | ✅   |

---

# 🧠 Performance & Best Practices

```js
// ❌ slow
for (let x of items) {
  await fetch(x);
}

// ✅ fast
await Promise.all(items.map(fetch));
```

---

# 📊 Quick Decision Table

| Goal             | Use                |
| ---------------- | ------------------ |
| All must succeed | Promise.all        |
| Want all results | Promise.allSettled |
| Timeout          | Promise.race       |
| First success    | Promise.any        |

---

# 🔚 Final Summary

* `Promise.all` → strict success
* `Promise.allSettled` → safe completion
* `Promise.race` → fastest result
* `Promise.any` → first success
* Results order is always preserved
* Promises are never cancelled automatically
* Microtask-based execution

---

# 🎯 Interview One-Liner

> Promise APIs solve coordination, reliability, and performance problems in async JavaScript.

---

If you want, I can also:

* add **diagrams**
* add **polyfills**
* create **interview Q&A**
* convert this into a **PDF**

Just tell me 💪
