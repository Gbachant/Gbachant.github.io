$(document).ready(function(){
  $('.thumbnail').on('mouseenter', event => {
    $(event.currentTarget).find('img').addClass('thumbnail-zoom');
  }).on('mouseleave', event => {
    $(event.currentTarget).find('img').removeClass('thumbnail-zoom');
  })
  
  $('.carousel').carousel({
  interval: false
  });
});
