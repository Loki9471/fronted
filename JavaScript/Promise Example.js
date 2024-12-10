// 1 example 
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve("promise full after 2 seconds ");
    },3000)
});
myPromise
.then((message)=>{
    console.log(message+" Loki");
})
.catch((error)=>{
    console.log(error);
});

// example 2 
const ex=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("loki runs after 1 sec");
    },1000)
});
ex
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error+" Loki");
});

// 3 example 
const Number=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a>0){
        resolve("number is greater than zero");
    }else{
        reject("not ")
    }
});
Number
.then((message)=>{
   console.log(message);
})
.catch((error)=>{
    console.log(error);
});

