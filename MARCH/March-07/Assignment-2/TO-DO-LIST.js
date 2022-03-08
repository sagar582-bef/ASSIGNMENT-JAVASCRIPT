function show_ToDoList(id){
    if(id=='yesterday'){
        document.getElementById("yesterday").classList.remove("hide");
      
        document.getElementById("yesterday").classList.add("show");
        document.getElementById("tommorow").classList.replace("show","hide");
        document.getElementById("today").classList.replace("show","hide");
        document.getElementById("yes").style.color="red";
        document.getElementById("to").style.color="white";


        
    }
    else if(id=='tommorow'){
        document.getElementById("tommorow").classList.replace("hide","show");
        document.getElementById("yesterday").classList.replace("show","hide");
        document.getElementById("today").classList.replace("show","hide");
        document.getElementById("to").style.color="white";
        document.getElementById("tom").style.color="red";
    }
    
    else{
        document.getElementById("yesterday").classList.replace("show","hide");
        document.getElementById("tommorow").classList.replace("show","hide");
        document.getElementById("today").classList.replace("hide","show");
        document.getElementById("tom").style.color="white";
        document.getElementById("to").style.color="red";
        document.getElementById("yes").style.color="white";

    }
}