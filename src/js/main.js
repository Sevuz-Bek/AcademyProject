// $(document).ready(function () {
//     console.log('run')
// });

(function() {

    "use strict";
  
    var toggles = document.querySelectorAll(".toggle-hamburger");
  
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
  
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

    $('.navbar-toggler').click(function(e){
        $(this).toggleClass('open');
        $('.collapse').toggleClass('open');
    });
  
  })();

  var offset = $('.header__menu').offset();

    $(window).scroll( function(){
        if( $(window).scrollTop() > 200 ) {
            $('.fixed').addClass('fixedNav');
            $('.close-element').addClass('closeElement');
            $('.show-element').addClass('showElement');
        } else {
            $('.fixed').removeClass('fixedNav');
            $('.close-element').removeClass('closeElement');
            $('.show-element').removeClass('showElement');
        }
    });

    