// const img_Arr=["https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.news18.com/ibnlive/uploads/2021/08/1628056310_dogdrinking-1600x1200.png","http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg"];
// const chnage_image = function(sagar){
//      const new_id=sagar.target.id;
//      console.log(sagar.target);
//      //sagar.target.src = img_Arr[new_id];
//      let last=document.getElementById("zoom-img");
//      last.sagar.target.src=img_Arr[new_id];
// }


// const images=document.getElementsByTagName("img");
// for(let i=0;i<images.length;i++){
//   const result=images[i];
//   result.addEventListener('click', chnage_image)
// }
























// var counter=[0,0,0,0,0,0,0,0];
// function like(n,id){
//     counter[n] += 1;
   
//      render(n,id);
   

   

// }
// function dislike(n,id) {
//     counter[n] -= 1; 
//     render(n,id);
// }
// function render(n,id) {
 
//     var ab=document.getElementById(id);
//     ab.innerText=counter[n];
// }
// // ABOVE JS CODE FOR LIKE AND DISLIKE IN GALLERY IMAGE

// {
//     //IMAGE ZOOM IN PART
// const img= document.getElementById("img1");
// img.addEventListener("click", function(){
//     document.getElementById("img1").classList.add("zoom-img");
//     document.getElementById("btn").classList.replace("hide","show-btn");
// });
// // IMAGE ZOOM OUT/ ORIGINAL SIZE PART WHEN USER  CLICK ON CLOSE BUTTON
// const button= document.getElementById("btn");
// button.addEventListener("click" ,function(){
//     document.getElementById("img1").classList.remove("zoom-img");
//     document.getElementById("btn").classList.replace("show-btn","hide");
// });
// // IMAGE ZOOM OUT/ ORIGINAL SIZE PART WHEN USER  CLICK ON OUTSIDE THE ZOOM IMAGE BODY
// window.addEventListener("click", function(event){
//     if(event.target != img){
//         document.getElementById("img1").classList.remove("zoom-img");  
//         document.getElementById("btn").classList.replace("show-btn","hide");  
//     }
// })
// }

// var classname = document.getElementsByClassName("img");



// for (var i = 0; i < classname.length; i++) {
//     classname[i].addEventListener('click', function(){
//       console.log(classname[i]);
//       console.log("hii");
//         // if(classname[i] == "0"){
//         //     console.log("hii")
//         // }
//         // else if(classname[i] == 1){
//         //     console.log("hlw");
//         // }
//         // else{
//         //     console.log("janina");
//         // }
//     });
// }
// let image = document.querySelectorAll('img');

// for ( let i of image) {
//   i.addEventListener('click', function() {
//     // document.querySelector('.msg').innerHTML = this.innerHTML;
//     document.querySelectorAll('img').style.display="none";
//   });
// }



// var fakeImages = document.querySelectorAll(".fake-image");
// 	for (var i = 0; i < fakeImages.length; i++) {
// 	  console.log('fakeImage: ', fakeImages[i]);
//       fakeImages[i].addEventListener('click',function(){
//          var second=document.getElementById(fakeImages[i]);
//          second.innerHTML="red";
//       })
// 	}
// document.querySelectorAll("img").addEventListener('click', function() {
//    //handle click
//    console.log("checking")
//  })
// document.querySelectorAll('.some-class').forEach(item => {

//    item.addEventListener('click', event => {
//      //handle click
//    }
//  }
//  )
// const elements = document.querySelectorAll('img');

// // adding the event listener by looping
// elements.forEach(element => {
//    element.addEventListner('click', (e)=>{
//      console.log('someone hit me');
//    });
// });
