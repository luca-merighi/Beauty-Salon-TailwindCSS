const scrollrReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollrReveal.reveal(`
    #home figure, #home div,
    #about figure, #about div,
    #services .text, #services .cards,
    #testimonials,
    #contacts
`, {interval: 100})