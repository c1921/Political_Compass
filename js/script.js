// 获取元素
const zoomableContent = document.getElementById('zoomableContent');

let scale = 1;

// 检测屏幕宽度
const isMobile = window.matchMedia('(max-width: 767px)').matches;

// 如果是手机，添加滚轮事件监听
if (isMobile) {
  // 监听滚轮事件
  zoomableContent.addEventListener('wheel', (event) => {
    // 阻止默认的滚动行为
    event.preventDefault();

    // 根据滚轮方向调整缩放比例
    if (event.deltaY < 0) {
      scale += 0.1; // 放大
    } else {
      scale -= 0.1; // 缩小
    }

    // 设置缩放样式
    zoomableContent.style.transform = `scale(${scale})`;
  });
}
