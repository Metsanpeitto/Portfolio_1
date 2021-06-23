/**
 * ====================================================
 *  Portfolio Generator
 *  this is the code used to generate dynamically the
 *  different components that compose the portfolio
 *  section and their different cards.
 * ====================================================
 */
import * as data from './portfolio_data.js';

/**
 *  Element Generator
 *  This function will assist in the creation of different
 *  elements. In the case of some parameters not existing
 *  it should receive null.
 *                        tag | class |content| idName
 *  ie: elementGenerator('div', 'main', null,    null )
 */
function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName);
  if (className) {
    element.className = className;
  }
  if (content) {
    element.textContent = content;
  }
  if (idName) {
    element.id = idName;
  }
  return element;
}

// This is the modal generator function. It receives the id of the portfolio
// to build from the modal_handler that calls it and gets the data to include from the
// portfolio_data file where all the data from the portfolio is stored
function modalGenerator(id) {
  let portfolio;
  data.default.forEach((p) => {
    if (p.id === id) {
      portfolio = p;
    }
  });
  // Get the section element 'modal' where to add the generated elements
  const modal = document.getElementById('modal');
  // Create a main block div 'modal-content' where to add the elements
  const modalContent = elementGenerator('div', 'modal-content', null, null);

  // Create a block div 'modal-text' where to store elements
  const modalText = elementGenerator('div', 'modal-text', null, null);
  // Create the section 'Text' and add an element 'title'
  const text = elementGenerator('div', 'text-m', null, null);
  const textTitle = elementGenerator(
    'h2',
    'text-m__title-m',
    portfolio.textTitle,
    null,
  );

  text.appendChild(textTitle);
  // Create the breadcrumb group 'textBread'
  const textBread = elementGenerator('div', 'text-m__breadcrumb-m', null, null);
  // Create the breadcrumbs 'bread' and add the content 'text'
  // To do that iterate over the different parameters of the array bread
  portfolio.bread.forEach((b, index) => {
    let bread;
    let breadText;
    // For the first bread there is a dedicated class
    if (index === 0) {
      bread = elementGenerator('div', 'breadcrumb-1-m', null, null);
      breadText = elementGenerator('h5', 'breadcrumb-text-1-m', b, null);
      bread.appendChild(breadText);
    } else {
      bread = elementGenerator('div', 'breadcrumb-m', null, null);
      breadText = elementGenerator('h6', 'breadcrumb-text-m', b, null);
      bread.appendChild(breadText);
    }
    // Add the bread to the bread group
    textBread.appendChild(bread);
    // Create a dot and add it to the bread group for the 2 first 'bread'
    if (index !== 2) {
      const dot = elementGenerator('div', 'dot-m', null, null);
      textBread.appendChild(dot);
    }
  });

  // Add the breadcrumb group to the section 'text'
  text.appendChild(textBread);
  // Add the section 'text' to the block 'modal-text'
  modalText.appendChild(text);
  // Create the img and add it to the block 'modal-text'
  const modalImg = elementGenerator('img', 'modal-close', null, null);
  modalImg.src = './images/close-modal.svg';
  modalImg.alt = 'close icon';
  modalImg.height = '87px';
  modalImg.width = '100px';
  modalText.appendChild(modalImg);
  // Add the block 'modalText' to the main block 'modalContent'
  modalContent.appendChild(modalText);
  // Create a div background image container 'image-container' and add an image
  const imgContainer = elementGenerator('div', 'image-container', null, null);
  // There is a conflict when two elements are called same way but
  // located on different files. Fix it adding '-m' so the class will change from
  // 'image image-1' to -> 'image-m image-1'
  let str = portfolio.image;
  str = str.replace('image', 'image-m');
  const modalImage1 = elementGenerator('img', str, null, null);
  imgContainer.appendChild(modalImage1);
  // Add the div background image container to the main block 'modalContent'
  modalContent.appendChild(imgContainer);

  // Create a div block 'text-container'
  const textContainer = elementGenerator('div', 'text-container', null, null);
  // Create a div container 'textContainerLeft'
  const textContainerLeft = elementGenerator(
    'div',
    'text-container__left',
    null,
    null,
  );
  // Create a parraf 'parraf' and add it to the 'textContainerLeft'
  const parraf = elementGenerator('p', 'parraf', portfolio.parraf, null);
  textContainerLeft.appendChild(parraf);
  // Add 'textContainerLeft' to the block 'textContainer;
  textContainer.appendChild(textContainerLeft);

  // Create a div container 'textContainerRight'
  const textContainerRight = elementGenerator(
    'div',
    'text-container__right',
    null,
    null,
  );

  // Create a group 'bubbles'
  const bubbles = elementGenerator('ul', 'modal__bubbles-m', null, null);
  // Iterate over the array bubbles to create each element 'bubble'
  portfolio.bubbles.forEach((b) => {
    const bubble = elementGenerator('li', 'bubble-m', null, null);
    // Create a text element 'bubbleText' and add it to 'bubble'
    const bubbleText = elementGenerator('h5', 'bubble-text-m', b, null);
    bubble.appendChild(bubbleText);
    // Add the elements 'bubble' to the group 'bubbles'
    bubbles.appendChild(bubble);
  });
  // Add the group 'bubbles' to the container 'textContainerRight'
  textContainerRight.appendChild(bubbles);

  // Create the division 'modalAction'
  const modalAction = elementGenerator('div', 'modal__action', null, null);
  // Create a button 'btn'
  const btn = elementGenerator(
    'button',
    'c-b-normal-button portfolio-btn',
    'See Live',
    null,
  );
  // Create an image 'liveIcon' and add it to the button
  const liveIcon = elementGenerator('img', 'live-icon', null, null);
  liveIcon.src = './images/live.svg';
  liveIcon.alt = 'live icon';
  liveIcon.height = '87px';
  liveIcon.width = '100px';
  btn.appendChild(liveIcon);

  // Add the 'btn' to the division 'modalAction'
  modalAction.appendChild(btn);

  // Create a button 'btn2'
  const btn2 = elementGenerator(
    'button',
    'c-b-normal-button portfolio-btn',
    'See Source',
    null,
  );
  // Create an image 'gitIcon' and add it to the button
  const gitIcon = elementGenerator('img', 'git-icon', null, null);
  gitIcon.src = './images/git-blue.svg';
  gitIcon.alt = 'git icon';
  gitIcon.height = '87px';
  gitIcon.width = '100px';
  btn2.appendChild(gitIcon);

  // Add the 'btn2' to the division 'modalAction'
  modalAction.appendChild(btn2);

  // Add the division 'modalAction' to the container 'textContainerRight'
  textContainerRight.appendChild(modalAction);
  // Add the division 'textContainerRight' to the block 'textContainer'
  textContainer.appendChild(textContainerRight);
  // Add the block 'textContainer' to the main block 'modalContent'
  modalContent.appendChild(textContainer);
  // Add the main block 'modalContent' to the section 'modal'
  modal.appendChild(modalContent);
  // Create a div to hold a line call it 'line-shape' and add it to 'modalContent'
  const line = elementGenerator('div', 'modal-shape', null, null);
  modal.appendChild(line);
}

export default modalGenerator;
