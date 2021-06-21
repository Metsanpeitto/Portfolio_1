const handleClick = () => {
  const buttons = document.getElementsByClassName('menu-buttons');
  const menu = document.getElementsByClassName('menu');
  const main = document.getElementsByTagName('main');
  const close = document.getElementsByClassName('menu-close');

  if (buttons[0].style.display === 'none') {
    buttons[0].style.display = 'grid';
    main[0].style.filter = 'blur(4px)';
    close[0].style.display = 'block';
    menu[0].style.display = 'none';
  } else {
    buttons[0].style.display = 'none';
    main[0].style.filter = 'none';
    close[0].style.display = 'none';
    menu[0].style.display = 'block';
  }
};

handleClick();
