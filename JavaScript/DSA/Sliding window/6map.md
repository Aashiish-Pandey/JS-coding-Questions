Here's the **optimized version** where we don't create substrings repeatedly inside the loop.

### Optimized Solution

```js
const longestSubstr = (str, k) => {
    let i = 0;
    let j = 0;

    const freqMap = new Map();

    let maxLength = 0;
    let startIndex = 0;

    while (j < str.length) {
        const char = str[j];

        freqMap.set(char, (freqMap.get(char) || 0) + 1);

        while (freqMap.size > k) {
            freqMap.set(str[i], freqMap.get(str[i]) - 1);

            if (freqMap.get(str[i]) === 0) {
                freqMap.delete(str[i]);
            }

            i++;
        }

        if (freqMap.size === k && (j - i + 1) > maxLength) {
            maxLength = j - i + 1;
            startIndex = i;
        }

        j++;
    }

    return {
        str: str.slice(startIndex, startIndex + maxLength),
        maxLength
    };
};

console.log(longestSubstr("aabacbebebe", 3));
```

### Output

```js
{
  str: "cbebebe",
  maxLength: 7
}
```

---

# Time Complexity Analysis (Interview Style)

Let:

```text
n = length of string
```

## Outer Loop

```js
while (j < str.length)
```

`j` starts from `0` and moves to `n-1`.

```text
Total movements of j = n
```

Cost:

```text
O(n)
```

---

## Inner Loop

```js
while (freqMap.size > k)
```

At first glance it looks nested, so many people think:

```text
O(n²)
```

But that's incorrect.

### Why?

`i` only moves forward.

```text
0 → 1 → 2 → 3 → ... → n
```

It never resets.

Across the entire algorithm:

```text
Total movements of i ≤ n
```

Cost:

```text
O(n)
```

---

## Map Operations

Inside the loops we perform:

```js
freqMap.get()
freqMap.set()
freqMap.has()
freqMap.delete()
```

For JavaScript `Map`:

| Operation | Complexity |
| --------- | ---------- |
| get       | O(1)       |
| set       | O(1)       |
| has       | O(1)       |
| delete    | O(1)       |

Average case.

---

## Amortized Analysis

Each character:

1. Enters the window once (`j` moves)
2. Leaves the window once (`i` moves)

Example:

```text
a a b a c b e b e b e
↑
j adds character

↑
i removes character
```

A character is processed at most **2 times**.

Therefore:

```text
Total work = 2n
```

Ignoring constants:

```text
O(n)
```

---

## Final `slice()`

```js
str.slice(startIndex, startIndex + maxLength)
```

This runs only **once** after the loop.

Worst-case:

```text
O(maxLength)
```

and

```text
maxLength ≤ n
```

So:

```text
O(n)
```

---

# Final Complexity

### Time Complexity

```text
O(n)
```

### Space Complexity

The map stores at most `k` distinct characters.

```text
O(k)
```

or more formally:

```text
O(min(k, n))
```

---

### One-Line Interview Answer

> "This is a variable-size sliding window solution. Both pointers `i` and `j` traverse the string at most once, and each map operation is O(1) on average. Therefore the overall time complexity is O(n), and the space complexity is O(k) for storing character frequencies."
