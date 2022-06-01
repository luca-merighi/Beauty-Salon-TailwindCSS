function changeHeaderWhenScrolling() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('shadow-default')
    } else {
        header.classList.remove('shadow-default')
    }
}

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top-button')

    window.scrollY >= 560 
        ? backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-full')
        : backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-full')
}

const sections = document.querySelectorAll('main section[id]')
function activateLinkAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop 
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        
        checkpointStart && checkpointEnd 
            ? document.querySelector('#header nav ul li a[href*=' + sectionId + ']').classList.add('link')
            : document.querySelector('#header nav ul li a[href*=' + sectionId + ']').classList.remove('link')
    }
}

window.addEventListener('scroll', () => {
    changeHeaderWhenScrolling()
    activateLinkAtCurrentSection()
    backToTop()
})