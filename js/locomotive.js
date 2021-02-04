const scroll = new LocomotiveScroll({
    smooth: true,
    el: document.querySelector('[data-scroll-container]'),
    lerp: 0.15,
})

window.onload = function() {
    document.querySelector(".load").style.display = "none"
}