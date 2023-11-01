// 获取元素
const zoomableContent = document.getElementById('zoomableContent');

let initialDistance = 0;
let currentDistance = 0;
let isPinching = false;
let scale = 1;

// 检测触摸支持
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  // 添加触摸事件监听
  zoomableContent.addEventListener('touchstart', (event) => {
    if (event.touches.length === 2) {
      isPinching = true;

      // 计算初始触摸点之间的距离
      initialDistance = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );

      // 阻止默认的缩放行为
      event.preventDefault();
    }
  });

  zoomableContent.addEventListener('touchmove', (event) => {
    if (isPinching && event.touches.length === 2) {
      // 计算当前触摸点之间的距离
      currentDistance = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );

      // 根据距离变化调整缩放比例
      scale += (currentDistance - initialDistance) * 0.01;

      // 设置缩放样式
      zoomableContent.style.transform = `scale(${scale})`;

      // 更新初始距离
      initialDistance = currentDistance;

      // 阻止默认的缩放行为
      event.preventDefault();
    }
  });

  zoomableContent.addEventListener('touchend', () => {
    isPinching = false;
  });
}
