//Изминение хедера
var menu = $("#menu");
var link = $(".link");
var mobileMenu = $("#mobile-menu-block")
var logo = $(".logo_container");
var logoBlack = $(".logo_container_black");
var logoTwo = $(".logo_two");
var logoTwoBlack = $(".logo_two_black");
var tagName = $(".tag_name");
var tagNameTwo = $(".tag_name_two");
var firstLine = $(".first_line");
var secondLine = $(".second_line");
var thirdLine = $(".third_line");

//Если разрешение больше 1280

$(document).ready(function () { // js - document.addEventListener('DOMContentLoaded', function ()
  function checkWidth() {
    var windowWidth = $('body').innerWidth(); // чистый js - document.body.clientWidth;
    if (windowWidth >= 1280) {
      tagNameTwo.css("display", "none");
      tagName.css("display", "none");
      $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= 100) {
          menu.css("background-color", "rgba(255, 255, 255, 0.87)");
          menu.css("backdrop-filter", "blur(17px)");
          menu.css("transition-duration", "0.3s");
          menu.css("transition-delay", "0.3s");
          link.css("color", "black");
          mobileMenu.css("backdrop-filter", "blur(10px)")
          logoBlack.css("display", "block");
          logoTwoBlack.css("display", "block");
          logo.css("display", "none");
          logoTwo.css("display", "none");
          tagNameTwo.css("display", "none");
          tagName.css("display", "none");

        } else if (top <= 200) {
          menu.css("background-color", "black");
          menu.css("backdrop-filter", "blur");
          menu.css("transition-duration", "0.3s");
          menu.css("transition-delay", "0.3s");
          link.css("color", "white");
          mobileMenu.css("backdrop-filter", "blur(10px)");
          logo.css("display", "block");
          logoTwo.css("display", "block");
          logoBlack.css("display", "none");
          logoTwoBlack.css("display", "none");
          tagNameTwo.css("display", "none");
          tagName.css("display", "none");
        }
      });
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});


// Если разрешение меньше 1280
$(document).ready(function () { //document.addEventListener('DOMContentLoaded', function ()
  function checkWidth() {
    var windowWidth = $('body').innerWidth(); // чистый js - document.body.clientWidth;
    if (windowWidth <= 1279) {
      $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= 100) {
          tagNameTwo.css("display", "block");
          tagName.css("display", "none");
          firstLine.css("border", "1px solid black");
          secondLine.css("border", "1px solid black");
          thirdLine.css("border", "1px solid black");
          menu.css("background-color", "rgba(255, 255, 255, 0.87)");
          menu.css("backdrop-filter", "blur(17px)");
          menu.css("transition-duration", "0.3s");
          menu.css("transition-delay", "0.3s");
          link.css("color", "black");
          mobileMenu.css("backdrop-filter", "blur(10px)")
          logoBlack.css("display", "block");
          logoTwoBlack.css("display", "block");
          logo.css("display", "none");
          logoTwo.css("display", "none");
        } else if (top <= 200) {
          tagName.css("display", "block");
          tagNameTwo.css("display", "none");
          firstLine.css("border", "1px solid white");
          secondLine.css("border", "1px solid white");
          thirdLine.css("border", "1px solid white");
          menu.css("background-color", "black");
          menu.css("backdrop-filter", "blur");
          menu.css("transition-duration", "0.3s");
          menu.css("transition-delay", "0.3s");
          link.css("color", "white");
          mobileMenu.css("backdrop-filter", "blur(10px)");
          logo.css("display", "block");
          logoTwo.css("display", "block");
          logoBlack.css("display", "none");
          logoTwoBlack.css("display", "none");
        }
      });
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
///////////

    $('.menu').on('click', function () {
        $('.menu').css("display", "none");
            $('.close-menu').css("display", "block");
            $('.close-menu').css("color", "white");

            $('#mobile-menu-block').css("display", "block");
        
    });
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= 100) {
            $('.close-menu').css("color", "black");
        } else if (top <= 200) {
            $('.close-menu').css("color", "white");
        } 
    }); 

//////////////


//Подчеркивание заголовков на главной странице
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 300, // offset (in px) from the original trigger point
  delay: 1.5, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease-in-sine", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
