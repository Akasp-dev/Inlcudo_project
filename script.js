const navbar = document.querySelector(".scroll-up");
navbar.classList.add("unscrolled");

document.addEventListener("scroll", ()=>{
    const sectionHeight = document.querySelector(".main").offsetHeight;
    if(window.scrollY > sectionHeight/2){
        navbar.classList.remove("unscrolled");
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
        navbar.classList.add("unscrolled");
    }
});

const buttons = Array.from(document.querySelectorAll(".btn"));
const sections = Array.from(document.querySelectorAll(".section"));

buttons.forEach(e => e.onclick = () => sections[buttons.indexOf(e)].scrollIntoView({block: "end", behavior: "smooth"})); 