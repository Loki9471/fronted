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
