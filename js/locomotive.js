const scroll = new LocomotiveScroll({
    smooth: true,
    el: document.querySelector('[data-scroll-container]'),
    lerp: 0.15,
})

window.onload = function() {
    scroll.update()
}