/**
 * ====================================================
 *  Menu Handler
 *  This is all the code needed to manage the menu and
 *  its different features.
 * ====================================================
 */
/**
 * ====================================================
 *  observer Section detector
 *  -This is the function that controls the bar bellow the
 *  menu buttons. It will change depending on the section
 *  that is currently shown in the viewport at the time.
 * ====================================================
 */

function applyBorder(id) {
  // This function is used by two other different functions
  // Sometimes it will receive a parameter with the suffix '-btn'
  // in that case there is no need to add it. So the concatenating
  // step is skipped.
  let idBtn = id
  if (!idBtn.includes('-btn')) {
    idBtn = `${id}-btn`
  }
  // These lines restart the style border bottom to none before assigning
  // the border style to the right one in this case.
  document.getElementById('works-btn').style.borderBottom = 'none'
  document.getElementById('about-btn').style.borderBottom = 'none'
  document.getElementById('contact-btn').style.borderBottom = 'none'
  const button = document.getElementById(idBtn)
  button.style.borderBottom = '2px solid gray'
}

const observer = new IntersectionObserver(
  (entries) => {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    const elementId = entries[0].target.id
    if (entries[0].isIntersecting === true) {
      // After knowing if the section is visible, the applyBorder function
      // will set the style propperty border bottom to the desired button.
      applyBorder(elementId)
    }
  },
  { threshold: [0] }
)
// This line uses observe to keep track of the desired sections
observer.observe(document.querySelector('#works'))
observer.observe(document.querySelector('#about'))
observer.observe(document.querySelector('#contact'))

/**
 * ====================================================
 *  handleClickMenu
 *  -This is the function that controls the menu button
 *  that display when it is pressed in the mobile version.
 * ====================================================
 */
function handleClickMenu() {
  const buttons = document.getElementsByClassName('menu-buttons')
  const menu = document.getElementsByClassName('menu')
  const main = document.getElementsByTagName('main')
  const close = document.getElementsByClassName('menu-close')

  if (buttons[0].style.display === 'grid') {
    buttons[0].style.display = 'none'
    main[0].style.filter = 'none'
    close[0].style.display = 'none'
    menu[0].style.display = 'block'
  } else {
    buttons[0].style.display = 'grid'
    main[0].style.filter = 'blur(4px)'
    close[0].style.display = 'block'
    menu[0].style.display = 'none'
  }
}

const menu = document.getElementsByClassName('menu')
const menuClose = document.getElementsByClassName('menu-close')
menu[0].addEventListener('click', handleClickMenu, false)
menuClose[0].addEventListener('click', handleClickMenu, false)

/**
 * ====================================================
 *  handleClickButton
 *  -This is the function that controls the buttons inside
 *  the menu for the mobile version.
 *  - When a button is pressed it should automatically
 *  scroll to the desired section and close the modal.
 * ====================================================
 */
function handleClickButton(e) {
  // Check if 'menu-close' is being used. That means that we are
  // in the mobile version and changes should apply
  const close = document.getElementsByClassName('menu-close')
  if (close[0].style.display === 'block') {
    handleClickMenu()
  } else {
    applyBorder(e.currentTarget.id)
  }
}

const buttons = document.getElementsByClassName('menu-button')
Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', handleClickButton)
})
