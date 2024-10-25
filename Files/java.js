
//-----Header Changing text Start-----//
const texts = [
    "Data Scientist",
    "Game Designer",
    "UX/UI Designer",
    "Data Analyst",
    "Petroleum Engineer"
]

const paragraph = document.getElementById("changingText");

let currentIndex = 0;

function changeText() {

    currentIndex = (currentIndex + 1) % texts.length;


    paragraph.textContent = texts[currentIndex];
}

setInterval(changeText, 2000);
//-----Header Changing text End-----//