$(document).ready(function(){
  $('.menu-toggle').click(function() {
    $('main').toggleClass('f-screen');
    $('header').toggleClass('f-screen');
    $('footer').toggleClass('f-screen');
    $('.menu').toggleClass('menu-hidden');
    $('.menu-toggle').toggleClass('labelfs');

    event.preventDefault();
  }); // end of fullscreen toggle
 $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
	}); // end of smoothscroll
    $('.title').hover(
    function() {
      $('.firstname').data('initialText', $('.firstname').text());
      $('.firstname').text("Design");
      $('.firstname').css('margin-left', '-=13.6px');
      $('.lastname').data('initialText', $('.lastname').text());
      $('.lastname').text("Interactive");
      $('.lastname').css('margin-left', '-=241px');
    },
    function() {
      $('.firstname').text($('.firstname').data('initialText'));
      $('.firstname').css('margin-left', '');
      $('.lastname').text($('.lastname').data('initialText'));
      $('.lastname').css('margin-left', '');
  }); // end of header effect
}); // end of ready function


/* not being used

$(window).scroll(function(){
  $(".title").css("opacity", 1 - $(window).scrollTop() / 250);
}); // end of scroll fade-out

if ( $(window).width() >= 695) {
  var pContainerHeight = $('header').height();
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll <= pContainerHeight) {
      $('.title').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
      });
    }
  });
} // end of logo parallax

*/
