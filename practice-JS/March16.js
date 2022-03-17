console.log("Today practice day");
// const fn=function (a,b){
//     return a*b;
// }
// //fn(10,20);
// console.log(fn(10,20));
// const main_fn = function(a){
//      console.log("hii");
//      a();
// }
// const a=function(){
//     console.log("it is call back function");
// }
// main_fn(a);
// const fun=function(){
//     return function(){
//         console.log("nested function");
//     }
// };
// fun()();
// var num1=+prompt("enter a number");
// var num2=+prompt("enter another number");
// let res=num1+num2;
// if(isNaN(num1)==false && isNaN(num2)==false){
//     console.log(res);
// }
// else{
//     alert("give proper number");
// }
// let s="abcdef";
// let res=s.split("");
// console.log(res);
// let num2="abcdecefcghcjickj";
// let result=num2.split("c");
// console.log(result);
// let arr=["sagar","mala","janu","babu"];
// let result=arr.join(":");
// console.log(result);
// const obj1={
//     first_name:"sagar",
//     age:22
// };
// const obj2={
//     first_name:"mala",
//     age:24,
// }
// const obj={
//     [obj1]:"sm",
//     [obj2]:"ma",

// }
// console.log(obj);
// const student={
//     first_name:"sagar",
//     last_name:"manna",
//     age:22,
//     dept:"CSE",
//     gf:"Mala",
//     address:{
//       vill:"hendal ketki",
//       po:"muriganga",
//       pin:"743373",
//       state:"westbengal",
//     },
//     printDetails:function(){
//         console.log("hlw");
//     }
// }
// student.hobby="playing cricket";
// student.gifnick="janu";
// student.address.pin=743392;
// delete student.last_name;
// console.log(student);
// student.printDetails();
// let first_name="  sagar   ";
// console.log(first_name.length);
// let result=first_name.trim();
// console.log(result);
// console.log(result.length);
// console.log(result.toUpperCase());
// const arr=[22,"sagar",{gf:"mala",age:22},
// [2018,2019,"break","continue","good","bad","i dont know what will be happen",
// {
// feel:"100%",
// affair:"i dont know",
// status:"change and ambisous",
// plan:"try one time infront of her",
// goal:"8-12 laks per anual"
// }]];
// // console.log(arr[3][7].status);
// // delete arr[3][7].feel;
// // console.log(arr[3][7]);
// // console.log(arr.pop());
// let result=arr.unshift("checking");
// // console.log(arr);
// // arr.pop();
// arr.push("fuck you");
// delete arr[3];
// console.log(arr);
// let age=8;
// let drink=age>=5?"coffe":"milk";
// console.log(drink);
// const arr1=["one","two","three"];
// const arr3=["four","five","six"];
// const arr2=[...arr1,"sagar","janu",...arr3];
// console.log(arr2);
// let result=arr2.splice(2,1,"mala");
// console.log(arr2);
// for(let i of arr2){
//     console.log(i);
// }
// for(let i in arr2){
// console.log(arr2[i]);
// }
// let[var1,var2,...res]=arr2;
// console.log(var1);
// console.log(var2);
// console.log(res);

// const obj={
//     first_name:"sagar",
//     last_name:"manna",
//     age:22,
//     dept:"CSE",
//     "my hobbies":["playing cricket","riding"],
// }
//console.log(obj["my hobbies"][1]);
// for (let i in obj){
//     console.log(i,":",obj[i]);

// }
// const obj2={
//     gender:"male",
//     speed:"pro",
//     range:"2minutes to 2.30 minutes",
//     back:"always punch",
// }
//const obj3={...obj,...obj2,gf:"mala",boobs:"all time nipples suckings "};
//console.log(obj3);
// let{gender:sex,speed:power,...al}=obj2;
// sex="transgender";
// console.log(sex);
// power="ultra level pro after 2 round";
// console.log(power);
// console.log(al);
// const print=()=>{
//     console.log("feel you");
// }
// print();
// const sum=(num1,num2,num3)=> num1+num2+num3;
// let result=sum(3,4,6);
// console.log(result);
// console.log(sum(2,3,4));
const person={
    name:"sagar",
    age:22,
    dept:"CSE"
}
// const printDetails=(obj)=>{
//      console.log(obj.name);
//      console.log(obj.age);
//      console.log(obj.dept);
// }
// printDetails(person);
let clicked=false;
const changeText=function(){
  if(clicked==false){
    document.getElementById("text").innerText="js practice";
    document.getElementById("text").style.color="green";
    clicked=true;
  }
  else{
    document.getElementById("text").innerText="DOM practice";
    document.getElementById("text").style.color="red";
    clicked=false;
  }
}
document.getElementById("btn").addEventListener("click",changeText);




const dayChange=function(day){
     document.getElementById("daytext").innerText=day;
     document.getElementById("daytext").style.color="lightcoral";
}


document.getElementById("btn1").addEventListener('click',dayChange("sunday"));

document.getElementById("btn2").addEventListener('click',dayChange("monaday"));

// document.getElementById("btn3").addEventListener("click",dayChange("tuesday"));