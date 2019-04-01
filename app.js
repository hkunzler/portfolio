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

let word = document.getElementById("word")
let wordArray = ["developer", "programmer", "gamer", "geek"]

let i = 0;

// setInterval(function () {
//     document.getElementById('word').innerHTML = `I am a <u>${wordArray[i++]}</u>`
//     if (i == wordArray.length) {
//         i = 0
//     }
// }, 1000)

$(document).ready(function(){
  var $sections = $('.container');
  
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
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
      
    })

  });
});
