(() => {
  if (window.self === window.top) return;

  document.documentElement.classList.add('embedded');

  document.addEventListener('DOMContentLoaded', () => {
    const pages = {
      'index.html': 'https://sites.google.com/view/jiayilyu/home',
      'research.html': 'https://sites.google.com/view/jiayilyu/research'
    };

    for (const link of document.querySelectorAll('a[href]')) {
      const href = link.getAttribute('href');
      if (pages[href]) {
        link.href = pages[href];
        link.target = '_blank';
        link.rel = 'noopener';
      } else if (/\.pdf(?:[?#]|$)/i.test(href)) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
    }
  });
})();
