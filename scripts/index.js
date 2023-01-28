// Verschijn animatie Joep Klaassen
function verschijnen1(){
    const h1 = document.querySelector('h1')
    h1.classList.add('test')
    setTimeout(()=>{
        h1.classList.remove('test')
    },700)
}

function verschijnen2(){
    const h2 = document.querySelector('h2')
    h2.classList.add('test')
    setTimeout(()=>{
        h2.classList.remove('test')
    },1400)
}

verschijnen1()
verschijnen2()









// FRONT END developer typing animatie

function verschijnTekst(){
    const tekst1 = document.querySelectorAll('section#landing h3:first-of-type span')

    setTimeout(()=>{  tekst1[0].classList.add('verschijn')},2000)
    setTimeout(()=>{  tekst1[1].classList.add('verschijn')},2500)
    setTimeout(()=>{  tekst1[2].classList.add('verschijn')},3000)
}

verschijnTekst()




// Front end DEVELOPER typing animatie
function typingAnimatie(){
    const tekst = document.querySelectorAll('section#landing h3:nth-of-type(2) span')
    
    setTimeout(()=>{  tekst[0].classList.add('typing')},150)
    setTimeout(()=>{  tekst[1].classList.add('typing')},300)
    setTimeout(()=>{  tekst[2].classList.add('typing')},450)
    setTimeout(()=>{  tekst[3].classList.add('typing')},600)
    setTimeout(()=>{  tekst[4].classList.add('typing')},750)
    setTimeout(()=>{  tekst[5].classList.add('typing')},900)
    setTimeout(()=>{  tekst[6].classList.add('typing')},1050)
    setTimeout(()=>{  tekst[7].classList.add('typing')},1200)
    setTimeout(()=>{  tekst[8].classList.add('typing')},1350)   
}

setTimeout(()=>{
    typingAnimatie()
},3000)








// Volg cursor gebruiker
const cursorBox = document.querySelector('#cursorBox')

document.addEventListener('mousemove', ((e)=>{
    const x = e.pageX
    const y = e.pageY
    cursorBox.style.left = x + 'px'
    cursorBox.style.top = y + 'px'
}))

document.addEventListener('mousedown', (()=>{
    cursorBox.classList.add('mouseDown')
}))

document.addEventListener('touchstart', ((e)=>{
    e.preventDefault() // Prevent mousedown event
}))

document.addEventListener('mouseup', (()=>{
    cursorBox.classList.remove('mouseDown')
}))








// Intersection observer  About me
const navAboutMe = document.querySelector('aside a:first-of-type')
const navWork = document.querySelector('aside a:nth-of-type(2)')
const navContact = document.querySelector('aside a:nth-of-type(3)')


function aboutMeObserver() {
    let options = {
    //   rootMargin: "0px",
        threshold: 0.5
    };

    let observer
    const boxElement = document.querySelector('section#aboutMe')
  
    observer = new IntersectionObserver(aboutActive, options)
    observer.observe(boxElement)
}
  
aboutMeObserver()

function aboutActive(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAboutMe.classList.add('active')
        navWork.classList.remove('active')
        navContact.classList.remove('active')
      } else {
        navAboutMe.classList.remove('active')
      }
    })
}




// Intersection observer work
function workObserver() {
    let options = {
    //   rootMargin: "0px",
        threshold: 0.5
    };

    let observer
    const boxElement = document.querySelector('section#work')
  
    observer = new IntersectionObserver(workActive, options)
    observer.observe(boxElement)
}
  
workObserver()

function workActive(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navWork.classList.add('active')
        navAboutMe.classList.remove('active')
        navContact.classList.remove('active')
      }
    })
  }




// Intersection observer work
function contactObserver() {
    let options = {
    //   rootMargin: "0px",
        threshold: 0.5
    };

    let observer
    const boxElement = document.querySelector('section#contact')
  
    observer = new IntersectionObserver(contactActive, options)
    observer.observe(boxElement)
}
  
contactObserver()

function contactActive(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navContact.classList.add('active')
        navAboutMe.classList.remove('active')
        navWork.classList.remove('active')
      }
    })
  }