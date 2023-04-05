//navigation

const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].getElementByclassName += " active";
} 

//autopanning script

var div = document.getElementsByClassName('work-home')[0];
var duration = 2000; // duration of the animation in milliseconds
var start = Date.now(); // timestamp when the animation starts

function animateScroll() {
  var elapsed = Date.now() - start; // elapsed time in milliseconds
  var progress = Math.min(elapsed / duration, 1); // progress from 0 to 1
  div.scrollTop = progress * (div.scrollHeight - div.clientHeight); // calculate the new scrollTop value

  if (progress < 1) {
    // request another animation frame if the animation is not finished yet
    requestAnimationFrame(animateScroll);
  }
}
window.onload = animateScroll(); // start the animation
