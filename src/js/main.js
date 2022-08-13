const body = document.body
const header = body.querySelector('header')
const footer = body.querySelector('footer')

// header menu
const headerBurgerButton = header.querySelector('.header__burger')

header.addEventListener('click', (event) => {
  let eventTarget = event.target
  if (eventTarget == headerBurgerButton) {
    body.classList.toggle('body--menu-open')
  }
  if (
    eventTarget.classList.contains('header__logo') ||
    eventTarget.classList.contains('header__link') ||
    eventTarget.classList.contains('header__social-link') ||
    eventTarget.classList.contains('header__docs')
  ) {
    body.classList.remove('body--menu-open')
  }
})

// handle visual height unit

const handleVisualHeightUnit = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

handleVisualHeightUnit()

window.addEventListener('load', (event) => {
  handleVideosRender()
});

// resize event listener

let windowPreviousWidth = window.innerWidth

resizeWindowActions = () => {
  handleVisualHeightUnit()
}

window.addEventListener('resize', resizeWindowActions)