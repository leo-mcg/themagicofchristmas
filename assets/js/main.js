// The Magic of Christmas — small progressive enhancements. Site works without JS.
(function () {
  var menuBtn = document.querySelector('.menu-button');
  var nav = document.getElementById('primary-nav');
  function closeAll(except) {
    document.querySelectorAll('.nav-item.open').forEach(function (li) {
      if (li !== except) {
        li.classList.remove('open');
        var t = li.querySelector('.nav-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
      menuBtn.querySelector('.label').textContent = open ? 'Close' : 'Menu';
    });
  }
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var li = btn.closest('.nav-item');
      var open = !li.classList.contains('open');
      closeAll(li);
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item') && window.matchMedia('(min-width: 1061px)').matches) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openItem = document.querySelector('.nav-item.open');
    if (openItem) {
      closeAll();
      var t = openItem.querySelector('.nav-toggle');
      if (t) t.focus();
    } else if (nav && nav.classList.contains('open')) {
      menuBtn.click();
      menuBtn.focus();
    }
  });
  // Lightweight YouTube facade: loads the player only when asked.
  document.querySelectorAll('[data-youtube]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-youtube');
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = btn.getAttribute('aria-label') || 'Video';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      btn.replaceWith(f);
    });
  });
})();
