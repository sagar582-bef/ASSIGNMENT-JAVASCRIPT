const person={
    name:"Sagar Manna",
    age:22,
}
for(let sagar in person){
    console.log(sagar,":",person[sagar]);
}
const key1="sagar";
const key2="manna";
const key3="mala";
const key4="janu";
const janu={
    [key1]:key3,
    [key2]:key4,
}
for(let brea in janu){
    console.log(brea,":",janu[brea]);
}
let{sagar:change,manna}=janu;
change="hii"
console.log(change);