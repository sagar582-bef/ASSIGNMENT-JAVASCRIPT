function showDisplay(id){
   if(id == 'search'){
    document.getElementById("profile").classList.replace("show","hide");
    document.getElementById("message").classList.replace("show","hide");
    document.getElementById("search").classList.replace("hide","show");
    document.getElementById("home").classList.replace("show","hide");
    document.getElementById("hom").style.color="white";
    document.getElementById("chat").style.color="white";
    document.getElementById("sa").style.color="red";
    document.getElementById("person").style.color="white";
   }
   else if(id == 'message'){
    document.getElementById("search").classList.replace("show","hide");
    document.getElementById("profile").classList.replace("show","hide");
    document.getElementById("message").classList.replace("hide","show");
    document.getElementById("home").classList.replace("show","hide");
    document.getElementById("hom").style.color="white";
    document.getElementById("chat").style.color="red";
    document.getElementById("sa").style.color="white";
    document.getElementById("person").style.color="white";
   
   }
   else if(id=='profile'){
    document.getElementById("search").classList.replace("show","hide");
    document.getElementById("message").classList.replace("show","hide");
    document.getElementById("profile").classList.replace("hide","show");
    document.getElementById("home").classList.replace("show","hide");
    document.getElementById("hom").style.color="white";
    document.getElementById("chat").style.color="white";
    document.getElementById("sa").style.color="white";
    document.getElementById("person").style.color="red";
   }
   else{
    document.getElementById("search").classList.replace("show","hide");
    document.getElementById("message").classList.replace("show","hide");
    document.getElementById("profile").classList.replace("show","hide");  
    document.getElementById("home").classList.replace("hide","show"); 
     document.getElementById("hom").style.color="red";
    document.getElementById("chat").style.color="white";
    document.getElementById("sa").style.color="white";
    document.getElementById("person").style.color="white";
   }
}