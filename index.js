var navbar = document.getElementsByClassName("navbar")
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        navbar[0].style.backgroundColor = "rgba(0, 0, 0, 0.600)"
    }else{
        navbar[0].style.backgroundColor = "transparent"
    }
})





