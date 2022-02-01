console.log("hii");
var obj={
    name:"sagar",
    lastname:"manna",
    mobile:7432897576,
    succes:["ssc","jexpo","4th-sem","swadesh software pvt ltd"],
    failure:{
        HS:"fail",
        sem:["1st-sem","2nd-sem","3rd-sem","5th-sem"],
        big_mistake:["D2DESK project","MIT admission","Govorment preparetion","DFCCIL"],
        WEEK:["lazy","imagination-thinking","smoking","MALA","Server","dream","never thinking reality"],
        now_plan:{
            institute:"geekstar",       //   obj.failure.WEEK
            course:{
                name:"MERN stack developer",
                duration:"7 moth",
                fronted_language:"html,css,javascript,react",
                backend_language:"Node js",
                database:"mongodb",
                project:"5+ live project",
                desire:"I want to learn advance plus basic DSA in 2month",
                confirmation:"i will get job within september 2022",
                location:{
                    choice1:"bangalore",
                    choice2:"hyderbad",
                    choice3:"chennai",         //obj.faliure.now_plan.course.location
                    choice4:"kerala",
                    choice5:"gurgaon",

                }
            }
        }


    }


}
var k= "lastname";
console.log(obj[k]);  // this is the way to store one key in variable and then we can access using this syntax(avoid "" always when calling)
console.log(obj.failure.now_plan.course.location.choice3);

obj.failure.now_plan.course.location.choice3="noida";
obj.failure.now_plan.course.location.choice4="chennai";

console.log(obj.failure.now_plan.course.location.choice3);
console.log(obj.failure.now_plan.course.location.choice4);
console.log(obj.failure.now_plan.course.location);
console.log(obj.failure.WEEK);
obj.failure.WEEK.splice(2,1);
console.log(obj.failure.WEEK);
obj.failure.WEEK.splice(3,1);
console.log(obj.failure.WEEK);
obj.failure.WEEK.splice(2,0,"miss u so much");
console.log(obj.failure.WEEK);




