document.addEventListener('DOMContentLoaded', () => {
// =========================
// Theme toggle
// =========================
const toggleButton = document.getElementById('theme-toggle');
const lightLabel = '₊˚⊹Light Mode⊹˚₊';
const darkLabel = '₊˚⊹Dark Mode⊹˚₊';

// Load theme for this session only
if (sessionStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = darkLabel;
} else {
  document.body.classList.remove('dark-mode');
  toggleButton.textContent = lightLabel;
}

// Toggle theme
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = darkLabel;
    sessionStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = lightLabel;
    sessionStorage.setItem('theme', 'light');
  }
});



// =========================
// Modal & Carousel
// =========================
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const buttons = document.querySelectorAll('.more-btn');
const galleries = document.querySelectorAll('.gallery');




const mainImg = document.getElementById('carousel-main');
const thumbContainer = document.getElementById('carousel-thumbnails');
const leftArrow = document.getElementById('prev');
const rightArrow = document.getElementById('next');




let images = [];
let currentIndex = 0;




// Hide all galleries initially (HTML galleries are hidden with display:none)
galleries.forEach(g => g.style.display = 'none');




// Function to update main image

function updateMain() {
  mainImg.src = images[currentIndex];

  const thumbs = thumbContainer.querySelectorAll('img');
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentIndex);
  });
}



// Arrow navigation
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateMain();
});




rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateMain();
});




// Open modal on "+" button click
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const galleryId = btn.getAttribute('data-gallery');
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;




    // Load images from the selected gallery
    images = Array.from(gallery.children).map(img => img.src);
    currentIndex = 0;
    updateMain();




    // Clear and populate thumbnails
    thumbContainer.innerHTML = '';
    images.forEach((src, idx) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.style.width = '60px';
      thumb.style.height = '60px';
      thumb.style.objectFit = 'cover';
      thumb.style.cursor = 'pointer';
      thumb.style.borderRadius = '4px';




      thumb.addEventListener('click', () => {
        currentIndex = idx;
        updateMain();
      });




      thumbContainer.appendChild(thumb);
    });




    modal.style.display = 'block';
  });
});




// Close modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});




// Close modal if clicked outside content
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
});
// SIMPLE CLICK-TO-ENLARGE LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');

if (lightbox && lightboxClose) {

  document.querySelectorAll('.entry-image').forEach(img => {
    img.addEventListener('click', () => {
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
      lightbox.style.display = 'none';
    }
  });
}

// Close when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
 if (e.target.id === 'lightbox') {
   e.target.style.display = 'none';
 }
});

function renderSlide() {
  carouselMain.innerHTML = "";
  const slideClone = slides[currentIndex].cloneNode(true);

  // Remove height restriction for Tepals
  if (galleryId === 'tepals-flipbook') {
    slideClone.style.maxHeight = "none";
    slideClone.style.height = "auto";
  }

  carouselMain.appendChild(slideClone);

  // Make modal height fit the content
  modalContent.style.height = `${slideClone.scrollHeight + 60}px`; // padding
}

