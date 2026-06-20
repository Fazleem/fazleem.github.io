document.addEventListener('DOMContentLoaded', function() {
  // set current year in footer
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if (el) el.textContent = y;

  // mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }

  // smooth scrolling for anchor links to account for sticky nav
  var headerOffset = 80;
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#0') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        var offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        // close mobile nav if open
        if (links && links.classList.contains('open')) links.classList.remove('open');
      }
    });
  });

  // refresh AOS if loaded
  if (window.AOS && typeof window.AOS.refresh === 'function') {
    window.AOS.refresh();
  }
});
