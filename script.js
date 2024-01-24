document.addEventListener("scroll", ()=>{
    const navbar = document.querySelector(".upper-bar");
    const sectionHeight = document.querySelector(".main").offsetHeight;
    if(window.scrollY > sectionHeight/3){
        navbar.classList.add("scrolled");
        navbar.style.width = "100vw";
        navbar.style.height = "8vh";
    }else{
        navbar.classList.remove("scrolled");
        navbar.style.width = "65vw";
        navbar.style.height = "10vh";
    }
});

const buttons = Array.from(document.querySelectorAll(".btn"));
const sections = Array.from(document.querySelectorAll(".section"));

buttons.forEach(e => e.onclick = () => sections[buttons.indexOf(e)].scrollIntoView({block: "end", behavior: "smooth"})); 