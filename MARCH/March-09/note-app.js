const tittle = [];


// js for note tittle display
const tittle_render = function () {
    const parent_id = document.getElementById("note-tittle-id");
    parent_id.innerHTML='';
    for (let i = 0; i < tittle.length; i++) {
        const new_div=document.createElement("div");
        new_div.id="under_div";
        parent_id.appendChild(new_div);
        let p_id = document.createElement('h2');
        let btn=document.createElement("button");
        p_id.innerText = tittle[i];
        p_id.style.color = "red";
        p_id.style.textAlign="center";
        p_id.id="special";
        btn.style.display="none";
        btn.innerHTML="❌";
        btn.id="close_btn";
        new_div.appendChild(p_id);
        new_div.appendChild(btn);
        new_div.addEventListener('click',function(){
              new_div.classList.add("popup");
              new_div.id="close_try";
              btn.style.display="initial";
              btn.style.float="right";
        });
        window.addEventListener('mouseup',function(e){
            let result=document.getElementById("close_try");
            if(e.target != result){
              result.classList.remove("popup");  //  error line
              btn.style.display='none';  
            
           
         
            }
        });

       document.getElementById("close_btn").addEventListener('click',function(){
           document.getElementById("close_try").remove("popup");
       })
    }
}
//js for user give note tittle value in input feild
const add_tittle = function () {
    let tittle_value = document.getElementById("note-tittle-input").value;
    tittle.push(tittle_value);
    tittle_render();
    tittle_value='';
    
}

  // eventlistener in note tittle add button 
document.getElementById("tittle_btn").addEventListener('click', add_tittle);


const details=[];
//js for notes details display
const details_render=function(){
    const parent_id = document.getElementById("note-tittle-id");
    parent_id.innerHTML='';
    for(let i=0;i<details.length;i++){
     let result=details[i];
     const new_div=document.createElement("div");
     const p_id = document.createElement('p');
     p_id.innerText=result;
     p_id.style.color="red";
     p_id.style.textAlign="center";
     new_div.appendChild(p_id);
     parent_id.appendChild(new_div);

    //  p_id.addEventListener("click",function(){
    //     document.getElementById("note-tittle-id").classList.replace("note-tittle","popup") ;

    //  })

    }
}
 //js for user give notes details in input feild
const add_details= function(){
    let details_value=document.getElementById("note-details-input").value;
    details.push(details_value);
    details_value='';
    details_render();
}

// eventlistener in note details add button 
document.getElementById("details_btn").addEventListener('click',add_details);


// const zoomDetails=function(){
//     document.getElementById("note-tittle-id").classList.replace("note-tittle","popup")
// }

// document.getElementById("note-tittle-id").addEventListener('click',zoomDetails);