document.addEventListener('DOMContentLoaded', () => {
  const zoomImages = document.querySelectorAll('.zoomable');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const thumbnails = document.querySelectorAll('.thumb');
  const currentImage = document.querySelector('.main-image img');
  const buyBtn = document.getElementById('buy-btn');
  const waLink = document.getElementById('whatsapp-link');

  // Thumbnail click: change main image + active border
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active-thumb'));
      thumb.classList.add('active-thumb');
      currentImage.src = thumb.src;
    });
  });

  // Click on any zoomable image: open lightbox
  zoomImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightbox.setAttribute('aria-hidden', 'true');
  }

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === lightboxClose) {
      closeLightbox();
    }
  });
  lightboxImg.addEventListener('click', e => e.stopPropagation());

  lightboxClose.addEventListener('click', closeLightbox);

  // Buy button alert
  buyBtn.addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const qty  = document.getElementById('qty').value;
    alert(`شكراً بزاف! القياس: ${size} | الكمية: ${qty} 🚀`);
  });

  // WhatsApp dynamic link
  waLink.addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const qty  = document.getElementById('qty').value;
    const product = document.querySelector('.title').innerText.trim();
    waLink.href = `https://wa.me/212654078525?text=${encodeURIComponent(`سلام، بغيت نسول على ${product} - القياس: ${size} - الكمية: ${qty}`)}`;
  });
});
