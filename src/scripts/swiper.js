const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})