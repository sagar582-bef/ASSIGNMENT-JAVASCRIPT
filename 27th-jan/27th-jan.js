var r=prompt("size of array");
var arr = [];
var num=+prompt("please enter a number");
for(var i=0;i<r;i++){
   // arr[i]=new Array(r);
arr[i]= +prompt("Enter random number");


}
console.log(arr[i]);
var max=arr[0];
for(var i=0;i<r;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
alert(max);
console.log( max);