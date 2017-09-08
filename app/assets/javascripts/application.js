// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

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

$( window ).resize(function() {
  var h = $(document).height();
  console.log("Page height is " + h);
});

//draw Contact Box on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log("scroll is " + scroll);
    if (scroll >= 450) {
      $('#Layer_3').removeClass('static').addClass('motion');
      $('#text_1').addClass('text1');
      $('#text_2').addClass('text2');
      $('#text_3').addClass('text3');
      $('#text_4').addClass('text4');
    }
    if (scroll <= 350 && $('#Layer_3').hasClass('motion')) {
      $('#Layer_3').removeClass('motion').addClass('unmotion');
      $('#text_1').removeClass('text1');
      $('#text_2').removeClass('text2');
      $('#text_3').removeClass('text3');
      $('#text_4').removeClass('text4');
    }
});
