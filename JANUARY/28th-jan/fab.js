var num=prompt("please enter a number");
num=parseInt(num);

var first=0;
console.log(first);
var second=1;
console.log(second);
for(var i=3;i<=num;i++ ){
    var third=first+second;
    console.log(third);
    first=second;
  
    second=third; 

}