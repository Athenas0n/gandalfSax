// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');

    }
    else{
        $('header').removeClass('nav-show');
    }

})


//audio
const audioElement = new Audio('/Audio/sax.mp3');
audioElement.autoplay=true;
audioElement.loop=true;

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
// Dark/Light mode

// Create a function for setting a variable value
const changeTheme = () => {
    //Retrieve the properties from the root section of style.css
    // Set the value of variable --blue to another value (in this case "lightblue")
    const r = document.querySelector(':root');
    const b = document.querySelector('#section1 .filter');
    const themeButton = document.querySelector(".navbar #bw");
    const wireButton = document.querySelector(".navbar #wire");
    let rs = getComputedStyle(r);
    themeButton.onclick = () => {
        let theme = rs.getPropertyValue('--theme');
        //alert("The value of --theme is: " + rs.getPropertyValue('--theme'));
        if (theme === rs.getPropertyValue('--dark-theme')) {
            r.style.setProperty('--theme', rs.getPropertyValue('--light-theme'));
            r.style.setProperty('--main-background', '#fff');
            r.style.setProperty('--main-fonts-color', 'rgb(0,0,0)');
            r.style.setProperty('--main-decor-color', 'rgb(0,0,0)');
            b.style.background="url(/Images/macarena.gif) no-repeat";
            b.style.setProperty('opacity', 0.8);
            b.style.setProperty('background-size', 'cover');
            b.style.setProperty('background-position', 'center')
            r.style.setProperty('--main-header-background', 'transparent')
            wireButton.style.opacity = 1;
            audioElement.pause();
            //r.style.setProperty('--main-header-background', 'rgba(255, 255, 255, 0.53)')
        } else if(theme === rs.getPropertyValue('--light-theme')) {
            r.style.setProperty('--theme', rs.getPropertyValue('--dark-theme'));
            r.style.setProperty('--main-background', 'rgb(0,0,0)');
            r.style.setProperty('--main-fonts-color', '#fff');
            r.style.setProperty('--main-decor-color', '#fff');
            b.style.background="url(/Images/Gandalf.gif) no-repeat";
            b.style.setProperty('opacity', 0.8);
            b.style.setProperty('background-size', 'cover');
            b.style.setProperty('background-position', 'center')
            r.style.setProperty('--main-header-background', 'rgba(0, 0, 0, 0.53)')
            audioElement.play();
        } else {
            alert('Theme change error, value of --theme is ' + theme);
        }

    }

}

window.onload = () => {
    navSlide()
    changeTheme();
}









