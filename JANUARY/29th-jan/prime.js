var num=prompt("please enter a number");
num=parseInt(num);
var count=0;
if(isNaN(num)==true){
    alert("please give input as a number");
}
else{
    if(num>1 && num>0){
for(var i=2;i<(num)^1/2/2;i++){
    if(num%i==0){
      count=count+1;
    }

}
if(count==0){
    console.log("It is a prime number");
    alert("prime number")
}
else{
    console.log("It is a not prime number");
    alert("not prime number");
}
}
else{
   alert("not a prime number"); 
}
}