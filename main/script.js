$(document).ready(function () {
    
$('.header__burger').click(function (e) { 
    e.preventDefault();
    $('.header__section').toggleClass('show');
    
});

// let link ="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
// fetch(link)
// .then(response => response.json())
// .then(data => console.log(data))



// $('.header__section').animate(
//     {
        
//     },1000,
//     function(){
//         $('.header__section').toggleClass('show');
//     }
// )

// slide
let count = 0;
let element = $(".header__body-row")

function Slider() {
element.css({'transform':`translateX(${count*110}% )`}) 
count+=110;   
if (count >110) {
    count=0
}
}
count=0
// setInterval(Slider,2000)

});

// map

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

