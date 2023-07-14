(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Tranding carousel
    $(".tranding-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });


    // Carousel item 1
    $(".carousel-item-1").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Carousel item 2
    $(".carousel-item-2").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Carousel item 3
    $(".carousel-item-3").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    

    // Carousel item 4
    $(".carousel-item-4").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    // Modal
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function(event) {
  event.preventDefault()
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 
});






  
    
})(jQuery);

//Password Toggle
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var passwordToggle = document.querySelector(".password-toggle");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.classList.add("active");
    } else {
      passwordInput.type = "password";
      passwordToggle.classList.remove("active");
    }
  }

  function toggleNavbar() {
    var navbarCollapse = document.getElementById("navbarCollapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  }
  

 //signup form validation// 
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    var form = document.getElementById("myForm");
    var errorMessages = {};
  
    if (form.checkValidity()) {
      var formData = new FormData(form);
  
      var formValues = {};
      for (var [key, value] of formData.entries()) {
        formValues[key] = value;
      }
  
      console.log(formValues);
      // Perform additional actions with the form data (e.g., send to server)
    } else {
      var inputs = form.querySelectorAll('input[name]:invalid');
      inputs.forEach(function(input) {
        var fieldName = input.name;
        var errorMessage = input.parentNode.nextElementSibling;
  
        if (errorMessage && errorMessage.classList.contains("error-message")) {
          errorMessage.textContent = input.validationMessage;
        }
  
        errorMessages[fieldName] = errorMessage;
      });
  
      setTimeout(function() {
        for (var fieldName in errorMessages) {
          var errorMessage = errorMessages[fieldName];
          if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.textContent = "";
          }
        }
      }, 5000);
    }
  }

  //login form validation// 
function submitLoginForm(event) {
    event.preventDefault(); // Prevent form submission
  
    var form = document.getElementById("loginForm");
    var errorMessages = {};
  
    if (form.checkValidity()) {
      var formData = new FormData(form);
  
      var formValues = {};
      for (var [key, value] of formData.entries()) {
        formValues[key] = value;
      }
  
      console.log(formValues);
      // Perform additional actions with the form data (e.g., send to server)
    } else {
      var inputs = form.querySelectorAll('input[name]:invalid');
      inputs.forEach(function(input) {
        var fieldName = input.name;
        var errorMessage = input.parentNode.nextElementSibling;
  
        if (errorMessage && errorMessage.classList.contains("error-message")) {
          errorMessage.textContent = input.validationMessage;
        }
  
        errorMessages[fieldName] = errorMessage;
      });
  
      setTimeout(function() {
        for (var fieldName in errorMessages) {
          var errorMessage = errorMessages[fieldName];
          if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.textContent = "";
          }
        }
      }, 5000);
    }
}
  
  
  
  




