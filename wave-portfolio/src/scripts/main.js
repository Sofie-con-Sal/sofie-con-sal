document.addEventListener('DOMContentLoaded', () => {
    const wave = document.querySelector('.wave');
    const aboutBlock = document.querySelector('.about-block');
    const aboutText = document.querySelector('.about-text');

    wave.addEventListener('click', () => {
        wave.classList.toggle('expanded');
        aboutBlock.classList.toggle('visible');
    });
});