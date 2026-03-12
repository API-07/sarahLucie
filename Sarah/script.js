const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const crushNameInput = document.getElementById('crushName');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const messageContainer = document.getElementById('messageContainer');
const nextPageButton = document.getElementById('nextPageButton');
const loveEffect = document.querySelector('.love-effect');

const messages = [
    "Joyeux anniversaire, mon amour... 🎂",
    "Le monde devrait s'arrêter aujourd'hui pour fêter la plus belle chose qui me soit arrivée : toi.",
    "Avant toi, je vivais. Avec toi, j'existe vraiment. 🌸",
    "A chacun des rires que tu m'adresses... je me dis que je suis la personne la plus chanceuse du monde.",
    "Un simple sourire de ta part illumine ma journée entière. 🥹",
    "Je t'aime dans tes rires, dans tes larmes. En entier, exactement comme tu es.",
    "Tu mérites d'être choyée, protégée et adorée chaque jour. 💕",
    "En toi, j'ai trouvé ma maison. Tant que tu es là, je suis chez moi.",
    "Je te promets d'être là, toujours, pour essuyer tes larmes et multiplier tes sourires. 💖",
    "(j'ai déjà commencé la caisse pour la dote, je dois te marier) 😂",
    "Et mtn voici une surprise exceptionelle pour la personne exceptionnelle que tu es."
];



let currentMessageIndex = 0;

function showMessageWithTypingAnimation() {
    if (currentMessageIndex < messages.length) {
        const text = messages[currentMessageIndex];
        const messageElement = document.createElement('p'); 
        messageElement.classList.add('message'); 
        messageContainer.appendChild(messageElement); 

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                messageElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                currentMessageIndex++;
                if (currentMessageIndex < messages.length) {
                    setTimeout(showMessageWithTypingAnimation, 1000);
                } else {
                    setTimeout(() => {
                        nextPageButton.style.display = 'inline-block';
                        nextPageButton.style.animation = 'fadeIn 1.5s ease-in-out';
                    }, 800);
                }
            }
        }, 100); 
    }
}

function createLoveEffect() {
    const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
    for (let i = 0; i < 50; i++) { 
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}

startButton.addEventListener('click', () => {
    const name = crushNameInput.value.trim();
    if (name) {
        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        nextPageButton.style.display = 'none';
        currentMessageIndex = 0;
        messageContainer.innerHTML = ''; 
        showMessageWithTypingAnimation();
    } else {
        shakeButton();
        alert("Entre ton prénom !");
    }
});

nextPageButton.addEventListener('click', () => {
    window.location.href = 'Flower.html';
});

createLoveEffect();