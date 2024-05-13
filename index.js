document.addEventListener('DOMContentLoaded', function () {
  var progressBar = document.getElementById('progress-bar');

  function updateProgressBar() {
    var navHeight = document.querySelector('nav').offsetHeight;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var scrollPercent = ((scrollTop - navHeight) / (documentHeight - windowHeight - navHeight)) * 100;
    progressBar.style.height = scrollPercent + '%';
  }

  // Update progress bar on scroll
  window.addEventListener('scroll', updateProgressBar);

  // Update progress bar on resize (e.g., orientation change)
  window.addEventListener('resize', updateProgressBar);

  // Update progress bar on initial page load
  updateProgressBar();
});
