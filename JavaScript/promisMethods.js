// example of promise.all()  
const promise1=new Promise((resolve,reject)=> setTimeout(reject,1000,"lokesh"
));
const promise2=new Promise((resolve,reject)=> setTimeout(resolve,4000,"lokesh"
));
const promise3=new Promise((resolve,reject)=> setTimeout(resolve,3000,"lokesh"
));


Promise.all([promise1,promise2,promise3])

.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});

// ex of promise.allsettled() 
const promise13=new Promise((resolve,reject)=> setTimeout(reject,9000,"lokesh"
));
const promise23=new Promise((resolve,reject)=> setTimeout(resolve,4000,"lokesh"
));
const promise33=new Promise((resolve,reject)=> setTimeout(resolve,3000,"lokesh"
));

Promise.allSettled([promise13,promise23,promise33])
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
});

// ex of promise.any() 
const promise12=new Promise((resolve,reject)=> setTimeout(reject,1000,"lokesh"
));
const promise22=new Promise((resolve,reject)=> setTimeout(resolve,4000,"lokesh"
));
const promise32=new Promise((resolve,reject)=> setTimeout(resolve,3000,"lokesh"
));

Promise.any([promise12,promise22,promise32])
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
});

// ex of promise.race 
const promise11=new Promise((resolve,reject)=> setTimeout(resolve,1000,"lokesh"
));
const promise21=new Promise((resolve,reject)=> setTimeout(resolve,4000,"lokesh"
));
const promise31=new Promise((resolve,reject)=> setTimeout(resolve,3000,"lokesh"
));

Promise.race([promise11,promise21,promise31])
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
});