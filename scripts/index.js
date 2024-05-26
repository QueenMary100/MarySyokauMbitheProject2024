window.addEventListener('scroll', function() {
    var stickyElement = document.querySelector('.cNavbar');
    var offset = stickyElement.offsetTop;

    if (window.scrollY > offset) {
      stickyElement.classList.add('fixed-top');
    } else {
      stickyElement.classList.remove('fixed-top');
    }
});
{
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
      alert(`You searched for: ${searchTerm}`);
    }
  });
}
{
  const searchInput1 = document.getElementById('searchInput1');
  const searchButton1 = document.getElementById('searchButton1');

  searchButton1.addEventListener('click', () => {
    const searchTerm1 = searchInput1.value;
    if (searchTerm1) {
      alert(`You searched for: ${searchTerm1}`);
    }
  });
}
