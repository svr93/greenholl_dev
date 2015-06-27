(function (d, w) {
  (w.yandex_metrika_callbacks = []).push(function() { // используют JSONP?
    try {
      w.yaCounter25444892 = new Ya.Metrika({
        id: 25444892,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true
      });
    } catch(e) { }
  });

  var n = d.getElementsByTagName('head');

  var s = d.createElement('script');
  s.async = true;
  s.src = 'https://mc.yandex.ru/metrika/watch.js';

  n.appendChild(s);
})(document, window);
