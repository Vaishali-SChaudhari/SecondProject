// let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    // searchBtn.classList.remove('fa-times');
    // searchBar.classList.remove('active');
   menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// searchBtn.addEventListener('click', () => {
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
    
// });
// formBtn.addEventListener('click', () => {
    
//     formBtn.classList.add('active');
// });
// formClose.addEventListener('click' , () => {
    
//     formClose.classList.remove('active');
// });

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// for light/dark mode

const changeMode = () =>{
    let mybody = document.body;
    mybody.classList.toggle('mydark');
};
//coupon code
function loadCoupon (){
    document.getElementById('coupon').style.visibility = "visible";
    document.getElementById('main').style.opacity = "0.4";
    document.getElementById('home').style.opacity = "0.4";
}
function closeCoupon (){
    document.getElementById('coupon').style.visibility = "hidden";
    document.getElementById('main').style.opacity = "1";
     document.getElementById('home').style.opacity = "1";
}

window.onload = loadCoupon();

// code for weather geo
let x =document.getElementById('out');
let y =document.getElementById('weather');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = `Geo Not Supported`
    }
}

function showPosition(data){
  console.log(data)
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  let out = `latitude is ${lat} & longitude is ${long}`
//   x.innerText = out 
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
  fetch(url,{method: 'GET'})
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      let city = data.city.name
      let temp = data.list[0].temp.day
    let out = `${city}'s temp is ${temp} °C`
    x.innerText = out 
  })
}