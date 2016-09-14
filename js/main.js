$(document).ready(function(){
    /*  parallaxEffect();*/
      stickyEffect();
      smoothscrollEffect();
      mobileMenu();
    });

/*          PARALLAX            */
/*
function parallaxEffect() {
    	$('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#testimonials').parallax("50%", 0.3);
    $('#getInTouch').parallax("50%", 0.3);
}
*/
/*          STICKY          */

function stickyEffect() {
    $("#home").sticky({ topSpacing: 0 });
}

/*          SMOOTH SCROLL       */

function smoothscrollEffect() {
    $('body').smoothScroll({
        delegateSelector: 'ul.nav a, #arrowDown, .buttons a'
      });

      $('p.subnav a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
          scrollTarget: link.hash
        });
      });
}

/*              TOOLTIP         */
$('#yearlyrevenue').tooltip('show')
$('#yearlyrevenue').tooltip('hide')
$('#mybudget').tooltip('show')
$('#mybudget').tooltip('hide')

/*              MOBILE MENU       */
function mobileMenu(){
  $('#mobileMenu').click(function(){
    if($('.navbar-menu').is(':hidden')){
      $('.navbar-menu ul, .navbar-menu').css('display','block');
    }else {
    $( '.navbar-menu ul, .navbar-menu' ).css( "display","none" );
  }
      
  });
}