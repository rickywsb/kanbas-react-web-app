document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    menuToggle.addEventListener("click", function() {
        sidebarOverlay.style.width = "250px";
    });

    closeSidebar.addEventListener("click", function() {
        sidebarOverlay.style.width = "0";
    });
});



// 监听下拉按钮的点击事件
document.getElementById('dropdownMenuButton').addEventListener('click', function() {
    var closeIcon = document.querySelector('.close-icon');
    if (closeIcon.style.display === 'none' || closeIcon.style.display === '') {
        closeIcon.style.display = 'block';
    } else {
        closeIcon.style.display = 'none';
    }
});

// 监听取消图标的点击事件
document.querySelector('.close-icon').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.remove('show'); // 关闭下拉菜单
    this.style.display = 'none'; // 隐藏取消图标
});