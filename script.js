// ============================
// VALENTINE'S WEBSITE SCRIPT
// Interactive Elements & Animations
// ============================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initFloatingHearts();
    initFallingPetals();
    initButtons();
    initGallery();
    
    // Start entrance animations
    animateEntrance();
});

// ====== Entrance Animation ======
function animateEntrance() {
    // Add entrance class to trigger CSS animations
    document.body.classList.add('loaded');
}

// ====== Floating Hearts Background ======
function initFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartSymbols = ['💕', '💖', '💗', '💝', '💓', '💞'];
    
    // Create 15 floating hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingHeart(container, heartSymbols);
        }, i * 500);
    }
    
    // Continue creating hearts periodically
    setInterval(() => {
        createFloatingHeart(container, heartSymbols);
    }, 3000);
}

function createFloatingHeart(container, symbols) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// ====== Falling Rose Petals ======
function initFallingPetals() {
    const container = document.querySelector('.falling-petals');
    const petalSymbols = ['🌸', '🌺', '🌹'];
    
    // Create petals periodically
    setInterval(() => {
        createPetal(container, petalSymbols);
    }, 2000);
}

function createPetal(container, symbols) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (8 + Math.random() * 4) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, 12000);
}

// ====== Button Interactions ======
function initButtons() {
    const yesBtn = document.querySelector('.btn-yes');
    const noBtn = document.querySelector('.btn-no');
    
    // Yes button click
    yesBtn.addEventListener('click', handleYesClick);
    
    // No button - runs away on hover and click
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('click', moveNoButton);
    
    // Touch support for mobile
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });
}

function moveNoButton() {
    const noBtn = document.querySelector('.btn-no');
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    
    // Calculate random position within container
    const maxX = containerRect.width - noBtn.offsetWidth - 40;
    const maxY = 150; // Keep it within reasonable bounds
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    
    // Add shake effect
    noBtn.style.animation = 'none';
    setTimeout(() => {
        noBtn.style.animation = 'shake 0.5s';
    }, 10);
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// ====== Yes Button Click - Main Celebration ======
function handleYesClick() {
    // Hide question section
    document.querySelector('.question-section').style.display = 'none';
    document.querySelector('.opening-message').style.display = 'none';
    
    // Show celebration section
    const celebrationSection = document.querySelector('.celebration-section');
    celebrationSection.classList.add('active');
    
    // Trigger all celebration effects
    setTimeout(() => triggerConfetti(), 200);
    setTimeout(() => triggerFireworks(), 500);
    setTimeout(() => triggerHeartsExplosion(), 800);
    setTimeout(() => revealLoveLetter(), 1500);
    setTimeout(() => revealGallery(), 2000);
    setTimeout(() => showCuteCharacter(), 1000);
    
    // Start background music
    setTimeout(() => playBackgroundMusic(), 1000);
}

// ====== Confetti Explosion ======
function triggerConfetti() {
    const container = document.querySelector('.confetti-container');
    const colors = ['#FF69B4', '#FFB6C1', '#DC143C', '#FFC0CB', '#FF1493', '#FFD700'];
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti(container, colors);
        }, i * 30);
    }
}

function createConfetti(container, colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear`;
    confetti.style.opacity = '1';
    
    container.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

// ====== Fireworks Effect ======
function triggerFireworks() {
    const container = document.querySelector('.fireworks-container');
    
    // Create 5 firework bursts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework(container);
        }, i * 800);
    }
}

function createFirework(container) {
    const colors = ['#FF69B4', '#FFD700', '#FF1493', '#FFC0CB', '#DC143C'];
    const centerX = Math.random() * window.innerWidth;
    const centerY = Math.random() * (window.innerHeight / 2);
    
    // Create particles for explosion
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animation = 'fireworkExplosion 1s ease-out';
        particle.style.opacity = '1';
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// ====== Hearts Explosion ======
function triggerHeartsExplosion() {
    const container = document.querySelector('.hearts-explosion-container');
    const heartSymbols = ['💕', '💖', '💗', '💝', '💓', '💞', '❤️', '💘'];
    
    // Create explosion from center
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeartParticle(container, heartSymbols);
        }, i * 50);
    }
}

function createHeartParticle(container, symbols) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = '50%';
    heart.style.top = '50%';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 300;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    heart.style.setProperty('--hx', tx + 'px');
    heart.style.setProperty('--hy', ty + 'px');
    heart.style.animation = 'heartExplosion 2s ease-out';
    heart.style.opacity = '1';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// ====== Love Letter Reveal ======
function revealLoveLetter() {
    const loveLetter = document.querySelector('.love-letter');
    loveLetter.classList.add('revealed');
}

// ====== Gallery Reveal ======
function revealGallery() {
    const gallery = document.querySelector('.photo-gallery');
    gallery.classList.add('revealed');
}

// ====== Cute Character ======
function showCuteCharacter() {
    const character = document.querySelector('.cute-character');
    character.classList.add('active');
}

// ====== Photo Gallery ======
let currentSlide = 0;

function initGallery() {
    const slides = document.querySelectorAll('.gallery-slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
    
    // Add event listeners to gallery controls
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.gallery-slide');
    
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
}

// ====== Background Music ======
let backgroundMusic = null;
let isMusicPlaying = false;

function playBackgroundMusic() {
    const musicControl = document.querySelector('.music-control');
    musicControl.classList.add('active');
    
    // Create audio element (using a romantic public domain music URL)
    // Note: Users can replace this with their own music file
    backgroundMusic = new Audio();
    // Using a data URL for a simple tone as placeholder
    // Users should replace with actual music file
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    
    // Try to play (may be blocked by browser autoplay policy)
    backgroundMusic.play().catch(() => {
        // Autoplay was prevented, user will need to click music button
        isMusicPlaying = false;
        updateMusicButton();
    });
    
    isMusicPlaying = true;
    updateMusicButton();
    
    // Add click handler for music control
    musicControl.addEventListener('click', toggleMusic);
}

function toggleMusic() {
    if (!backgroundMusic) return;
    
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
    }
    
    updateMusicButton();
}

function updateMusicButton() {
    const musicControl = document.querySelector('.music-control');
    musicControl.textContent = isMusicPlaying ? '🔊' : '🔇';
}

// ====== Utility Functions ======
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// ====== Easter Egg: Extra Hearts on Click ======
document.addEventListener('click', function(e) {
    // Create a small heart at click position
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 2s ease-out';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
});
