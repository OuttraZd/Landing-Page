$('.main').mousemove(function(e){
var moveX = (e.pageX * 1 / -10);
var moveY = (e.pageY * 1 / -10);
$(this).css('background-position', moveX + 'px ' + moveY + 'px')
})