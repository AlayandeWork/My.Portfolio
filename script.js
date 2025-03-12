const texts = [
    "Data Scientist",
    "Project Engineer",
    "IT Support Technician"
];
const currentYear = new Date().getFullYear();
const subtitle = document.getElementById('subtitle');
let textIndex = 0;


document.getElementById("currentYear").textContent = currentYear;


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
            setTimeout(changeText, 3000);
        }
    }, 100);
}


function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    typeWriterEffect(texts[textIndex]);
}

changeText()


// Smooth scroll to top
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Redirect to external links
document.getElementById('godotImage').addEventListener('click', function () {
    window.location.href = 'https://nuhu238.itch.io/shape-pattern';
});
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
    const cardWidth = parseFloat(getComputedStyle(container).fontSize) * 26;
    container.scrollBy({
        left: 440, // Adjust the value as needed
        behavior: 'smooth'
    });
}
function scrollToLeft() {
    const container = document.querySelector('.scroll-container');
    const cardWidth = parseFloat(getComputedStyle(container).fontSize) * 26;
    container.scrollBy({
        left: -440,
        behavior: 'smooth'
    });
}

function toggleDetails(card) {
    card.classList.toggle('show-details');
}
