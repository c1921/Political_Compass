const scaleSlider = document.getElementById('scaleSlider');
const scaledDiv = document.getElementById('scaledDiv');

scaleSlider.addEventListener('input', (event) => {
  const scaleValue = event.target.value;
  scaledDiv.style.transform = `scale(${scaleValue})`;
  const containerWidth = scaledDiv.clientWidth * scaleValue;
  scaledDiv.style.width = containerWidth + 'px';
});
