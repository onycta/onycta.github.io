 var slideIndex=1;
showSlides(slideIndex);

function currentSlide(n){
	slideIndex = n;
	showSlides(slideIndex);
} 

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slider-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  if (slideIndex > slides.length) {slideIndex = 1} 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("slider-dot-active", "");
  }
  dots[slideIndex-1].className += " slider-dot-active";
  slides[slideIndex-1].style.display = "block"; 
  slideIndex++;
  setTimeout(showSlides, 5000); 
} 
