document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Typewriter effect for hero section
    const titles = [
        "Web Developer",
        "UI/UX Designer",
        "Creative Thinker"
    ];
    let currentTitle = 0;
    let currentChar = 0;
    let isDeleting = false;
    const typewriter = document.getElementById("typewriter");

    function type() {
        const fullText = titles[currentTitle];
        if (isDeleting) {
            currentChar--;
        } else {
            currentChar++;
        }
        
        if (typewriter) {
            typewriter.textContent = fullText.substring(0, currentChar);

            if (!isDeleting && currentChar === fullText.length) {
                // Pause at the end of typing
                setTimeout(() => isDeleting = true, 1200);
                setTimeout(type, 1200);
            } else if (isDeleting && currentChar === 0) {
                // Switch to the next title
                isDeleting = false;
                currentTitle = (currentTitle + 1) % titles.length;
                setTimeout(type, 400);
            } else {
                // Type or delete at different speeds
                setTimeout(type, isDeleting ? 40 : 80);
            }
        }
    }
    
    // Start the typewriter effect if the element exists
    if (typewriter) type();
});
