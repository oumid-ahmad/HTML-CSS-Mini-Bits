$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){ //away a certain  number from top
      $('#topBtn').fadeIn("slow");
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},100); //style and speed 
    //(selector).animate({styles},speed,easing,callback)
  });
});

/*  

Definition and Usage
The scrollTop() method sets or returns the vertical scrollbar position for the selected elements.
Tip: When the scrollbar is on the top, the position is 0.
When used to return the position:
This method returns the vertical position of the scrollbar for the FIRST matched element.
When used to set the position:
This method sets the vertical position of the scrollbar for ALL matched elements.

Syntax
Return vertical scrollbar position:
$(selector).scrollTop()
Set vertical scrollbar position:
$(selector).scrollTop(position) */
