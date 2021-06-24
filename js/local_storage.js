/**
 *    Local Storage Function
 *    This is the code needed to store locally the variables
 *    and parameters used in the creation of this project
 *
 * You should implement the following interactions:

When the user changes the content of any input field, the data is saved to the local storage.
When the user loads the page, if there is any data in the local storage the input fields are
pre-filled with this data.
You should use the following data model:

You must create a single JavaScript object with all the data from the entire form and save it in
local storage. Do not create one local storage entry per input field.
 */

/* This function will parse the values of the fields to a string and when needed will cal the
 * 'storeIt' function to finally store it in local storage if the values stored are not symilar
 * to the ones that we want to store.
 * However first, it is needed to detect if localstorage is available in the browser.
 * To do that use the following function
 */

let jsonObj

function storageAvailable(type) {
  let storage
  try {
    storage = window[type]
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    )
  }
}

function parseIt(v, index) {
  let name
  let email
  let message
  switch (index) {
    case 0:
      name = v
      break
    case 1:
      email = v
      break
    case 2:
      message = v
      break
    default:
      console.log('No input detected')
  }

  jsonObj = JSON.stringify({ name, email, message })
  console.log(jsonObj)
}

// Create event listeners for every input field, so they detect any change and if submitted
// the changes will be stored.
const nameInput = document.getElementById('full-name')
const email = document.getElementById('email-address')
const message = document.getElementById('message')

const elements = [nameInput, email, message]
elements.forEach((e, index) => {
  e.addEventListener('change', (event) => {
    parseIt(event.target.value, index)
  })
})
