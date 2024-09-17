// main.js
document.addEventListener('DOMContentLoaded', function() {
    const thumbBar = document.querySelector('.thumb-bar');
    const displayedImg = document.querySelector('.displayed-img');
    const overlay = document.querySelector('.overlay');
    const darkenButton = document.querySelector('.dark');
  
    // 示例图片数组，你可以根据实际情况修改
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  
    // 初始化缩略图
    images.forEach((image) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', image);
      newImg.setAttribute('alt', 'Thumbnail');
      newImg.addEventListener('click', () => {
        displayedImg.src = image;
      });
      thumbBar.appendChild(newImg);
    });
  
    // 添加点击按钮变暗的功能
    darkenButton.addEventListener('click', () => {
      // 切换遮罩层的显示状态
      if (overlay.style.display === 'none') {
        overlay.style.display = 'block';
      } else {
        overlay.style.display = 'none';
      }
    });
  });
  