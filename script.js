// Constants for texts and current year
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

// Initialize typing effect
typeWriterEffect(texts[textIndex]);

// Smooth scroll to top
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll to the next section
function scrollToNextSection() {
    const nextSection = document.querySelector('#about'); // Update the ID if needed
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth horizontal scrolling in containers
function scrollToRight() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({ left: 600, behavior: 'smooth' });
}

function scrollToLeft() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({ left: -600, behavior: 'smooth' });
}

// Redirect to external links
document.getElementById('marsImage').addEventListener('click', () => {
    window.location.href = 'https://space-fje5.onrender.com';
});
document.getElementById('githublink').addEventListener('click', () => {
    window.location.href = 'https://github.com/AlayandeWork';
});
document.getElementById('linkedinlink').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/abdulmatinnuhu/';
});
document.getElementById('logo').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Toggle flip-card state on click
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
});

// Toggle card details visibility
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

// Add hover listeners for desktop
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

// Add click listeners for mobile/tablet
function addClickListeners() {
    document.querySelectorAll('.card1, .card2, .card3, .card4').forEach(card => {
        card.addEventListener('click', () => toggleDetails(card));
    });
}

// Remove all event listeners
function removeEventListeners() {
    document.querySelectorAll('.card1, .card2, .card3, .card4').forEach(card => {
        card.removeEventListener('mouseenter', hoverEnter);
        card.removeEventListener('mouseleave', hoverLeave);
        card.removeEventListener('click', clickEvent);
    });
}

// Update event listeners based on screen size
function updateEventListeners() {
    const isMobileOrTablet = window.matchMedia("(max-width: 1199px)").matches;
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

    if (isMobileOrTablet) {
        removeEventListeners();
        addClickListeners();
    } else if (isDesktop) {
        removeEventListeners();
        addHoverListeners();
    }
}

// Initial setup for event listeners
updateEventListeners();

// Update event listeners on window resize
window.addEventListener('resize', updateEventListeners);
