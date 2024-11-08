const texts = [
    "Data Scientist",
    "Game Designer",
    "UX/UI Designer",
    "Data Analyst",
    "Petroleum Engineer"
];

const bannerImages = [
    "6.jpg",  // Replace with actual image paths
    "10.jpg",
    "13.jpg",
    "11.jpg"
];

const subtitle = document.getElementById('subtitle');
const bannerImage = document.getElementById('banner-image');
let textIndex = 0;
let imageIndex = 0;

// Typewriter effect for changing text
function typeWriterEffect(text) {
    let i = 0;
    subtitle.textContent = ''; // Clear current text
    subtitle.style.width = '0'; // Reset width for typing effect
    
    const typingInterval = setInterval(() => {
        subtitle.textContent += text.charAt(i);
        subtitle.style.width = 'auto'; // Expand width as text is typed
        i++;
        
        if (i >= text.length) {
            clearInterval(typingInterval);
            setTimeout(changeText, 3000); // Pause before next text
        }
    }, 100); // Typing speed (in ms)
}

// Function to cycle through text
function changeText() {
    textIndex = (textIndex + 1) % texts.length; // Cycle through text array
    typeWriterEffect(texts[textIndex]);
}

// Function to change banner image every 2 seconds
function changeBannerImage() {
    imageIndex = (imageIndex + 1) % bannerImages.length; // Cycle through images
    bannerImage.src = bannerImages[imageIndex];
}

// Start typewriter effect for the first text
typeWriterEffect(texts[textIndex]);

// Change banner image every 2 seconds
setInterval(changeBannerImage, 1800000);
