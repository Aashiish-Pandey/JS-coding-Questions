Here’s a **clear, complete, and interview-ready explanation of `Set` in JavaScript**, focused on **what it is**, **how it works**, and **its important methods** — something you can **refer back to later**.

---

# 🔹 What is `Set` in JavaScript?

```js
const mySet = new Set();
```

A `Set` is a **collection of unique values**.

### Key Characteristics

✔ Stores **only unique values**
✔ Maintains **insertion order**
✔ Values can be **any data type**
✔ Iterable by default
✔ Fast lookup (`O(1)` average)

---

# 🔹 Why `Set` Was Introduced?

Before ES6:

* Arrays allowed duplicates
* Objects coerced keys to strings

`Set` solves:
✔ Duplicate handling
✔ Fast existence checks
✔ Clean iteration

---

# 🔹 Creating a Set

### Empty Set

```js
const set = new Set();
```

### From an Array

```js
const set = new Set([1, 2, 2, 3]);
```

✔ Automatically removes duplicates

---

# 🔹 Important `Set` Methods (MOST IMPORTANT PART)

---

## 1️⃣ `add(value)`

Adds a value to the set.

```js
set.add(1);
set.add(1); // ignored
set.add("1");
```

✔ Returns the set (chainable)

---

## 2️⃣ `has(value)`

Checks if value exists.

```js
set.has(1); // true
```

✔ O(1) lookup

---

## 3️⃣ `delete(value)`

Removes a value.

```js
set.delete(1); // true
set.delete(10); // false
```

---

## 4️⃣ `clear()`

Removes all values.

```js
set.clear();
```

---

## 5️⃣ `size`

Returns number of elements.

```js
set.size;
```

---

# 🔹 Iteration Methods

---

## 6️⃣ `for...of`

```js
for (const value of set) {
  console.log(value);
}
```

✔ Most common

---

## 7️⃣ `forEach()`

```js
set.forEach((value, sameValue, setRef) => {
  console.log(value);
});
```

⚠ `value === sameValue` (API consistency with Map)

---

## 8️⃣ `values()`

```js
set.values();
```

---

## 9️⃣ `keys()` (same as values)

```js
set.keys();
```

---

## 🔟 `entries()`

```js
set.entries();
// returns [value, value]
```

Used for Map compatibility.

---

# 🔹 How `Set` Handles Equality (IMPORTANT)

Uses **SameValueZero** comparison:

```js
NaN === NaN // false
Set treats NaN as equal ✔
```

```js
const s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size); // 1
```

---

# 🔹 Objects in Set (Reference-Based)

```js
set.add({ a: 1 });
set.add({ a: 1 });

set.size; // 2 ❗
```

Objects are compared by reference, not value.

---

# 🔹 Converting Between Set & Array

```js
const arr = [...set];
const set2 = new Set(arr);
```

---

# 🔹 Common Set Operations (Manual)

---

### Union

```js
new Set([...a, ...b]);
```

---

### Intersection

```js
new Set([...a].filter(x => b.has(x)));
```

---

### Difference

```js
new Set([...a].filter(x => !b.has(x)));
```

---

# 🔹 Real-World Use Cases

✔ Remove duplicates
✔ Track visited nodes
✔ Prevent duplicate API calls
✔ Permissions / flags
✔ Cache keys

---

# 🔹 Set vs Array (Interview Favorite)

| Feature            | Set       | Array  |
| ------------------ | --------- | ------ |
| Unique values      | ✔         | ❌      |
| Lookup speed       | O(1)      | O(n)   |
| Index access       | ❌         | ✔      |
| Duplicate handling | Automatic | Manual |

---

# 🔹 Common Mistakes ❌

❌ Expecting index access
❌ Expecting deep equality
❌ Using Set when ordering is not needed
❌ Using Set instead of Map for key-value data

---

# 🔹 Interview-Ready Definition

> “A Set is a collection of unique values with fast lookup, preserving insertion order, implemented using a hash-based structure.”

---

# 📌 Mental Model (Remember This)

```
Set
↓
Unique values
↓
Hash lookup
↓
Iterable
```

---

# 📌 Summary (Bookmark This)

✔ No duplicates
✔ Fast `.has()`
✔ Clean iteration
✔ Reference equality for objects
✔ Use when uniqueness matters

---

If you want next:

* `Set` vs `Map`
* `WeakSet`
* Performance benchmarks
* Custom Set polyfill
* Using Set in React

Just say 👍
