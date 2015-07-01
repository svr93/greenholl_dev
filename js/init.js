(function (window, document, counter) {

  counter.innerHTML =
  `<a href='//www.liveinternet.ru/click' target=_blank>\
   <img src='//counter.yadro.ru/hit?t14.14;r${encodeURIComponent(document.
   referrer)}${window.screen ? '' : ';s' + screen.width + '*' + screen.height +
   '*'}${screen.colorDepth ? screen.colorDepth : screen.pixelDepth};u${
   encodeURIComponent(document.URL)};h${encodeURIComponent(document.title.
   substring(0, 80))};${Math.random()}' alt='' \
   title='LiveInternet: показано число просмотров за 24 часа, \
   посетителей за 24 часа и за сегодня' width='88' height='31'><\/a>`

 }(window, document, li_counter));
