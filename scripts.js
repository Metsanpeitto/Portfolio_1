/**
 * ====================================================
 *  handleClick
 *  -This is the function that controls the menu button
 *  that display when pressed in the mobile version.
 * ====================================================
 */
const handleClick = () => {
  const buttons = document.getElementsByClassName('menu-buttons');
  const menu = document.getElementsByClassName('menu');
  const main = document.getElementsByTagName('main');
  const close = document.getElementsByClassName('menu-close');

  if (buttons[0].style.display === 'grid') {
    buttons[0].style.display = 'none';
    main[0].style.filter = 'none';
    close[0].style.display = 'none';
    menu[0].style.display = 'block';
  } else {
    buttons[0].style.display = 'grid';
    main[0].style.filter = 'blur(4px)';
    close[0].style.display = 'block';
    menu[0].style.display = 'none';
  }
};

handleClick();

/**
 * ====================================================
 *  onScroll Section detector
 *  -This is the function that controls the bar bellow the
 *  menu buttons.
 * ====================================================
 */
function scrollDetectSection(section) {
  const { scrollTop } = document.getElementById(section);
  const { scrollHeight } = document.getElementById(section).scrollHeight; // added
  const { offsetHeight } = document.getElementById(section).offsetHeight;
  // var clientHeight = document.getElementById('box').clientHeight;
  const contentHeight = scrollHeight - offsetHeight; // added
  if (contentHeight <= scrollTop) {
    // Now this is called when scroll end!
  }
}

document.getElementById('landing').addEventListener(
  'scroll', scrollDetectSection(), false,
);

document.getElementById('works').addEventListener(
  'scroll', scrollDetectSection(), false,
);

document.getElementById('about').addEventListener(
  'scroll', scrollDetectSection(), false,
);

document.getElementById('contact').addEventListener(
  'scroll', scrollDetectSection(), false,
);
