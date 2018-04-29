$(document).ready(function(){
  $('.thumbnail').on('mouseenter', event => {
    $(event.currentTarget).addClass('thumbnail-zoom');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('thumbnail-zoom');
  })
});
