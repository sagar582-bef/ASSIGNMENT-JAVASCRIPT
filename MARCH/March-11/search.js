
   let typed= new Typed (".auto-text",{
    strings:[",Api fetch",",Griphy.com",",search api",",show gif"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


const convert_json= function(res){
    return res.json();
}
const originial=function (sagar){
  console.log(sagar.data);
  console.log(sagar.data[0].id);
  for(let i=0;i<10;i++){
    var result=sagar.data[i];
    const op=document.getElementById("check");
    
    const op_text=document.createElement("img");
    op_text.src=result.images.original.webp;
    op_text.style.height="200px";
    op_text.style.width="200px";
    op_text.style.boxShadow="0px 0px 2px 2px grey"
    op.appendChild(op_text);
  }

}
// const fetchApi= function(){
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=k6fAAwZS6QOq7NKUBLE5SxdTcAyuik1N&limit=25&rating=g").then(convert_json).then(originial);
// }


// document.getElementById("btn").addEventListener('click',fetchApi);





const search_barFn= function(searh_value){
  console.log(searh_value.data);
const parent_id=document.getElementById("search");
parent_id.innerHTML='';
for(let i=0;i<searh_value.data.length;i++){
     let search_result=searh_value.data[i];
     
      // parent_id.innerHTML='';
     const search_el=document.createElement("img");
     
     search_el.src=search_result.images.original.url;
     search_el.style.height="100px";
     search_el.style.width="100px";
     search_el.style.boxShadow="0px 0px 2px 2px grey";
     search_el.id=searh_value.data[i].id;
    
     document.getElementById("check").classList.replace("trending-gif","hide");
     parent_id.appendChild(search_el);
     
     search_el.addEventListener("click",function(){
       search_el.style.height="90%";
      search_el.style.width="70%";
      search_el.style.position="absolute";
      search_el.style.top="-20%";
      search_el.style.left="15%";
      search_el.style.right="15%";
      search_el.style.bottom="5%";
    search_el.style.zIndex="105";
    console.log(search_el.id);
    // search_el.id="just";
    //  document.getElementsByTagName("search").style.display="none";
     })

    //  window.addEventListener("click", function(event){
    //       if(event.target != document.getElementById(searh_value.data[i].id)){
    //        document.getElementById(searh_value.data[i].id).style.display="none";
             
    //       }
    //   })

}
}


const searchFn= function(){
    const ip=document.getElementById("search-value").value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=k6fAAwZS6QOq7NKUBLE5SxdTcAyuik1N&q=${ip}`).then(convert_json).then(search_barFn);
}


document.getElementById("search_btn").addEventListener('click',searchFn)