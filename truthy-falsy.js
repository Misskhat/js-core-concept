/*
Understanding **truthy** and **falsy** values is super important in JavaScript — especially when you're working with conditions like `if` statements.

Let’s break it down simply:

---

### ✅ What are Truthy and Falsy Values?

In JavaScript, **every value** is either:
- **Truthy** → behaves like `true` when checked in a condition
- **Falsy** → behaves like `false` when checked in a condition

---

### ❌ Falsy Values (only 7 of them!)

These are the values that JavaScript treats as **false**:

```javascript
false       // literally false
0           // zero
-0          // negative zero
""          // empty string
null        // intentional empty
undefined   // no value assigned
NaN         // Not a Number
```

Example:

```javascript
if (0) {
  console.log("This won't run");
}
```

---

### ✅ Truthy Values

Everything else is **truthy** — even if it looks weird!

```javascript
true
"hello"     // non-empty string
42          // any number except 0
[]          // empty array
{}          // empty object
function(){} // any function
```

Example:

```javascript
if ("hello") {
  console.log("This will run");
}
```

---

### 🧠 Why it matters

When you write conditions like:

```javascript
if (userName) {
  do something
}
```

JavaScript checks if `userName` is **truthy**. If it’s `""` (empty string), it’s falsy — so the code won’t run.

---

*/ 

let data; // undefine is a falsy value;

data = false // literally false
data = 0 // zero
data = s-0 // negative zero
data = "" // empty string
data = null // intentional empty
data = NaN // Not a Number

// we check the value is truthy or falsy  (above all 7 data is falsy value and rest of all data is truthy value)
(data)?console.log('value of data truthy'): console.log('value of  data falsy');