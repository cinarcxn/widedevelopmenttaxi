// LOADER
window.addEventListener("load",()=>{
  const loader=document.querySelector(".loader");
  setTimeout(()=>{
    loader.style.opacity="0";
    loader.style.pointerEvents="none";
  },1600);
});


// =======================================
// NEXT LEVEL SMOOTH SCROLL ENGINE
// =======================================

let current = 0;
let target = 0;
let ease = 0.07;
let isScrolling = false;

document.body.classList.add("smooth-active");

function animateScroll(){
  current += (target - current) * ease;
  window.scrollTo(0,current);

  if(Math.abs(target-current) > 0.5){
    requestAnimationFrame(animateScroll);
  } else {
    isScrolling = false;
    document.body.classList.remove("scrolling");
  }
}

window.addEventListener("wheel", e=>{
  target += e.deltaY;
  target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));

  if(!isScrolling){
    isScrolling = true;
    document.body.classList.add("scrolling");
    requestAnimationFrame(animateScroll);
  }
});


// =======================================
// NAVBAR BLUR ON SCROLL
// =======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 80){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// =======================================
// HERO PARALLAX + DEPTH
// =======================================

const hero=document.querySelector(".hero");
const video=document.getElementById("heroVideo");

hero.addEventListener("mousemove",e=>{
  const x=(e.clientX/window.innerWidth-0.5)*40;
  const y=(e.clientY/window.innerHeight-0.5)*40;
  video.style.transform=`translate(${x}px,${y}px) scale(1.08)`;
});


// =======================================
// CINEMATIC SECTION FADE SWITCH
// =======================================

const sections = document.querySelectorAll("section");

const fadeObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.remove("fade-out");
    } else {
      entry.target.classList.add("fade-out");
    }
  });
},{threshold:0.2});

sections.forEach(sec=>fadeObserver.observe(sec));


// =======================================
// SCROLL REVEAL
// =======================================

const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.3});

reveals.forEach(r=>observer.observe(r));