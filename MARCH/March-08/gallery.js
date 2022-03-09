var counter=[0,0,0,0,0,0,0,0];
function like(n,id){
    counter[n] += 1;
   
     render(n,id);
   

   

}
function dislike(n,id) {
    counter[n] -= 1; 
    render(n,id);
}
function render(n,id) {
 
    var ab=document.getElementById(id);
    ab.innerText=counter[n];
}
// ABOVE JS CODE FOR LIKE AND DISLIKE IN GALLERY IMAGE

{
    //IMAGE ZOOM IN PART
const img= document.getElementById("img1");
img.addEventListener("click", function(){
    document.getElementById("img1").classList.add("zoom-img");
    document.getElementById("btn").classList.replace("hide","show-btn");
});
// IMAGE ZOOM OUT/ ORIGINAL SIZE PART WHEN USER  CLICK ON CLOSE BUTTON
const button= document.getElementById("btn");
button.addEventListener("click" ,function(){
    document.getElementById("img1").classList.remove("zoom-img");
    document.getElementById("btn").classList.replace("show-btn","hide");
});
// IMAGE ZOOM OUT/ ORIGINAL SIZE PART WHEN USER  CLICK ON OUTSIDE THE ZOOM IMAGE BODY
window.addEventListener("click", function(event){
    if(event.target != img){
        document.getElementById("img1").classList.remove("zoom-img");  
    }
})
}
