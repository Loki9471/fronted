let ob={firstname:"Lokesh",lastname:"kumar"};
let ob1={firstname:"Lokesh",lastname:"kumar"};
function Loki(arg1,arg2){
    console.log(arg1 +" " +this.firstname+" "+this.lastname+","+arg2);
}
Loki.call(ob,"hello","how are you");
Loki.call(ob1,"hello","how are you");


let ob2={firstname:"Lokesh",lastname:"kumar"};
let ob3={firstname:"Lokesh",lastname:"kumar"};
function Loki(arg1,arg2){
    console.log(arg1 +" " +this.firstname+" "+this.lastname+","+arg2);
}
Loki.apply(ob2,["hello","how are you"]);
Loki.apply(ob3,["hello","how are you"]);

let ob6={firstname:"Lokesh",lastname:"kumar"};
let ob7={firstname:"Lokesh",lastname:"kumar"};
function Loki(arg1,arg2){
    console.log(arg1 +" " +this.firstname+" "+this.lastname+","+arg2);
}
let Apply=Loki.bind(ob6,);
Apply("hello","how are you");

