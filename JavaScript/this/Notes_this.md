# `this` — how JS decides the value

`this` is **not** “the object where the function was written”.
For a **regular function**, `this` is decided **at call time**.
For an **arrow function**, `this` is copied from the **outer scope** when the arrow is created (lexical `this`). It never gets its own `this`.

Look at the **call site** (how you invoke it).

Resources:
- https://www.youtube.com/watch?v=dWZIPIc3szg
- https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/

---

## Binding rules (regular functions), highest first

| Priority | Binding | Example | `this` |
| --- | --- | --- | --- |
| 1 | `new` | `new Person()` | brand-new object |
| 2 | explicit | `fn.call(obj)` / `apply` / `bind` | the object you pass |
| 3 | implicit | `obj.fn()` | `obj` (left of the `.`) |
| 4 | default | `fn()` | `window` (sloppy) or `undefined` (strict) |

Interview line: *“`this` depends on the call site, except arrows, which close over the surrounding `this`.”*

---

## Files (run in order)

| File | Topic |
| --- | --- |
| `01_implicitBinding.js` | `obj.fn()` — this is left of the dot, including nested objects |
| `02_defaultBinding.js` | `fn()` — window vs undefined; Node vs browser |
| `03_objectLiteralThis.js` | `{ a: this }` is not the object being created |
| `04_nestedRegularVsArrow.js` | inner `function` loses this; inner arrow keeps it |
| `05_lostThis.js` | extracted method, callback, setTimeout, forEach |
| `06_callApplyBind.js` | explicit this; bind wins over the dummy object |
| `07_newAndClass.js` | `new`, class methods, detached class method throws |
| `08_arrowPitfalls.js` | arrow as method; `.call` ignored on arrows |

```bash
node 01_implicitBinding.js
```

For `window` / `var` on global, open `index.html` and change the `<script src>`.

---

## Interview pitfalls

1. **Lost `this`:** `const f = obj.method; f()` — no dot, default binding.
2. **`setTimeout(obj.method, 0)`** is the same as extracting the function.
3. **Arrow as a method** does not bind to the object.
4. **`.call` / `.apply` on arrows** do not change `this`.
5. **`this` in `{ a: this }`** is not the object being created.
6. **`bind` beats** `obj.fn()`; **`new` beats** most other rules.
7. **DOM:** `addEventListener('click', fn)` → `this` is the element. An arrow handler keeps outer `this`.
8. **Strict mode:** bare `fn()` → `this === undefined` (no default `window`).
