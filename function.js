document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById('slider-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }
});
