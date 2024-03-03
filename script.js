// Stop animation on hover
var scroller = document.querySelector('.scroller');

scroller.addEventListener('mouseenter', function() {
  scroller.style.animationPlayState = 'paused';
});

scroller.addEventListener('mouseleave', function() {
  scroller.style.animationPlayState = 'running';
});
