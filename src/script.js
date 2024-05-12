document.addEventListener('DOMContentLoaded', function () {
  var clickSound = document.getElementById('clickSound');

  document.addEventListener('click', function () {
    clickSound.play();
  });
});