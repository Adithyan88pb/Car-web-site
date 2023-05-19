//hero swiper slide
var swiper = new Swiper(".mySwiper", {
    effect:'fade', 
    spaceBetween: 0,
    speed:5000,
    loop:true,
     
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 3000,
    },
  });
  //Mobile menu

let mobileMENUICON = document.querySelector('header .fa-bars');
let menu =document.querySelector('header .menu');

mobileMENUICON.addEventListener('click', function(){
 menu.classList.toggle("open");

});
  