document.addEventListener('DOMContentLoaded', () => {
// =========================
// Theme toggle
// =========================
const toggleButton = document.getElementById('theme-toggle');
const lightLabel = '₊˚⊹Light Mode⊹˚₊';
const darkLabel = '₊˚⊹Dark Mode⊹˚₊';




if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = darkLabel;
} else {
  toggleButton.textContent = lightLabel;
}




toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = darkLabel;
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = lightLabel;
    localStorage.setItem('theme', 'light');
  }
});
  <script>
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercent = scrollTop / docHeight;

    if (scrolledPercent > 0.5) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
</script>




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




  // Highlight active thumbnail
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
document.querySelectorAll('.entry-image').forEach(img => {
 img.addEventListener('click', () => {
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightbox-img');


   lightboxImg.src = img.src;
   lightbox.style.display = 'flex';
 });
});


document.getElementById('lightbox-close').addEventListener('click', () => {
 document.getElementById('lightbox').style.display = 'none';
});


// Close when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
 if (e.target.id === 'lightbox') {
   e.target.style.display = 'none';
 }
});





























