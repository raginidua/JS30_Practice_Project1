document.addEventListener('DOMContentLoaded', start);


let isDrawing = false;
let lastX = 0;
let lastY = 0;
// let hue = 0;
// let direction = true;

function start() {
  const canvas = document.getElementById('draw');
  const ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', function(e) {
    const color = document.getElementById('base').value;
    const thickness = document.getElementById('size').value;
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    if (!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
