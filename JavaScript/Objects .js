// ### 1. **Creating and Accessing Object Properties**

// - Create an object `car` with properties: `brand`, `model`, and `year`. Then, access each property and print it.
let car={brand:"fortune",model:"Lokesh",year:2024};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// 
// ### 2. **Adding and Deleting Properties**

// - Start with an empty object `person`. Add properties `firstName`, `lastName`, and `age` to it. Then, delete the `age` property.
let person={};
person.firstName="Lokesh";
person.lastName="kumar";
person.age=22;
delete person.age;
console.log(person);

// 3.Create an object book with properties title and author. Write a function that checks if a property exists in the object.

let book={title:"MyBook " ,author:"Loki"}; 
  function hasProperty(obj,prop){
      return prop in obj;
  }
  console.log(hasProperty(book, "title"));   
console.log(hasProperty(book, "age"));    

// ### 4. **Looping Through Object Properties**

// - Given an object `student` with `name`, `age`, and `grade`, write a loop to print each key-value pair.

let student={name:"loki",age:22,grade:"A"};

for(let key in student){
    console.log(`${key}:${student[key]}`);
}

let Employee={empName:"Lokesh",Salary:500000};
for(let values in Employee){
    let value=`${values}:${Employee[values]}`;
    console.log(value);
}

// ### **Counting Properties in an Object**

// - Write a function `countProperties(obj)` that returns the number of properties in the object.
function countProperties(obj){
    let count=0;
    for(let key in obj){
        count++;
    }
    console.log(count);
}
let value={name:"loki",age:22};
countProperties(value);

// ### **Object with Methods**

// - Create an object `calculator` with two properties: `num1` and `num2`. Add two methods: `add()` to return the sum and `subtract()` to return the difference.


let calculator={num1:10,num2:20,
    add(){
        return this.num1+this.num2;
    },
    sub(){
        return this.num1-this.num2;
    }
    };
    console.log(calculator.add());
    console.log(calculator.sub());

    // ### 7. **Cloning an Object**

// - Create an object `user` with properties `name` and `age`. Write a function that clones the object into a new one.

let user={name:"lokesh",age:22};
function cloneObject(obj){
    let newClone={};
    for(let key in obj){
        newClone[key]=obj[key];
    }
    return newClone;
}
let loki= cloneObject(user);
console.log(loki);

// ### 8. **Merging Objects**

// - Create two objects: `userInfo1` with properties `name` and `age`, and `userInfo2` with properties `age` and `city`. Merge the two into a new object.

let userInfo1={name:"loki",age:20};
let userInfo2={age:21,city:"hyderabad"};
let mergeTwo=Object.assign({},userInfo1,userInfo2);
console.log(mergeTwo);