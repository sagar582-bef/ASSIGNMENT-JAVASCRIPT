const arr1=["sagar","mala","janu"];
//const arr2=[...arr1,"anek","valo"];
const arr2=arr1.slice(0).concat(["ami"]);
console.log(arr2);
for(let sagar of arr2){
    console.log(sagar.toUpperCase());

}