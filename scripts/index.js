window.addEventListener('scroll', function() {
    var stickyElement = document.querySelector('.cNavbar');
    var offset = stickyElement.offsetTop;

    if (window.scrollY > offset) {
      stickyElement.classList.add('fixed-top');
    } else {
      stickyElement.classList.remove('fixed-top');
    }
})