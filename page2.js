
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Image upload handling
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('carPhotos');

uploadArea.addEventListener('click', () => {
    fileInput.click();
});

// Form submission
document.getElementById('carListingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your car has been listed successfully! Renters will be able to see your listing soon.');
});
