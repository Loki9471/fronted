// Example of Promise and async 
function InstagramPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Lokesh Posts"),1000);
    });
}
function Facebook(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("My Posts"),500);
    });
}

InstagramPosts()
.then((Message)=>{
    console.log(Message);
    return InstagramPosts();
})
Facebook()
.then((message1)=>{
  console.log(message1);
  return Facebook();
})
.catch((error)=>{
    console.log(error);
});


async function getUserandPosts(){
    try{
        const post1=await InstagramPosts();
        console.log(post1);
        const post2=await Facebook();
        console.log(post2);
    }catch(error){
        console.log(error);
    }
}
getUserandPosts();