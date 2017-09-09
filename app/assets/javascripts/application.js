

$(document).ready(function(){


  function removeFocus() {
    $('.menu .btn').each( function(){
      var $this = $(this);
      if( $this.hasClass('focus')){
        $this.removeClass('focus');
      }
    });
  };//removeFocus

  $(".opening").click(function(){
    $(".my-sections").removeClass('open-para');
    removeFocus();
  });

  $('.my-button').click(function(e) {
    var str = $( this ).text();
    console.log('working');
    // e.preventDefault();
    $(".focus").removeClass('focus');
    $(this).addClass('focus');
    $(".open-para").removeClass("open-para");
//a setTimeout has to be used as  delay() can only be used on animations
    setTimeout(function(){
       $('#' + str).addClass("open-para")
     }, 100);
  });
});


window.addEventListener('load', function() {
document.querySelector('#btn-contact').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#Layer_3').scrollIntoView({ behavior: 'smooth' });
      });
});


// $( window ).resize(function() {
//   var h = $(document).height();
//   // console.log("Page height is " + h);
// });

// var path = document.getElementById('word');
// var data = path.getAttribute('points');
//   console.log(data);
  // //
  // var svg = document.getElementById('svg');
  // var point = svg.createSVGPoint();
  // point.x = 10;
  // point.y = 20;
  // var polyline= document.getElementById('Layer_3');
  // polyline.points.appendItem(point);
// $( window ).resize(function() {
//   var top = $("#btn-contact").offset().top + window.screenY;
//   var left = $("#btn-contact").offset().left + window.screenX;
//   var width = $("#btn-contact").width();
//   var height = $("#btn-contact").height();
//
//   var middleX = left + (width/2);
//   var middleY = top + height;
//
//   // console.log("top: " + top + "| left: " + left + "| width: " + width + "| X: " + middleX + "| Y: " + middleY);

$(".main-feature .menu a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   console.log("MY MAN");
   e.preventDefault();
   $('#btn-contact').removeClass('focus');
   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 4000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

//draw Contact Box on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log("scroll is " + scroll);
    if (scroll >= 110) {
      $('#Layer_3').removeClass('static').addClass('motion');
      $('#text_1').addClass('text1');
      $('#text_2').addClass('text2');
      $('#text_3').addClass('text3');
      $('#text_4').addClass('text4');
    }
    if (scroll <= 109 && $('#Layer_3').hasClass('motion')) {
      $('#Layer_3').removeClass('motion').addClass('unmotion');
      $('#text_1').removeClass('text1');
      $('#text_2').removeClass('text2');
      $('#text_3').removeClass('text3');
      $('#text_4').removeClass('text4');
    }
});
