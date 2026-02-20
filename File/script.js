// Increment view counter saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    incrementViewCount();
    addScrollEffect();
});

// Function untuk increment view count
function incrementViewCount() {
    const viewCountElement = document.getElementById('viewCount');
    let currentCount = parseInt(viewCountElement.textContent);
    
    // Random increment antara 1-5 views
    const increment = Math.floor(Math.random() * 5) + 1;
    const newCount = currentCount + increment;
    
    // Animate the number change
    animateCounter(viewCountElement, currentCount, newCount, 500);
    
    // Simpan ke localStorage
    localStorage.setItem('viewCount', newCount);
}

// Animate counter
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Efek scroll parallax
function addScrollEffect() {
    const profileSection = document.querySelector('.profile-section');
    const avatar = document.querySelector('.avatar');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        profileSection.style.transform = `translateY(${scrollPos * 0.2}px)`;
        avatar.style.transform = `scale(${1 - scrollPos * 0.001}) rotate(${scrollPos * 0.1}deg)`;
    });
}

// Load view count from localStorage jika ada
window.addEventListener('load', () => {
    const savedViewCount = localStorage.getItem('viewCount');
    if (savedViewCount) {
        document.getElementById('viewCount').textContent = savedViewCount;
    }
});

// Tambahan: Print info saat halaman dimuat
console.log('%c🎉 Profile Platform', 'color: #6432c8; font-size: 20px; font-weight: bold;');
console.log('%cDesign inspired by guns.lol', 'color: #888; font-size: 12px;');
