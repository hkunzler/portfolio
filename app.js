


$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#initials").html("Harmony Kunzler")
      document.getElementById("initials").style.textDecoration =
        "none";
    } else {
      $('#initials').html(' ');
      document.getElementById("initials").style.textDecoration = "none";
    }
  });
});
///MATERIALIZE

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  // var instances = M.Sidenav.init(elems, options);
  var instances = M.Sidenav.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });


$(document).ready(function(){
  var $sections = $('.container-section');
  
  $(window).scroll(function(){
    
    var currentScroll = $(this).scrollTop() + $(window).height();
    console.log(currentScroll)
    var $currentSection
    
    $sections.each(function(){
      var divPosition = $(this).offset().top;
      
      if( divPosition + 1 < currentScroll ){
        $currentSection = $(this);
        
      }
      
      var id = $currentSection.attr('id');
   	 $('a').removeClass('active-nav');
   	 $("[href=#"+id+"]").addClass('active-nav');
      
    })

  });
});


