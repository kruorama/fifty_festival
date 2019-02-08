// creating long line for the intro
function makeMarquee() {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
  const marqueeText = new Array(50).fill(title).join(' — ')
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
}

// generating random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function scaleCircles() {
  const circles = document.querySelectorAll('.circle')
  circles.forEach((circle, index) => {
    circle.animate([{transform: 'scale(1)'}, {transform: 'scale(1.2)'}, {transform: 'scale(1)'}], {
      duration: 3000,
      iterations: Infinity,
      delay: index * 300
    })
  })
}

function rotateSquiggles() {
  const squiggles = document.querySelectorAll('.squiggle')
  squiggles.forEach((squiggle, index) => {
    const randomNumber = random(10, 20)
    squiggle.animate(
      [
        {transform: 'rotate(0deg)'},
        {transform: `rotate(-${randomNumber}deg)`},
        {transform: 'rotate(0deg)'},
        {transform: `rotate(${randomNumber}deg)`},
        {transform: 'rotate(0deg)'}
      ],
      {
        duration: 8000,
        iterations: Infinity,
        delay: index * 300
      }
    )
  })
}

// assigning .in-viewport class to elements of giving class when they enter viewport by 20%
// using an external library https://github.com/camwiegert/in-view
function assignInViewport(classname) {
  inView(classname)
    .on('enter', classname => {
      classname.classList.add('in-viewport')
    })
    .on('exit', classname => {
      classname.classList.remove('in-viewport')
    })

  inView.threshold(0.2)
}

// creating delay for animation
function createDelay() {
  const sections = document.querySelectorAll('.section')
  sections.forEach((section, index) => {
    const artists = section.querySelectorAll('.lineup li')
    const shapes = section.querySelectorAll('.shape')
    artists.forEach((artist, index) => {
      const delay = index * 100
      // somehow it's a way to change the css
      artist.style.transitionDelay = delay + 'ms'
    })
    shapes.forEach((shape, index) => {
      // making sure shapes are appearing after lineup
      const delay = (artists.length + index) * 100
      shape.style.transitionDelay = delay + 'ms'
    })
  })
}

const scrollLinks = document.querySelectorAll('.js-scroll')
scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    const href = link.getAttribute('href')

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

makeMarquee()
scaleCircles()
rotateSquiggles()
assignInViewport('.section')
createDelay()
