document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let input = document.querySelector('#new-task-description')
  let list = document.querySelector('#list ul')
  let clearAll = document.querySelector('#clear-all')

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    addListItem(input.value)
    input.value = ""
  })

  clearAll.addEventListener('submit', function (e) {
    e.preventDefault()
    list.innerHTML = ""
  })

  function addListItem(newListItem) {
    let newItem = document.createElement('li')
    newItem.textContent = newListItem + "   "



    let deleteButton = document.createElement('button')
    addedItem = list.appendChild(newItem)
    addedItem.appendChild(deleteButton)
    deleteButton.textContent = "Delete"
    buttons = document.querySelectorAll('button')
    deleteButton.id = `button${buttons.length}`
    lastButton = document.querySelector(`#button${buttons.length}`)
    createEventListener(lastButton)


  }

  // buttons = document.querySelectorAll('button')
  // buttons.addEventListener(click, function(){

  function createEventListener(button) {
    button.addEventListener('click', function (e) {
      button.parentElement.remove()
      console.log("last button was clicked")
    })
  }



});
