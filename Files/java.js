// Define constants for texts and current year
const texts = [
    "Data Scientist",
    "Game Designer",
    "UX/UI Designer",
    "Data Analyst Technician",
    "Petroleum & Gas Engineer"
];
const currentYear = new Date().getFullYear();
const subtitle = document.getElementById('subtitle');
let textIndex = 0;

// Set the current year in the footer
document.getElementById("currentYear").textContent = currentYear;

// Typing effect for the subtitle text
function typeWriterEffect(text) {
    let i = 0;
    subtitle.textContent = '';
    subtitle.style.width = '0';

    const typingInterval = setInterval(() => {
        subtitle.textContent += text.charAt(i);
        subtitle.style.width = 'auto';
        i++;

        if (i >= text.length) {
            clearInterval(typingInterval);
            setTimeout(changeText, 3000); // Change text after typing effect finishes
        }
    }, 100);
}

// Change the text for the typing effect
function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    typeWriterEffect(texts[textIndex]);
}

// Smooth scroll to top
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Redirect to external links
document.getElementById('marsImage').addEventListener('click', function () {
    window.location.href = 'https://space-fje5.onrender.com';
});
document.getElementById('githublink').addEventListener('click', function () {
    window.location.href = 'https://github.com/AlayandeWork';
});
document.getElementById('linkedinlink').addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com/in/abdulmatinnuhu/';
});
document.getElementById('logo').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Flip card on click
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Scroll horizontally in the scroll container
function scrollToRight() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: 600, // Adjust the value as needed
        behavior: 'smooth'
    });
}
function scrollToLeft() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: -600,
        behavior: 'smooth'
    });
}

// Function to toggle details visibility on mobile or tablet
function toggleDetails(card) {
    const details = card.querySelector('.details');
    if (details.style.bottom === '0px') {
        details.style.bottom = '-50%';
        details.style.zIndex = '0';
    } else {
        details.style.bottom = '0';
        details.style.zIndex = '1';
    }
}

// Function to remove all event listeners
function removeEventListeners() {
    document.querySelectorAll('.card1').forEach(card => {
        card.replaceWith(card.cloneNode(true)); // Removes all attached event listeners
    });
}

// Function to add hover listeners for desktop
function addHoverListeners() {
    document.querySelectorAll('.card1').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const details = card.querySelector('.details');
            details.style.bottom = '0';
            details.style.zIndex = '1';
        });
        card.addEventListener('mouseleave', () => {
            const details = card.querySelector('.details');
            details.style.bottom = '-50%';
            details.style.zIndex = '0';
        });
    });
}

// Function to add click listeners for mobile/tablet
function addClickListeners() {
    document.querySelectorAll('.card1').forEach(card => {
        card.addEventListener('click', () => toggleDetails(card));
    });
}

// Check screen size and update event listeners
function updateEventListeners() {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const isTablet = window.matchMedia("(max-width: 1199px) and (min-width: 768px)").matches;
    const isDesktop = window.matchMedia("(max-width: 1800px) and (min-width: 1200px)").matches;

    if (isMobile || isTablet) {
        removeEventListeners(); // Remove any existing listeners
        addClickListeners();    // Add click listeners for mobile/tablet
    } else if (isDesktop) {
        removeEventListeners(); // Remove any existing listeners
        addHoverListeners();    // Add hover listeners for desktop
    }
}

// Initial setup
updateEventListeners();

// Update listeners on window resize
window.addEventListener('resize', updateEventListeners);
