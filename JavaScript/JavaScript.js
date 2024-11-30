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

// alert("Hii")


// prompt("give your name",[20])


// let a=confirm("How are You")

// console.log(a)

function factorial(n){
    
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
        
    }
    console.log("factorial of "+n+":"+fact);
}
factorial(5);

// 2nd question
function Number(n){
    if(n<=1){
        console.log(n+"not a prime number");
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            console.log(n +" is not a prime number");
            return;
        }
    }
   console.log(n +" is a prime number");
}
  Number(10);
  Number(11);


//    3 rd question
function Number(n){
    for(let i=0;i<=n;i++){
        if(i%2===0){
            console.log("all even numbers between 1 and 50:"+i);
        }
    }
}
  Number(50);
 
// 4 th q 
function Arrays(){
    let arr=[1,2,3,4,5,6];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
Arrays();

// 5 th 

function Strings(loki){
    let reverse="";
    for(let i=loki.length-1;i>=0;i--){
        reverse+=loki[i];
    }
    console.log(reverse);
}
Strings("Lokesh");

// 7 th 
function pattern(n){
    for(let i=0;i<=n;i++){
        let stars="";
        for(let j=0;j<=i;j++){
          stars=stars+"*";
        }
        console.log(stars);
    }
}
pattern(5);

// 6 th 
function Fibonacci(n) {
    let fib = [0, 1]; 
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); 
    }
    return fib.slice(0, n); 
}


let terms = 10;
console.log("Fibonacci Sequence:",Fibonacci(terms));

//  7th 
function LargestNumber(){
    let arr=[1,3,5,6,7,8,43,65,78,63];
    let max=arr[0];
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log("largest number is:"+max);
}
LargestNumber();
 
// 8 th 
function vowels(){
    let name="Lokesh Kumar";
    let count=0;
    let vowels="aeiouAEIOU";
    for(let i=0;i<name.length;i++){
        if(vowels.includes(name[i])){
            count++;
        }
        
    }
    console.log(count);
}
vowels();


// 11 th 
function Duplicates(arr){
    let ar=[];
    for(let i=0;i<arr.length;i++){
    let isDuplicate=false;
    
        for(let j=0;j<ar.length;j++){
            if(arr[i]==ar[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            ar.push(arr[i]);
        }
    }
    console.log(ar);
}
let arr=[1,1,2,3,4,4,5,5,6];
Duplicates(arr);

// 13 th 
function Sorting(arr){
    arr.sort((a,b)=>a-b);
    console.log(arr);
    }

let arr=[1,9,76,9,2,5,0,1,4,6,90];
Sorting(arr);

// 14 th 
function Section() {
    let arr1 = [1, 2, 3, 4, 5, 6];
    let arr2 = [2, 6, 8, 9, 90];
    let intersection = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        intersection.push(arr1[i]);
      }
    }
  
    console.log(intersection);
  }
  
  Section();