window.onload = function() {
  var progressBar = document.getElementById('progress-bar');
  var mainContent = document.querySelector('.main-content');

  updateProgressBar(); // Call initially to set progress bar width

  window.addEventListener('scroll', updateProgressBar);

  function updateProgressBar() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scrollTop / scrollHeight) * 100;
    var mainContentHeight = mainContent.offsetHeight;
    var progressBarWidth = (scrollTop / (mainContentHeight - window.innerHeight)) * 100;
    progressBar.style.width = progressBarWidth >= 100 ? '100%' : progressBarWidth + '%';
  }
};
