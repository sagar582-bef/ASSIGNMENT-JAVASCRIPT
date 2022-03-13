const show_popup=function(){
    document.getElementById("popup").style.display="initial";
    document.getElementById("header").style.display="none";
}
setTimeout(show_popup,2000);
document.getElementById("close_popup").addEventListener('click',function(){
    document.getElementById("popup").style.display="none"; 
    document.getElementById("header").style.display="block";
})
const json_value= function(res){
      return res.json();
}
const handle_data=function(sagar){
 
  console.log(sagar);
  console.log(sagar.main.temp);
  console.log(sagar.wind.speed);
  console.log(sagar.weather[0].description);
  let celcius=((sagar.main.temp)-32)/9;
  let max_cel=((sagar.main.temp_max)-32)/9;
  let min_cel=((sagar.main.temp_min)-32)/9;
//   <div class="weather-card">
//   <p>City</p>
//   <p>Tempareture</p>
//   <p>Wind speed</p>
//   <p>Maxium tepareture</p>
//   <p>Lowest tempareture</p>
// </div>
const parent_container=document.getElementById("parent-container");
parent_container.innerHTML='';
const div_el=document.createElement("div");
const first_p_el=document.createElement("p");
const second_p_el=document.createElement("p");
const third_p_el=document.createElement("p");
const fourth_p_el=document.createElement("p");
const fift_p_el=document.createElement("p");
const six_p_el=document.createElement("p");
first_p_el.innerText=`City-${sagar.name}`;
first_p_el.style.textAlign="center";
second_p_el.innerText=`Tempareture :- ${celcius}\u00B0 C`;
third_p_el.innerText=`Wind Speed :- ${sagar.wind.speed}`;
fourth_p_el.innerText=`Maxium Tempareture :- ${max_cel}\u00B0 C`;
fift_p_el.innerHTML=`Minimum Tempareture :- ${min_cel}\u00B0 C`;
six_p_el.innerHTML=`Sky Condition :- ${sagar.weather[0].description}`;
div_el.classList.add("weather-card");
div_el.appendChild(first_p_el);
div_el.appendChild(second_p_el);
div_el.appendChild(third_p_el);
div_el.appendChild(fourth_p_el);
div_el.appendChild(fift_p_el);
div_el.appendChild(six_p_el);

parent_container.appendChild(div_el);
document.getElementById("default").classList.add("hide");  // problem line



}
const fetch_Api= function(){
    const search_value=search_feild.value;
    // document.getElementById("default").classList.add("hide");
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
}
document.getElementById("search_btn").addEventListener('click',fetch_Api);
const enter_fn=function(e){
  if(e.key =='Enter'){
    // document.getElementById("default").classList.add("hide");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
  }
}

document.getElementById("search_feild").addEventListener('keyup',enter_fn);





//   live location weather part





const location_lat=function(sagar){
       console.log(sagar);

   document.getElementById("popup").style.display="none";  
   document.getElementById("header").style.display="block";  
  let celcius=((sagar.main.temp)-32)/9;
  let max_cel=((sagar.main.temp_max)-32)/9;
  let min_cel=((sagar.main.temp_min)-32)/9;
//   <div class="weather-card">
//   <p>City</p>
//   <p>Tempareture</p>
//   <p>Wind speed</p>
//   <p>Maxium tepareture</p>
//   <p>Lowest tempareture</p>
// </div>
const parent_container=document.getElementById("default");
parent_container.innerHTML='';
const div_el=document.createElement("div");
const first_p_el=document.createElement("p");
const second_p_el=document.createElement("p");
const third_p_el=document.createElement("p");
const fourth_p_el=document.createElement("p");
const fift_p_el=document.createElement("p");
const six_p_el=document.createElement("p");
first_p_el.innerText=`City-${sagar.name}`;
first_p_el.style.textAlign="center";
second_p_el.innerText=`Tempareture :- ${celcius}\u00B0 C`;
third_p_el.innerText=`Wind Speed :- ${sagar.wind.speed}`;
fourth_p_el.innerText=`Maxium Tempareture :- ${max_cel}\u00B0 C`;
fift_p_el.innerHTML=`Minimum Tempareture :- ${min_cel}\u00B0 C`;
six_p_el.innerHTML=`Sky Condition :- ${sagar.weather[0].description}`;
div_el.classList.add("weather-card");
// div_el.id='default_weather';
div_el.appendChild(first_p_el);
div_el.appendChild(second_p_el);
div_el.appendChild(third_p_el);
div_el.appendChild(fourth_p_el);
div_el.appendChild(fift_p_el);
div_el.appendChild(six_p_el);
parent_container.appendChild(div_el);



}

const fetch_Location=function(){
    const loaction_value=document.getElementById("location_feild").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loaction_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
}

const enter_location=function(e){
 if(e.key =='Enter'){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
 }
}

 document.getElementById("submit_btn").addEventListener('click', fetch_Location);
 document.getElementById("location_feild").addEventListener('keyup',enter_location);
