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

$(window).scroll( function(){
    if( $(window).scrollTop() > 100 ) {
        $('.fixed').addClass('fixedNav');
        $('.close-element').addClass('closeElement');
        $('.show-element').addClass('showElement');
        $('.btn-search').addClass('btnSearch');
        $('.scroll-form').addClass('scrollForm');
        $('header').addClass('fix-p');
    } else {
        $('.fixed').removeClass('fixedNav');
        $('.close-element').removeClass('closeElement');
        $('.show-element').removeClass('showElement');
        $('.btn-search').removeClass('btnSearch');
        $('.scroll-form').removeClass('scrollForm');
        $('.header').removeClass('fix-p');
    }
});

    
    