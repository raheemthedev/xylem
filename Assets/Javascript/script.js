let wavyMenu = document.querySelector("#wavyMenu");
let menuOver = document.querySelector(".menuOver");
let xBtn = document.querySelector('.xBtn');
let userIcon = document.querySelector("#userIcon");
let profileOver = document.querySelector(".profileOver");
let yBtn = document.querySelector('.yBtn');
let body = document.querySelector('body');


wavyMenu.addEventListener('click', () => {
  menuOver.classList.add('show');
  body.classList.add('overNone');
});

xBtn.addEventListener('click', () => {
  menuOver.classList.remove('show');
  profileOver.classList.remove('show');
  body.classList.remove('overNone');
})

userIcon.addEventListener("click", () => {
  profileOver.classList.add('show');
  body.classList.add('overNone');
})

yBtn.addEventListener('click', () => {
  profileOver.classList.remove('show');
  body.classList.remove('overNone');
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


