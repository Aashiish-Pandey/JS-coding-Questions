Yes, for interview preparation it's useful to add the complexity column.

## JavaScript `Map` Time Complexities

| Operation            | Method                     | Average Time Complexity |
| -------------------- | -------------------------- | ----------------------- |
| Insert               | `map.set(key, value)`      | **O(1)**                |
| Search / Lookup      | `map.get(key)`             | **O(1)**                |
| Check Existence      | `map.has(key)`             | **O(1)**                |
| Delete               | `map.delete(key)`          | **O(1)**                |
| Get Size             | `map.size`                 | **O(1)**                |
| Clear All Entries    | `map.clear()`              | **O(n)**                |
| Traverse Keys        | `map.keys()`               | **O(n)**                |
| Traverse Values      | `map.values()`             | **O(n)**                |
| Traverse Entries     | `map.entries()`            | **O(n)**                |
| `for...of` Iteration | `for (const [k,v] of map)` | **O(n)**                |
| `forEach()`          | `map.forEach()`            | **O(n)**                |

---

## Why O(1) for Insert, Search and Delete?

```js
const map = new Map();

map.set("name", "Aashish"); // O(1)
map.get("name");           // O(1)
map.delete("name");        // O(1)
```

Because `Map` is implemented using a **hash-table-like data structure** internally.

Instead of scanning all elements:

```js
[
  ["id", 1],
  ["name", "Aashish"],
  ["role", "admin"]
]
```

the engine computes a hash for the key and directly jumps to the storage location.

---

## Traversal Complexity

```js
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (const [key, value] of map) {
  console.log(key, value);
}
```

The loop visits every entry once.

```text
a → 1
b → 2
c → 3
```

Complexity = **O(n)**

where `n` = number of entries.

---

## Worst Case Complexity

Interviewers sometimes ask this follow-up.

| Operation | Average | Worst Case |
| --------- | ------- | ---------- |
| Insert    | O(1)    | O(n)       |
| Search    | O(1)    | O(n)       |
| Delete    | O(1)    | O(n)       |

Worst case happens if many keys hash to the same bucket (hash collision), though modern JavaScript engines make this very rare.

---

## Quick Interview Answer

> JavaScript `Map` is a hash-table-based key-value data structure. Insert (`set`), lookup (`get`), existence check (`has`), and delete (`delete`) are O(1) on average. Traversal using `for...of`, `keys()`, `values()`, `entries()`, or `forEach()` is O(n), where n is the number of entries. `clear()` is O(n) because every entry must be removed.

### Easy Memory Trick

```text
Map

Insert   → O(1)
Search   → O(1)
Delete   → O(1)
Update   → O(1)
Traverse → O(n)
Clear    → O(n)
```

This is the same complexity pattern you should remember for a **HashMap** in Java, **unordered_map** in C++, and **Dictionary** in Python.
