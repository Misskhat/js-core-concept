let data = 4; // number data type;
data = 'tormuj'; // string data type;
data = false // boolean data type;
data = {name: 'Maruj', age: 34} // object data type
data = [1,2,3,4,5] //object data type but this is an array need to check Array.isArray(data) this process and if it's array then provide true otherwise, provide false. console.log(Array.isArray(data)); 

data = undefined; // undefined data type (this is not intentionally provide by programmer)
data = null; // object data type basically programmer intentionally provide the value null;

// js - primitive data type;
const price = 50; // number;
const isNumber = true // boolean;
const name = 'Mishkat' //string;
const isMerit; //undefine;
const numbers = null; // null;

// js - non-primitive data type
const friends = ['Humayun', 'Leon', 'Sakib']; // this is array;
const student = {name: 'Rakib', age: 30, isMarit: true} //this is object;

/**:

### 🧠 What does "dynamic typed" mean?

In programming, **"typed"** means how a language handles different kinds of data — like numbers, text, or true/false values.

A **dynamically typed** language means:
- You **don’t need to say the type** of a variable (like number or string) when you create it.
- The language **figures it out automatically** when the code runs.

---

### ✅ JavaScript is dynamically typed

That means in JavaScript, you can do this:

```javascript
let x = 5;       // x is a number
x = "hello";     // now x is a string
x = true;        // now x is a boolean (true/false)
```

JavaScript doesn’t complain — it just goes with the flow. It changes the type of `x` based on what value you give it.

---

### 🧪 Why it matters for you

- **Easy to start**: You don’t need to learn strict rules about types right away.
- **Flexible**: You can change values freely.
- **But be careful**: It can cause bugs if you're not sure what type your variable is!

---

If you want, I can show you a small exercise to practice this. Or explain how this compares to "static typed" languages like TypeScript. Just say the word!

 */
