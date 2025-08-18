//BeatBoards Slideshow --

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
  dots[slideIndex-1].className += " active";
}


//Manga Popup --

const preview = document.getElementById('manga-previewImage');
const lightbox = document.getElementById('manga-lightbox');
const lightboxImage = document.getElementById('manga-lightboxImage');
const closeBtn = document.querySelector('.manga-close');
const prevBtn = document.querySelector('.manga-prev');
const nextBtn = document.querySelector('.manga-next');

const gallery = Array.from(document.querySelectorAll('.manga-gallery-images img'));
let currentIndex = 0;

function mangaOpenLightbox(index) {
  currentIndex = index;
  mangaShowImage(currentIndex);
  lightbox.style.display = 'flex';
  document.body.classList.add('noscroll');
}

function mangaShowImage(index) {
  currentIndex = (index + gallery.length) % gallery.length;
  lightboxImage.src = gallery[currentIndex].src;
  lightboxImage.alt = gallery[currentIndex].alt;
}

function mangaCloseLightbox() {
  lightbox.style.display = 'none';
  document.body.classList.remove('noscroll');
}

preview.addEventListener('click', () => mangaOpenLightbox(0));
closeBtn.addEventListener('click', mangaCloseLightbox);
prevBtn.addEventListener('click', () => mangaShowImage(currentIndex - 1));
nextBtn.addEventListener('click', () => mangaShowImage(currentIndex + 1));

// Close when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (
    e.target === lightbox ||
    e.target === lightboxImage.parentElement
  ) {
    mangaCloseLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') {
      mangaShowImage(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      mangaShowImage(currentIndex - 1);
    } else if (e.key === 'Escape') {
      mangaCloseLightbox();
    }
  }
});


