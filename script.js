function showNav() {
    document.getElementById('mobile-hamburger').style.display = 'none';
    document.getElementById('mobile-nav').style.display = 'flex';
    document.getElementById('mobile-nav-close').style.display = 'block';
    document.getElementById('social').style.display = 'none';
}

function hideNav() {
    document.getElementById('mobile-hamburger').style.display = 'block';
    document.getElementById('mobile-nav').style.display = 'none';
    document.getElementById('mobile-nav-close').style.display = 'none';
    document.getElementById('social').style.display = 'block';
}