function handleClick() {
  let buttons = document.getElementsByClassName('menu-buttons')
  let menu = document.getElementsByClassName('menu')
  let main = document.getElementsByTagName('main')
  let close = document.getElementsByClassName('menu-close')

  console.log(close)
  if (buttons[0].style.display == 'none') {
    buttons[0].style.display = 'grid'
    main[0].style.filter = 'blur(4px)'
    close[0].style.display = 'block'
    menu[0].style.display = 'none'
  } else {
    buttons[0].style.display = 'none'
    main[0].style.filter = 'none'
    close[0].style.display = 'none'
    menu[0].style.display = 'block'
  }
}
