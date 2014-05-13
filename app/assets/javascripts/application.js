// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

  // parallax scrolling & block height equalization
  var windowSize = 0;
  $window = $(window);
  $('div[data-type="background"]').each(function(){
    // declare the variable to affect the defined data-type
    var $scroll = $(this);
    $(window).scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards
      var yPos = -($window.scrollTop() / $scroll.data('speed'));
      // background position
      var coords = '50% '+ yPos + 'px';
      // move the background
      $scroll.css({ backgroundPosition: coords });
    });
  });  // end section function

  function equalHeight(group) {
      tallest = 0;
      group.each(function() {
        $(this).removeAttr('style');
        thisHeight = $(this).css({'height':'auto'}).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
      });
      group.height(tallest);
  }

  function getWindowSize() {
    windowSize = $(window).width();
  }

  $(window).on('load resize',function() {
    getWindowSize();
    equalHeight($("#services .service-description"));
  });
});
