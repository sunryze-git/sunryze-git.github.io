document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');
  const startText = document.getElementById('start-text');
  const profileBlock = document.getElementById('profile-block');
  const backgroundMusic = document.getElementById('background-music');

  // Simple typing function that won't crash
  let i = 0;
  const message = "Click to view :3";
  function typeStartText() {
    if (i < message.length) {
      startText.textContent = message.slice(0, i + 1) + "|";
      i++;
      setTimeout(typeStartText, 100);
    }
  }
  typeStartText();

  // The Start Logic
  startScreen.addEventListener('click', () => {
    startScreen.classList.add('hidden'); // This hides the screen
    profileBlock.classList.remove('hidden'); // This shows your profile
    
    backgroundMusic.play().catch(e => console.log("Music blocked until manual interaction"));

    // Simple entrance animation
    gsap.fromTo(profileBlock, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    );
  });
});

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate offset (adjust the divisor to make it more or less subtle)
  // Higher divisor = more subtle movement
  const moveX = (clientX - centerX) / 20; 
  const moveY = (clientY - centerY) / 20;

  gsap.to('#background', {
    x: -moveX, // Moves opposite to the mouse for depth
    y: -moveY,
    duration: 1,
    ease: 'power2.out'
  });
});