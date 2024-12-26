const texts = [
    "Data Scientist",
    "Game Designer",
    "UX/UI Designer",
    "Data Analyst Technician",
    "Petroleum & Gas Engineer"
];

const subtitle = document.getElementById('subtitle');
let textIndex = 0;

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


document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Toggle the 'flipped' class
    });
});

function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    typeWriterEffect(texts[textIndex]);
}


typeWriterEffect(texts[textIndex]);
setRandomBannerImage();


function scrollToNextSection() {
    const nextSection = document.querySelector('#about'); // Change '#about' to the ID of your next section
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}





function scrollToRight() {
    var container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: 600, // Adjust the value as needed
        behavior: 'smooth'
    });
}

function scrollToLeft() {
    var container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: -600,
        behavior: 'smooth'
    });
}

