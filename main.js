
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })
  
  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)





gsap.registerPlugin(ScrollTrigger)
let pos = document.querySelector('.banner-img-wrapper').getBoundingClientRect().y/10;
pos+=20
if(window.innerWidth<860){
    pos-=6
}
console.log(pos);
let imgby = -300
if(window.innerWidth<700){
    imgby = -150
}
if(window.innerWidth<500){
    imgby = -70
}
document.querySelectorAll('.banner-img-wrapper img').forEach(img=>{
    gsap.from(img,{
        y:imgby,
        scrollTrigger:{
            trigger:'.banner-img-wrapper',
            start:`top ${pos}%`,
            end:'bottom top',
            scrub:2,
            
        }
    })
})
let scrollby = 200
if(window.innerWidth<1000){
    scrollby = 150
}
if(window.innerWidth<700){
    document.querySelectorAll('.card img').forEach(img=>{
        gsap.from(img,{
            y:-200,
            scrollTrigger:{
                trigger:img,
                start:'30% 90%',
                end:'bottom 20%',
                scrub:2,
                stagger:3
            }
        })
    })
    document.querySelectorAll('.card-inner').forEach(item=>{
        gsap.to(item,{
            y:230,
            scrollTrigger:{
                trigger:item,
                start:'top 90%',
                end:'bottom top',
                scrub:2,
                
            }
        })
    })
}else{
    gsap.from('.card img',{
        y:-200,
        scrollTrigger:{
            trigger:'.cards',
            start:'top bottom',
            end:'bottom 20%',
            scrub:2,
        }
    })
    gsap.to('.card-inner',{
        y:scrollby,
        scrollTrigger:{
            trigger:'.card-inner',
            start:'top bottom',
            end:'bottom top',
            scrub:2,
        }
    })
}
const bnc = document.querySelector('.banner-cursor');
document.querySelector('.banner-imgs').addEventListener('mouseenter',(e)=>{
    gsap.to(bnc,{
        left: e.clientX,
        top: e.clientY,
        duration:0
    })
})
document.querySelector('.banner-imgs').addEventListener('mousemove',(e)=>{
    gsap.to(bnc,{
        left: e.clientX,
        top: e.clientY,
        opacity:1,
        scale:1,
    })
})
document.querySelector('.banner-imgs').addEventListener('mouseleave',(e)=>{
    gsap.to(bnc,{
        opacity:0,
        scale:0,
        duration:0.5,

    })
})

