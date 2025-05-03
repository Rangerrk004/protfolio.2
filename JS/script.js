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

// mouse curser custum
var circle = document.querySelector("#circle");


window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: .3,
    ease: Expo
  })

})




gsap.to(".SkillSet_box_circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 1.5,
})



// project section -----------------------------------
const items = document.querySelectorAll("ul li");
const products = document.querySelectorAll(".products .product");

items.forEach((item) => {
  // Active
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    // Filter
    const valueAttr = item.getAttribute("data-filter");
    products.forEach((item) => {
      item.style.display = "none";
      if (
        item.getAttribute("data-filter").toLowerCase() ==
        valueAttr.toLowerCase() ||
        valueAttr == "all"
      ) {
        item.style.display = "flex";
      }
    });
  });
});


// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', function () {
//     for (let j = 0; j < item.length; j++) {
//       list[j].classList.remove('active');
//     }
//     this.classList.add('active');

//     let dataFilter = this.getAttribute('data-filter');
//     for (let k = 0; k < itembox; k++) {
//       itembox[k].classList.remove('active');
//       itembox[k].classList.add('hide');


//       if (itembox[k].getAttribute('data-item') = dataFilter ||
//         dataFilter == "all") {
//         itembox[k].classList.remove('hide');
//         itembox[k].classList.add('active');
//       }
//     }

//   })
// }

// our AOS animetions codes




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





// Functions




