$(function(){
  // 読み込みアニメ////////////////////////////////////////////////
  var h = $(window).height();
  $('.wrapper').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
  $(window).on('load', function () { // 読み込み完了したら実行する
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.wrapper').css('display', 'block');
    $('.fOut').delay(100).queue(function(){
      $(this).addClass("fIn");
    })
    $('.fOut2').delay(500).queue(function(){
      $(this).addClass('fIn2');
    })
    $('.fOut3').delay(900).queue(function(){
      $(this).addClass('fIn3');
    })
  });
  // ドロワーメニュー//////////////////////////////////
  $(document).ready(function() {
    $('.drawer').drawer();
  });
  // スライダー///////////////////////////////////////
  $('.topSlider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:false,
    arrows: false,  
  });
  // スムースクロー////////////////////////////////////////////////
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});