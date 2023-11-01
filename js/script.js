var container = document.getElementById('scrollContainer');
var image = document.getElementById('imageContainer');

var startX, startY, pinchStartDistance;

container.addEventListener('touchstart', function (e) {
e.preventDefault();

if (e.touches.length === 1) {
startX = e.touches[0].pageX;
startY = e.touches[0].pageY;
} else if (e.touches.length === 2) {
pinchStartDistance = getPinchDistance(e.touches[0], e.touches[1]);
}
});

container.addEventListener('touchmove', function (e) {
e.preventDefault();

if (e.touches.length === 1) {
var offsetX = e.touches[0].pageX - startX;
var offsetY = e.touches[0].pageY - startY;

container.scrollLeft -= offsetX;
container.scrollTop -= offsetY;

startX = e.touches[0].pageX;
startY = e.touches[0].pageY;
} else if (e.touches.length === 2) {
var pinchDistance = getPinchDistance(e.touches[0], e.touches[1]);
var scale = pinchDistance / pinchStartDistance;

pinchStartDistance = pinchDistance;

var currentWidth = parseFloat(getComputedStyle(image).width);
var newWidth = currentWidth * scale;

image.style.width = newWidth + 'px';
}
});

function getPinchDistance(touch1, touch2) {
var dx = touch1.pageX - touch2.pageX;
var dy = touch1.pageY - touch2.pageY;
return Math.sqrt(dx * dx + dy * dy);
}