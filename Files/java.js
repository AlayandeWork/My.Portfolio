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

// Calling typewriter function
typeWriterEffect(texts[textIndex]);

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
function scrollToNextSection() {
    const nextSection = document.querySelector('#about'); // Change '#about' to the ID of your next section
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}
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

// Function to toggle details visibility
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

// Function to add hover listeners for desktop
function addHoverListeners() {
    document.querySelectorAll('.card1, .card2, .card3, .card4').forEach(card => {
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
    document.querySelectorAll('.card1, .card2, .card3, .card4').forEach(card => {
        card.addEventListener('click', () => toggleDetails(card));
    });
}

// Function to remove all event listeners (used when switching between modes)
function removeEventListeners() {
    document.querySelectorAll('.card1, .card2, .card3, .card4').forEach(card => {
        // Remove hover events
        card.removeEventListener('mouseenter', hoverEnter);
        card.removeEventListener('mouseleave', hoverLeave);

        // Remove click events
        card.removeEventListener('click', clickEvent);
    });
}

// Hover event handlers for removing and adding the hover effect
function hoverEnter(event) {
    const details = event.currentTarget.querySelector('.details');
    details.style.bottom = '0';
    details.style.zIndex = '1';
}

function hoverLeave(event) {
    const details = event.currentTarget.querySelector('.details');
    details.style.bottom = '-50%';
    details.style.zIndex = '0';
}

// Click event handler for toggling details visibility
function clickEvent(event) {
    toggleDetails(event.currentTarget);
}

// Function to check the screen size and apply event listeners accordingly
function updateEventListeners() {
    const isMobileOrTablet = window.matchMedia("(max-width: 1199px)").matches; // For mobile/tablet
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches; // For desktop

    // If it's mobile/tablet, apply click listeners
    if (isMobileOrTablet) {
        removeEventListeners(); // Remove hover listeners if any
        addClickListeners();    // Apply click listeners
    }
    // If it's desktop, apply hover listeners
    else if (isDesktop) {
        removeEventListeners(); // Remove click listeners if any
        addHoverListeners();    // Apply hover listeners
    }
}

// Initial event listener setup
updateEventListeners();

// Update event listeners when window is resized
window.addEventListener('resize', updateEventListeners);


