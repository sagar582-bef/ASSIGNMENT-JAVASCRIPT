const person={
    name:"Sagar Manna",
    age:22,
    address:"kolkata,westbengal",
    branch:"CSE",
    passoutyear:2022,
    special:"MEARN STACK"
}
// let{name,age,...address}=person;
// console.log(name);                   // object display (... convert rest element in a object in here ,reember one thing we should give variable name same as object key )
// console.log(age);
// console.log(address);




// function details(obj){
//     console.log(obj.name);
//     console.log(obj.address)
//     console.log(obj.age);              // FIRST WAY TO DESTRUCTING OBJECT
//     console.log(obj.branch)
//     console.log(obj.passoutyear);
//     console.log(obj.special);
// }
//  details(person);
// function details({name,age,address,branch,passoutyear,special}){
//     console.log(name);
//     console.log(address)
//     console.log(age);
//     console.log(branch)                      // SECOND WAY TO DESTRUCTING OBJECT
//     console.log(passoutyear);
//   //  console.log(special);
// }
// var details=({name,age,address,branch,passoutyear})=>{
//      console.log(name);                                   // ARROW FUNCTION
//      console.log(address);
//      console.log(passoutyear);

// }
// details(person);

// let value=()=>{
//   if(true){
//       var myVar=10;         // block scope(let,const) vs function scope(var)
//       console.log(myVar);
//   }
//   console.log(myVar);
// }
// value();
// let myFun1=()=>{
//     function myFun2(){
//         console.log("Hii this is a sagar");
//         return "janau-mala-sagar";   // ei return type print er jnyo myfun1()() ke console.log er madhey print karate haye6e.
//                                      // ekhane double bracket er karan halo first bracket call er janyo second extra bracket , je function call kara hache oi function er 
//                                      //    return type ekta function tai
//     }
//     return myFun2;

//     }
//    console.log( myFun1()());

//// rest parameter
// let myFun1=(a,b,...c)=>{
//  console.log(a);
//  console.log(b);
//  console.log(c); // here c is  used for rest parameter using spread operator 

// }
// myFun1(1,2,3,4,5,6,7,8,9,0);

// Deag=fault parameter
var myFun1=(a,b=0)=>{
    let result=a+b;
    console.log(result);
}
myFun1(100,200);
myFun1(100);



//big functio how is it work
var fun1=()=>{
     function fun2(){
        console.log("hii i am first function");
    }
    function fun3(){
        console.log("hii i am second function");
        fun4();

    }
    function fun4(){
        console.log("hii i am third function") ;
        fun2();
    }
    fun3();

    console.log("hii i am outside the function");

}
fun1();
 
