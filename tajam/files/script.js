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

var testimonialIndex = 1;
showTestimonial(testimonialIndex);

function otherTestimonial(n) {
	testimonialIndex += n;
	showTestimonial(testimonialIndex);
}
function showTestimonial(n) {
	var y;
	var testimonials = document.getElementsByClassName("testimonial");
	var photos = document.getElementsByClassName("testimonials-client-photo");
	
	if (n > testimonials.length) {testimonialIndex = 1}
	if (n < 1) {testimonialIndex = testimonials.length}
	
	for (i = 0; i < testimonials.length; i++){
		testimonials[i].style.display = "none";
	}
	for (i = 0; i < photos.length; i++) {
		photos[i].className = photos[i].className.replace(" testimonials-photo-current", "");
	}
	testimonials[testimonialIndex-1].style.display = "block";
	photos[testimonialIndex-1].className += " testimonials-photo-current";
}
