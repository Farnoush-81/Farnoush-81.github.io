const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{
  const open = nav.classList.toggle("open");
  nav.style.display = open ? "flex" : "";
  nav.style.position = open ? "absolute" : "";
  nav.style.top = open ? "70px" : "";
  nav.style.right = open ? "5vw" : "";
  nav.style.left = open ? "5vw" : "";
  nav.style.flexDirection = open ? "column" : "";
  nav.style.padding = open ? "20px" : "";
  nav.style.background = open ? "rgba(255,255,255,.96)" : "";
  nav.style.border = open ? "1px solid #e6e3ed" : "";
  nav.style.borderRadius = open ? "18px" : "";
});

document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  if(window.innerWidth<=700) nav.style.display="none";
}));

window.addEventListener("scroll",()=>{
  const header=document.querySelector(".navbar");
  header.style.boxShadow=window.scrollY>30 ? "0 8px 35px rgba(23,24,39,.06)" : "none";
});
