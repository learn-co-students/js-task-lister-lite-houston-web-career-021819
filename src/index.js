document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const input = document.querySelector("#new-task-description")
  const tasks = document.querySelector("#tasks")
  const delete_button = document.querySelector("#delete_button")
  const last_child = tasks.children[tasks.children.length - 1]

  form.addEventListener('submit', function(e){
        e.preventDefault()
        let new_li = document.createElement("li")
        new_li.innerText = input.value
        tasks.appendChild(new_li)

        let button = document.createElement("input")
        button.type = "submit"
        button.value = "Delete"

        new_li.appendChild(button)
        button.addEventListener('click', function(e){
              e.preventDefault()
              console.log("This bit worked")
              new_li.remove()
            })
      })

  delete_button.addEventListener('click', function(e){
        e.preventDefault()
        console.log("This bit worked")
      while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
      }
      })
})
