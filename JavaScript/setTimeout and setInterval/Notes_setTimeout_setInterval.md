# Scheduling: setTimeout and setInterval

Interview notes. Run the `.js` files in Node (or browser console). Open `autoLogout.html` in a browser.

## Core APIs

| API | What it does |
| --- | --- |
| `setTimeout(fn, delay, ...args)` | Runs `fn` **once** after `delay` ms |
| `setInterval(fn, delay, ...args)` | Runs `fn` **repeatedly** every `delay` ms |
| `clearTimeout(id)` | Cancels a timeout |
| `clearInterval(id)` | Cancels an interval |

Both return a **timer id** (number in browsers, object in Node). Always store it if you may need to cancel.

```js
const id = setTimeout(() => console.log("once"), 1000);
clearTimeout(id);

const intervalId = setInterval(() => console.log("tick"), 1000);
clearInterval(intervalId);
```

Delay is a **minimum wait**, not a guarantee. The callback waits in the **macrotask queue**. If the call stack or other tasks are busy, it runs later.

`setTimeout(fn, 0)` still waits until the current script finishes. It does **not** run immediately.

---

## Why recursive `setTimeout` is often better than `setInterval`

`setInterval` schedules the next run on a fixed clock, even if the previous callback is still running.

```
setInterval(fn, 1000)

t=0      t=1000     t=2000
|--fn (slow, 1500ms)--|
           |--skipped or overlap depending on engine--|
```

Recursive `setTimeout` schedules the **next** call only after the current one finishes:

```js
let id = setTimeout(function tick() {
  // work...
  id = setTimeout(tick, 1000); // next delay starts AFTER this run
}, 1000);
```

Benefits:

1. **No overlap** — next tick waits for current work to finish.
2. **Dynamic delay** — you can change the wait each time (polling, backoff). See `polling.js`.
3. **Control** — easy to stop by not scheduling the next timeout, or by `clearTimeout` on the latest id.

Interview line: *“I prefer nested `setTimeout` when the work duration is unknown, so ticks cannot pile up.”*

---

## Nested `setTimeout`

One `setTimeout` callback schedules the **next** `setTimeout`. That builds a chain of delayed actions instead of a fixed interval.

Useful for:

- animations / sequenced UI steps
- timed data fetching
- intervals whose delay **changes** each run

`setInterval` cannot do the last one cleanly. Nested timeout can: each call picks a new delay.

Other use cases in this folder: countdown (`countdown.js`), inactivity logout (`autoLogout.html`), polling with backoff (`polling.js`).

---

### Use case 1 — Polling with exponential backoff

If the server is down, do **not** hammer it every 1s. Wait longer after each failure: 1s, 2s, 4s, 8s, 16s…

`delay = 2^retryCount * 1000`

See `polling.js`. Stop when you succeed, or after a max retry count. You only call `fetchData()` again on failure — that is the nested timeout.

Interview follow-ups:

- Why backoff? Protect the server and your own rate limits.
- Cap the delay (`Math.min(2 ** n * 1000, 30000)`) so waits don’t grow forever.
- Jitter (`Math.random()`) so many clients don’t retry in lockstep.
- Cancel in-flight retries with `clearTimeout` if the user navigates away.

---

## Always store the **latest** timeout id

`clearTimeout` only cancels the id you pass. Nested timers create a **new** id every tick. If you keep an old id, you cancel the wrong timer (or none).

See `clearTimeout.js`.

```js
let timerId = setTimeout(() => {
  console.log("This will be cleared before execution.");
}, 5000);

setTimeout(() => {
  clearTimeout(timerId);
  console.log("Timeout cleared before execution.");
}, 2000);
```

For a recursive loop, reassign:

```js
timerId = setTimeout(tick, 1000); // always the current pending timer
clearTimeout(timerId);            // cancels that one
```

---

## Example 1 — Countdown with recursive `setTimeout`

See `countdown.js`.

Why not `setInterval`? You need a stop condition and a single chain of ticks. Recursive timeout stops naturally when you do not schedule again.

Interview follow-ups:

- How do you **cancel** the countdown? Keep `timerId` in outer scope and `clearTimeout(timerId)`.
- What if `tick` takes longer than 1s? Next second starts after work + 1000ms, so the clock can drift. For a wall-clock countdown, compare `Date.now()` to a target timestamp.

---

## Example 2 — Auto-logout after inactivity

See `autoLogout.html`.

Pattern: **debounce with reset**.

1. Any activity (`mousemove`, `keydown`) calls `resetLogoutTimer`.
2. `clearTimeout` kills the previous logout timer.
3. A new 5s (demo) timer starts.
4. If the user is idle for 5s, logout runs.

This is the same idea as “search-as-you-type debounce”: only the last quiet period fires the action.

Do not attach this to `document` in Node — it needs a browser.

---

## `setInterval` vs nested `setTimeout` (quick compare)

| | `setInterval` | Nested `setTimeout` |
| --- | --- | --- |
| Next fire | Fixed schedule from start | After previous callback + delay |
| Overlap | Possible if `fn` is slow | Avoided |
| Change delay | Awkward | Natural |
| Stop | `clearInterval` | `clearTimeout` or don’t reschedule |

`setInterval` is fine for cheap, regular ticks (clock UI) if work is always short.

---

## Interview pitfalls

1. **`this` inside timeout** — callback is not a method call. `this` is `undefined` (strict) / `window`. Use arrow functions or `.bind`.
2. **Closures in loops** — `var` + `setTimeout` in a `for` loop shares one `i`. Use `let` or an IIFE.
3. **Minimum delay** — browsers often clamp nested timeouts to ~4ms. Don’t treat timers as a high-resolution clock.
4. **Background tabs** — timers are throttled (often 1s+). Don’t rely on them for precise timing when the tab is hidden.
5. **Clear the latest id** — after recursive reschedule, old ids are already fired or stale.
6. **Memory / leaks** — uncleared intervals keep running after a component unmounts. Always clear in cleanup (`useEffect` return, SPA route change).
7. **`1.js` trap** — `if (count = 10)` **assigns** 10 (always truthy). Use `===`. Also `clearTimeout` then immediately `setTimeout` again still schedules the next tick.

---

## How this folder maps

| File | Topic |
| --- | --- |
| `setTimeout.js` | Nested timeout + clear after 5s |
| `setInterval.js` | Interval + clear |
| `1.js` | Nested timeout with changing delay (has bugs — good to debug) |
| `polling.js` | Recursive timeout + exponential backoff |
| `clearTimeout.js` | Cancel before fire |
| `countdown.js` | Recursive countdown |
| `autoLogout.html` | Inactivity logout (browser) |
