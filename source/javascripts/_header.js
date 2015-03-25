function promoResizer(){
  var promoH = $('.promo').height();
  var textH = $('.promotext').height();
  var margin = (promoH - textH) / 2;
  $('.promotext').css({'margin-top':margin});
}

$(window).resize(function(){
  promoResizer();
});

$(function(){
  promoResizer();
});
