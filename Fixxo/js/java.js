const arrow = document.querySelector('#top-arrow')
arrow.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: "smooth"})
})

window.addEventListener('scroll', function() {
    const scrollPosY = window.scrollY

    if (scrollPosY >= 100) {
        arrow.style.display = 'block'
    } else {
        arrow.style.display = 'none'
    }
})

try {
    const toggleButton = document.querySelector('[data-option="toggle"]')
    const target = toggleButton.getAttribute('data-target')
    toggleButton.addEventListener('click', toggleTarget)

    function toggleTarget() {
        const element = document.querySelector(target)

        if (!element.classList.contains('hide')) {
            element.classList.add('hide')
        } else {
            element.classList.remove('hide')
        }
    }
} catch {}