let data = 4; // number data type;
data = 'tormuj'; // string data type;
data = false // boolean data type;
data = {name: 'Maruj', age: 34} // object data type
data = [1,2,3,4,5] //object data type but this is an array need to check Array.isArray(data) this process and if it's array then provide true otherwise, provide false. console.log(Array.isArray(data)); 

data = undefined; // undefined data type (this is not intentionally provide by programmer)
data = null; // object data type basically programmer intentionally provide the value null;

console.log(typeof data);
