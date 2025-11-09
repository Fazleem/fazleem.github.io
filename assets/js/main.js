// current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// smooth-scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
  });
});

// highlight active nav link while scrolling
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const sections = Array.from(navLinks).map(link => {
  const target = document.querySelector(link.getAttribute('href'));
  return target;
}).filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const activeLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (!activeLink) return;
      navLinks.forEach(link => link.classList.remove('active'));
      activeLink.classList.add('active');
    });
  }, {threshold:0.5});

  sections.forEach(section => observer.observe(section));
}
