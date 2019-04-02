// your code here
// const form = document.querySelector("#create-task-form")
// const button = document.querySelector(".button")

document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector('#create-task-form')
  const tasks = document.querySelector('#tasks')
  const input = document.querySelector("#new-task-description")

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const list = document.createElement("li") //must be in this scope bc a new list is made every time we submit something
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    list.innerText = input.value
    tasks.append(list)
    list.append(deleteButton)

    deleteButton.addEventListener('click', function (e) {
      list.remove()
    })
  })

})