document.addEventListener('DOMContentLoaded', () => {
    let scrolling = false;
    const sections = document.querySelectorAll('.section1, .section2, .section3');
    let currentSection = 0;

    window.addEventListener('wheel', (e) => {
        if (!scrolling) {
            scrolling = true;
            if (e.deltaY > 0 && currentSection < sections.length - 1) {
                currentSection++;
            } else if (e.deltaY < 0 && currentSection > 0) {
                currentSection--;
            }
            sections[currentSection].scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                scrolling = false;
            }, 800);
        }
    });
});
