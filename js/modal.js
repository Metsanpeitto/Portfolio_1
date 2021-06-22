/**
 *    ==========================================================
 *    This is the code used to implement the modal popup
 *    that appears when we click on the button 'show details'
 *    of every project in the portfolio section.
 *    ==========================================================
 */
// The first function will set a listener on the button and get
// the id name of the parent element to know what data to
// load on the modal.
function handleClickButtonPortfolio(e) {
  // 1st open the modal popup
  const modal = document.getElementById('modal');
  modal.style.display = 'grid';
  // 2nd pass the parameters from the portfolio section
  // and add it to every element into the modal popup
}

const buttonsPortfolio = document.getElementsByClassName('portfolio-btn');
Array.from(buttonsPortfolio).forEach((btn) => {
  btn.addEventListener('click', handleClickButtonPortfolio);
});

// This is the function used to close the modal
function handleCloseModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

const closeModal = document.getElementsByClassName('modal-close');
closeModal[0].addEventListener('click', handleCloseModal);
