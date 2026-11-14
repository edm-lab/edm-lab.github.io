// 모바일 메뉴 열기/닫기
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  var label = btn.querySelector('.visually-hidden');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? btn.dataset.labelClose : btn.dataset.labelOpen;
  });
})();
