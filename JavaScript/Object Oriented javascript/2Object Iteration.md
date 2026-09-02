# JavaScript Object Iteration Notes

## ⭐ Most Recommended (Use This in Modern JavaScript)

### `Object.entries()` + `for...of`

This is the cleanest and most commonly used way to iterate over both keys and values.

```javascript
const user = {
  name: "Aashish",
  age: 28,
  city: "Delhi"
};

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

**Output:**

```javascript
name Aashish
age 28
city Delhi
```

### Why this is recommended

* Very readable
* Gives both `key` and `value`
* Works well with destructuring
* Widely used in React and frontend projects
* Common in interviews

---

# 🥈 Second Most Common Approaches

## `Object.keys()` + `forEach()`

Use when you mainly need keys.

```javascript
Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});
```

---

## `for...in` + `Object.hasOwn()`

Traditional approach.

```javascript
for (const key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(key, user[key]);
  }
}
```

### Why `Object.hasOwn()` is needed

`for...in` can also iterate over inherited properties from the prototype chain.

---

# 📌 Other Useful Ways

## `Object.values()`

Use when you only need values.

```javascript
for (const value of Object.values(user)) {
  console.log(value);
}
```

---

## `Object.entries().forEach()`

```javascript
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
```

---

## `Object.entries().map()`

Use to transform object data into an array.

```javascript
const result = Object.entries(user).map(([key, value]) => {
  return `${key}: ${value}`;
});

console.log(result);
// ["name: Aashish", "age: 28", "city: Delhi"]
```

---

## `Object.entries().reduce()`

Use to create a new object.

```javascript
const updated = Object.entries(user).reduce((acc, [key, value]) => {
  acc[key] = typeof value === "string" ? value.toUpperCase() : value;
  return acc;
}, {});

console.log(updated);
// { name: "AASHISH", age: 28, city: "DELHI" }
```

---



# 🎯 Interview Answer (Short Version)

> There are three main ways to iterate over objects in JavaScript:
>
> 1. `for...in`
> 2. `Object.keys()`
> 3. `Object.entries()`
>
> In modern JavaScript, `Object.entries()` with `for...of` is the most recommended because it provides both keys and values and is very readable.



# 💼 Real-World Frontend Usage

## Rendering object data in React

```javascript
Object.entries(user).map(([key, value]) => (
  <p key={key}>{key}: {value}</p>
));
```

## Updating all string values

```javascript
const updated = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [
    key,
    typeof value === "string" ? value.toUpperCase() : value
  ])
);
```

---

# 🧠 Easy Memory Trick

* `keys()` → only keys
* `values()` → only values
* `entries()` → key-value pairs

---

# ✅ Final Recommendation

If you're unsure which method to use, use:

```javascript
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

This is the most modern, readable, and interview-friendly approach.
