var $body = $('body');

$('html').on('keydown', function(){
  var $div = $('<div>');
  var circleHoriz = Math.random() * 1000;
  var circleVert = Math.random() * 1000;
  $div.css('left', circleHoriz);
  $div.css('top', circleVert);
  $div.addClass('ball');
  $body.append($div);
})
