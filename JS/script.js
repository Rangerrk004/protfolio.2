// alert('');
jQuery(document).ready(function () {
  /// story section slider
  $("#slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#review-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });




  $("#team-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
});


var circle = document.querySelector("#circle");


window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: .3,
    ease: Expo
  })

})





// const toggleBtn = document.querySelector('.toggle-btn')
// const toggleBtnIcon = document.querySelector('.toggle-btn i')
// const dropDownMenu = document.querySelector('.dropdown-menu')


// toggleBtn.oneclick = function () {
//   dropDownMenu.classList.toggle('open')
//   const isOpen = dropDownMenu.classList.contains('open')

//   toggleBtnIcon.classList = isOpen
//   ? 'fa-solid fa-xmark'
//   : 'fa-solid fa-bars'
// }


// alert('Hi please reload now ');

console.log("Abhijit Sarkar");



// booliyan
// console.log(profile.Isfollow);
isFlowe = true;
console.log(isFlowe);

const profile = {
  fullName: "abhijit",
  cgps: 20,
  Isfollow: true,
};
// name change typs to other name
profile["cgps"] = profile["cgps"] + 2;

console.log(profile["cgps"]);


// Oparetors

// let a = 5;
// let b = 6;
// console.log("a=", a, "b=", b);
// console.log('a+b =', a + b);
// console.log('a-b =', a - b);
// console.log('a/b =', a / b);
// console.log('a * b =', a * b);
// modulus
// console.log('a % b =', a % b);
// expon
// console.log('a ** b =', a ** b);

// unary oparator
let a = 5;
let b = 6;


console.log("a=", a, "b=", b);
console.log("a-- =", a--);
console.log("a", a);


// assigment oparator

let c = 7;
let d = 8;
// c **= 2;
console.log("c==d", c == d);



// loops & strings  here down bellow

for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}


let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum =", sum);




// Functions

function abhijitAditi(msg) {
  console.log(msg);

}

abhijitAditi("I love you");



