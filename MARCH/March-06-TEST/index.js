var loader=document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})



function show_productDetails(id){
    document.getElementById(id).classList.replace("hide","product-details");

}
function close_productList(id){
    document.getElementById(id).classList.add("hide");
}

