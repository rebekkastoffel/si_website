function resizeLogoOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        logo = document.getElementById('logo');

    if (distanceY > shrinkOn) {
        logo.classList.add("smaller");
    } else {
        logo.classList.remove("smaller");
    }
}

window.addEventListener('scroll', resizeLogoOnScroll);
