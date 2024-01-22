document.addEventListener("scroll", ()=>{
    const navbar = document.querySelector(".upper-bar");
    const sectionHeight = document.querySelector(".main").offsetHeight;
    if(window.scrollY > sectionHeight/3){
        navbar.classList.add("scrolled");
        navbar.style.width = "100vw";
        navbar.style.height = "5vh";
    }else{
        navbar.classList.remove("scrolled");
        navbar.style.width = "65vw";
        navbar.style.height = "8vh";
    }
});