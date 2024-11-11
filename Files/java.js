const texts = [
    "Data Scientist",
    "Game Designer",
    "UX/UI Designer",
    "Data Analyst",
    "Petroleum Engineer"
];

const bannerImages = [
    "6.jpg",
    "10.jpg",
    "13.jpg",
    "11.jpg"
];

const subtitle = document.getElementById('subtitle');
const bannerImage = document.getElementById('banner-image');
let textIndex = 0;
let lastImageIndex = -1;

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

function setRandomBannerImage() {
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * bannerImages.length);
    } while (randomIndex === lastImageIndex);
    
    bannerImage.src = bannerImages[randomIndex];
    lastImageIndex = randomIndex;
}

typeWriterEffect(texts[textIndex]);
setRandomBannerImage();


function scrollToNextSection() {
    const nextSection = document.querySelector('#about'); // Change '#about' to the ID of your next section
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

