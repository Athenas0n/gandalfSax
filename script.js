// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');

    }
    else{
        $('header').removeClass('nav-show');
    }

})

//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".burger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar li");

    hamburger.onclick = () => {

        navbar.classList.toggle("nav-active");

        //Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
            }
        });
        //hamburger animation
        hamburger.classList.toggle("toggle");
    }

}

window.onload = () => navSlide();






// Dark/Light mode
const r = document.querySelector(':root');

// Create a function for getting a variable value
function getRValue() {
    // Get the styles (properties and values) for the root
    const rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    alert("The value of --main-background is: " + rs.getPropertyValue('--main-background'));
}

// Create a function for setting a variable value
function setRValues() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--main-background', 'lightblue');
}


