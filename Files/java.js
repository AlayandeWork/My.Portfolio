const texts = [
    "Data Scientist",
    "Game Designer",
    "UX/UI Designer",
    "Data Analyst",
    "Petroleum Engineer"
];

const subtitle = document.getElementById('subtitle');
let index = 0;

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

function changeText() {
    index = (index + 1) % texts.length; // Cycle through array
    typeWriterEffect(texts[index]);
}

// Initialize with the first text and start loop
typeWriterEffect(texts[index]);