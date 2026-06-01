/* ========== 导航高亮 ========== */
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  // 移动端菜单切换
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // 点击导航链接后自动关闭
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // 滚动时导航栏阴影
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ========== 滚动进入动画 (Intersection Observer) ==========
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // 降级：不支持时直接显示
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ========== 联系表单提交处理 ==========
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('请填写完整的表单信息。');
        return;
      }

      var mailto = 'mailto:18325976076@163.com'
        + '?subject=' + encodeURIComponent('来自 ' + name + ' 的留言')
        + '&body=' + encodeURIComponent('姓名：' + name + '\n邮箱：' + email + '\n\n留言内容：\n' + message);

      window.location.href = mailto;
    });
  }
});
