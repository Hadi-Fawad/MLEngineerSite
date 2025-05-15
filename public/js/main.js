// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('2025SITE-1 is loaded and ready!');
    
    // Handle profile card animation
    const card = document.querySelector('.profile-card');
    const shadow = document.querySelector('.profile-card-shadow');
    if (card) card.classList.add('slide-in');
    if (shadow) shadow.classList.add('slide-in');

    // Handle page reveal animation
    setTimeout(() => {
        const pageReveal = document.getElementById('page-reveal');
        if (pageReveal) pageReveal.classList.add('hide');
    }, 400);
});