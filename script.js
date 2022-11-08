// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');

    }
    else{
        $('header').removeClass('nav-show');
    }

})


//audio-sax
const sax = new Audio('/Audio/sax.mp3');
sax.autoplay=true;
sax.loop=true;

//audio-macarena
const macarena = new Audio('/Audio/macarena.mp3');
macarena.loop=true;

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


const themeButtonFunc = () => {
    const themeButton = document.querySelector(".navbar #bw");
    themeButton.onclick = () => {
        changeTheme();
    }
}
// Dark/Light mode
// Create a function for setting a variable value
const changeTheme = () => {
    const r = document.querySelector(':root');
    const b = document.querySelector('#section1 .filter');
    const wireButton = document.querySelector(".navbar #wire");
    const title = document.querySelector(".intro #title");
    let rs = getComputedStyle(r);
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
        b.style.setProperty('background-position', 'center');
        r.style.setProperty('--main-header-background', 'transparent');
        r.style.setProperty('--scrollbar-colour', '#0b0c0f');
        r.style.setProperty('--scrollbar-background', '#fff');
        wireButton.src = "/Images/spark.png";
        title.innerText = "";
        sax.pause();
        macarena.play();
        //r.style.setProperty('--main-header-background', 'rgba(255, 255, 255, 0.53)')
    } else if(theme === rs.getPropertyValue('--light-theme')) {
        r.style.setProperty('--theme', rs.getPropertyValue('--dark-theme'));
        r.style.setProperty('--main-background', 'rgb(0,0,0)');
        r.style.setProperty('--main-fonts-color', '#fff');
        r.style.setProperty('--main-decor-color', '#fff');
        b.style.background="url(/Images/Gandalf.gif) no-repeat";
        b.style.setProperty('opacity', 0.8);
        b.style.setProperty('background-size', 'cover');
        b.style.setProperty('background-position', 'center');
        r.style.setProperty('--main-header-background', 'rgba(0, 0, 0, 0.53)');
        r.style.setProperty('--scrollbar-colour', '#fff');
        r.style.setProperty('--scrollbar-background', 'rgba(5,5,5,1)');
        wireButton.src = "/Images/sparkW.png";
        macarena.pause()
        sax.play();
    } else {
        alert('Theme change error, value of --theme is ' + theme);
    }

}

const disco = () => {
    const r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    const wireButton = document.querySelector(".navbar #wire");
    wireButton.onclick = () => {
        if (rs.getPropertyValue('--disco-bool') === (rs.getPropertyValue('--disco-no'))) {
            r.style.setProperty('--main-fonts-color', 'red');
            r.style.setProperty('--disco-bool', rs.getPropertyValue('--disco-yes'));
        } else if (rs.getPropertyValue('--disco-bool') === rs.getPropertyValue('--disco-yes')) {
            r.style.setProperty('--disco-bool', rs.getPropertyValue('--disco-no'));
            if(rs.getPropertyValue('--theme') === rs.getPropertyValue('--dark-theme')){
                r.style.setProperty('--theme', rs.getPropertyValue('--light-theme'));
                changeTheme();
            } else if(rs.getPropertyValue('--theme') === rs.getPropertyValue('--light-theme')) {
                r.style.setProperty('--theme', rs.getPropertyValue('--dark-theme'));
                changeTheme();
            } else {
                alert('Disco to normal error!!!!!!')
            }
        } else {
            alert('disco error!!!!!!');
        }
    }
}



window.onload = () => {
    navSlide()
    themeButtonFunc()
    disco();
}









