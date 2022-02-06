var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
        {
            "name": "Mithun",
            "marks": 15
        },
        {
            "name": "Abhijit",
            "marks": 17
        },
        {
            "name": "Sanajit",
            "marks": 19
        },
        {
            "name": "Subrata",
            "marks": 21
        },
        {
            "name": "Biswajit",
            "marks": 0
        },
        {
            "name": "Sanat",
            "marks": 27
        },
    ],
};
var num=prompt("please enter a number");
num=parseInt(num);
if(isNaN(num)==true){
    alert("please give a number");
}
else{
    for(var i=0;i<obj.students.length;i++){
     if(num<obj.students[i].marks){
         console.log( obj.students[i].name," get marks  more or equal of ",num);

     }
     else{
         console.log(obj.students[i].name," could not cross or equal the marks ",num);
     }
     
     
    }

}