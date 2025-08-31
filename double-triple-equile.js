/*
Let’s make it **super simple** so you don’t get confused.

---

## 🔹 Difference Between `==` and `===` in JavaScript

### ✅ `==` (Double Equal) → Loose Equality

* It **checks only the values**.
* If the values are the same, it tries to **convert types** automatically before comparing.

👉 Example:

```js
5 == "5"   // true
```

Why? Because JavaScript converts `"5"` (string) into `5` (number) before comparing.

---

### ✅ `===` (Triple Equal) → Strict Equality

* It **checks both value AND type**.
* No automatic conversion.

👉 Example:

```js
5 === "5"   // false
```

Why? Because `5` is a number, `"5"` is a string → types are different.

---

## 🔎 Quick Comparison Table

| Operator | Checks Value? | Checks Type? | Example Result      |
| -------- | ------------- | ------------ | ------------------- |
| `==`     | ✅ Yes         | ❌ No         | `5 == "5" → true`   |
| `===`    | ✅ Yes         | ✅ Yes        | `5 === "5" → false` |

---

## 📝 Simple Rule to Remember

👉 Always use `===` (strict equality) in modern JavaScript to avoid confusion.
👉 Use `==` only if you **really want** type conversion (rare cases).

---
*/

/* now we are check below data with == and === equile; 
1. 5 == "5"
2. 5 === "5"
3. 0 == false
4. 0 === false
5. null == undefined
6. null === undefined
*/

console.log("exercice 1", 5 == "5");
console.log("exercice 2", 5 === "5");
console.log("exercice 3", 0 == false);
console.log("exercice 4", 0 === false);
console.log("exercice 5", null == undefined);
console.log("exercice 6", null === undefined);
