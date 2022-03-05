function pop_up(){
    var dis=document.getElementById("pop-up");
    dis.classList.remove("none");
    dis.classList.add("show");
}
function win(){
    var dis=document.getElementById("pop-up");
    // display.classList.remove("show");
    dis.classList.add("none");
}