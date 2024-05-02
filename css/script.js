window.onload = function() {
    var slider = document.querySelector('.slider');
    var slides = document.querySelectorAll('.slide');
  
    function updateSlides() {
      var currentIndex = Math.floor(slides.length / 2);
      slides.forEach(function(slide) {
        slide.classList.remove('middle');
      });
      slides[currentIndex].classList.add('middle');
    }
  
    updateSlides();
  
    setInterval(function() {
      moveSlider(1);
    }, 3000);
  };
  