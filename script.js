/* funky amination */
$(window).load(function() {
  for (var i = 0; i < 200; i++) {
    var names = ['x1', 'x2', 'y1', 'y2'],
      name = names[Math.floor(Math.random() * names.length)];
    $('.circles').append('<div class="circle-container c' + i + '"><div class="circle i' + i + '"></div></div>');
    $('.c' + i).css({
      'animation': 'z 5s .' + i + 's linear infinite'
    });
    $('.i' + i).css({
      'animation': name + ' 7.5s .' + i + 's linear infinite'
    });
  }
});
/* amination is gone */
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});