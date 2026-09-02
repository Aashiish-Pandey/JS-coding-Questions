Here are the most important JavaScript `Object` methods every frontend developer should know.

---

# 1. `Object.keys()`

Returns an array of an object's own property names.

```javascript
const user = {
  name: "Aashish",
  age: 28
};

console.log(Object.keys(user));
// ["name", "age"]
```

---

# 2. `Object.values()`

Returns an array of property values.

```javascript
console.log(Object.values(user));
// ["Aashish", 28]
```

---

# 3. `Object.entries()`

Returns an array of `[key, value]` pairs.

```javascript
console.log(Object.entries(user));
// [["name", "Aashish"], ["age", 28]]
```

Useful for iteration:

```javascript
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

---

# 4. `Object.fromEntries()`

Converts key-value pairs back into an object.

```javascript
const entries = [
  ["name", "Aashish"],
  ["age", 28]
];

const obj = Object.fromEntries(entries);
console.log(obj);
// { name: "Aashish", age: 28 }
```

---

# 5. `Object.assign()`

Copies properties from one or more objects.

```javascript
const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source);

console.log(target);
// { a: 1, b: 2 }
```

Clone an object:

```javascript
const copy = Object.assign({}, user);
```

---

# 6. Spread Operator (`...`)

Modern alternative to `Object.assign()`.

```javascript
const copy = { ...user };
const merged = { ...user, city: "Delhi" };
```

---

# 7. `Object.freeze()`

Prevents any modifications.

```javascript
const config = { theme: "dark" };
Object.freeze(config);

config.theme = "light"; // ignored
console.log(config.theme); // "dark"
```

---

# 8. `Object.seal()`

Allows modifying existing properties but prevents adding/removing properties.

```javascript
const person = { name: "Aashish" };
Object.seal(person);

person.name = "Rahul"; // allowed
person.age = 30;       // ignored
```

---

# 9. `Object.hasOwn()`

Checks whether an object has a property directly on itself.

```javascript
const user = { name: "Aashish" };

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "toString")); // false
```

---

# 10. `hasOwnProperty()`

Older equivalent.

```javascript
user.hasOwnProperty("name"); // true
```

---

# 11. `Object.create()`

Creates a new object with a specified prototype.

```javascript
const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);
dog.speak();
```

---

# 12. `Object.getPrototypeOf()`

Returns an object's prototype.

```javascript
console.log(Object.getPrototypeOf([]) === Array.prototype);
// true
```

---

# 13. `Object.setPrototypeOf()`

Changes an object's prototype.

```javascript
const obj = {};
Object.setPrototypeOf(obj, Array.prototype);
```

---

# 14. `Object.defineProperty()`

Adds a property with fine-grained control.

```javascript
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Aashish",
  writable: false,
  enumerable: true
});
```

---

# 15. `Object.getOwnPropertyDescriptor()`

Returns metadata about a property.

```javascript
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
```

---

# 16. `Object.getOwnPropertyNames()`

Returns all own property names, including non-enumerable ones.

```javascript
Object.getOwnPropertyNames(Math);
```

---

# 17. `Object.getOwnPropertySymbols()`

Returns symbol properties.

```javascript
const sym = Symbol("id");
const obj = { [sym]: 123 };

console.log(Object.getOwnPropertySymbols(obj));
```

---

# 18. `Object.is()`

Strict comparison with special handling for `NaN` and `-0`.

```javascript
Object.is(NaN, NaN); // true
Object.is(0, -0);    // false
```

---

# 19. `Object.preventExtensions()`

Prevents adding new properties.

```javascript
const obj = { a: 1 };
Object.preventExtensions(obj);

obj.b = 2; // ignored
```

---

# 20. `Object.groupBy()`

Groups array elements into an object.

```javascript
const nums = [1, 2, 3, 4];

const grouped = Object.groupBy(nums, n =>
  n % 2 === 0 ? "even" : "odd"
);

console.log(grouped);
// { odd: [1, 3], even: [2, 4] }
```

---

# Most Commonly Used in Interviews

1. `Object.keys()`
2. `Object.values()`
3. `Object.entries()`
4. `Object.fromEntries()`
5. `Object.assign()`
6. `Object.freeze()`
7. `Object.hasOwn()`
8. `Object.create()`
9. `Object.defineProperty()`
10. `Object.is()`

---

# Real-World Frontend Usage

| Use Case                 | Method                      |
| ------------------------ | --------------------------- |
| Iterate over object      | `Object.entries()`          |
| Clone object             | `Object.assign()` or spread |
| Merge objects            | Spread operator             |
| Convert array to object  | `Object.fromEntries()`      |
| Make constants immutable | `Object.freeze()`           |
| Check property existence | `Object.hasOwn()`           |
| Group data               | `Object.groupBy()`          |

---

# Interview Favorites

The methods most often discussed in frontend interviews are:

* `Object.keys()`
* `Object.entries()`
* `Object.fromEntries()`
* `Object.assign()`
* `Object.create()`
* `Object.defineProperty()`
* `Object.freeze()`
* `Object.hasOwn()`

---

# Practice Example

```javascript
const user = {
  name: "Aashish",
  age: 28
};

const updated = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [
    key,
    typeof value === "string" ? value.toUpperCase() : value
  ])
);

console.log(updated);
// { name: "AASHISH", age: 28 }
```
