// js that puts an underline under the name of the page the user is on

window.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const currentUrl = window.location.href;
  
    links.forEach(function (link) {
      if (link.href === currentUrl) {
        link.classList.add("current");
      }
    });
  });

// script that activates the play button of a video which is under an overlay

  document.querySelectorAll('.videoContainer').forEach(wrapper => {
    const overlay = wrapper.querySelector('.videoOverlay');
    const iframe = wrapper.querySelector('iframe');
  
    overlay.addEventListener('click', () => {
      // Add autoplay to iframe URL
      const src = iframe.src;
      if (!src.includes('autoplay=1')) {
        iframe.src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
      }
  
      // Hide the overlay
      overlay.style.display = 'none';
    });
  })

// script that makes image larger

const wrapper = document.querySelector('.cvWrapper');
const img = document.querySelector('.zoomableCV');

img.addEventListener('click', () => {
  wrapper.classList.toggle('zoomed');
});


