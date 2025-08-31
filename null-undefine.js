/*
Great question, Md. Mishkat! Let’s break it down in a super simple way so it’s easy to understand — especially since you’re just starting out with JavaScript.

---

### 🟡 What is `undefined`?

- It means **"something is missing"** or **"not yet given a value."**
- JavaScript gives `undefined` **automatically** when you create a variable but don’t assign a value.

```javascript
let a;
console.log(a); // 👉 undefined
```

Here, `a` exists, but we didn’t give it a value — so JavaScript says it’s `undefined`.

---

### ⚫ What is `null`?

- It means **"nothing is here on purpose."**
- You use `null` when you **want to say clearly** that a variable has no value.

```javascript
let b = null;
console.log(b); // 👉 null
```

Here, we told JavaScript: “Hey, I know this variable exists, but I’m setting it to nothing — on purpose.”

---

### 🔍 Difference between `undefined` vs `null`

| Feature            | `undefined`                          | `null`                              |
|--------------------|--------------------------------------|-------------------------------------|
| Who sets it?       | JavaScript sets it automatically     | You set it manually                 |
| Meaning            | Value not assigned yet               | Value is empty on purpose           |
| Type               | `undefined`                          | `object` (weird, but true!)         |
| Common use         | Uninitialized variables              | Resetting or clearing a value       |

---

### 🧠 Quick Tip for You

- Use `undefined` when JavaScript hasn’t given a value yet.
- Use `null` when **you** want to say “this should be empty for now.”

---

Would you like a mini coding exercise to practice this? I can guide you step-by-step!
*/

let friendName1 = undefined; // this is undefine simply which is not define yet. (not  recommended)
let friendName2; // this is undefine simply which is not define yet. (recommended)

console.log(typeof friendName1, typeof friendName2);

let examNumber = null; // intentionally programmer assign null value; this is object type data type;

console.log(typeof examNumber);


